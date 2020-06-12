const baseUrl = 'http://localhost:3000';

$( document ).ready(function() {
    authentication();
    
});

function authentication(){
    if(localStorage.access_token){
        $('.login-page').hide();
        $('.register-page').hide();
        listToDos();
    } else {
        $('.login-page').show();
        $('.register-page').hide();
    }
}
function toRegister(event){
    event.preventDefault();
    $('.register-page').show();
    $('.login-page').hide();
}
function register(event){
    let name = $('#name-reg')
    let email = $('#email-reg').val();
    let password = $('#password-reg').val();
    let gender = $('#gender-reg').val();
    $.ajax({
        method: 'post',
        url: baseUrl + '/register',
        data: { name, email, password, gender }
    })
    .done(data => {
        authentication();
    })
    .fail(err => {
        console.log(err);
    })
}
function login(event){
    event.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        method: 'post',
        url: baseUrl + '/login',
        data: { email, password }
    })
    .done(data => {
        localStorage.setItem('access_token', data.access_token);
        authentication();
    })
    .fail(err => {
        console.log(err);
    })
}
function logout(){
    // localStorage.clear()
    localStorage.removeItem('access_token');
    authentication();
}