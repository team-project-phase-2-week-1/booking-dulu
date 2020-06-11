const baseUrl = 'http://localhost:3000'
let idData = null

$( document ).ready(function() {
    auth()
})

function auth() {
    if (localStorage.access_token) {
        $('.login-page').hide()
        $('.home-page').show()
    } else {
        $('.login-page').show()
        $('.home-page').hide()
    }
}

function toHome() {
    $('.home-page').show()
    $('.add-todo').hide()
    $('.edit-todo').hide()
}

function login(event) {
    event.preventDefault()
    let email = $( '#email' ).val()
    let password = $( '#password' ).val()
    $.ajax({
        method: 'post',
        url: `${baseUrl}/users/login`,
        data: { email, password }
    })
    .done(data => {
        localStorage.setItem('access_token', data.access_token)
        auth()
    })
    .fail(err => {
        console.log(err)
    })
    // .always(() => {
    //     $( '#email' ).val('')
    //     $( '#password' ).val('')
    // })
}

function logout() {
    localStorage.clear()
    auth()
}