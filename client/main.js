const baseUrl = 'http://localhost:3000';
let idData = null;

$( document ).ready(function() {
    authentication();
    searchRestaurant(event)
    
});

function authentication(){
    if(localStorage.access_token){
        $('.login-page').hide();
        $('.register-page').hide();
        $('.restaurant-page').hide();
        $('.weather-page').hide();
    } else {
        $('.login-page').show();
        $('.register-page').hide();
        $('.restaurant-page').hide();
        $('.weather-page').hide();
    }
}

function toRegister(event){
    event.preventDefault();
    $('.register-page').show();
    $('.login-page').hide();
    $('.restaurant-page').hide();
    $('.weather-page').hide();
}

function toRestaurant(event){
    event.preventDefault();
    $('.register-page').hide();
    $('.login-page').hide();
    $('.restaurant-page').show();
    $('.weather-page').hide();
}

function toWeather(event){
    event.preventDefault();
    $('.register-page').hide();
    $('.login-page').hide();
    $('.restaurant-page').hide();
    $('.weather-page').show();
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
        console.log(data, 'inidata')
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
function search (event) {
    event.preventDefault()
    let city = $('#city').val()
    $('.weather-data').empty()
  $.ajax({
      method:'get',
      url: baseURL + `/weather/${city} `
  })
  .done(data => {
    data.main.temp = Math.round(data.main.temp - 273,15); 
      $('.weather-data').append(`
      <h5 class="card-title">${data.name}</h5>
                <p class="card-text">Enjoy Your Day and Have Fun <i class="fa fa-smile-o"></i></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Temp : ${data.main.temp} *C </li>
                <li class="list-group-item">Humidity : ${data.main.humidity}%</li>
                <li class="list-group-item">Wind : ${data.wind.speed} m/s</li>
              </ul>
      `)
      console.log(data.name)
  })
  .fail(err => {
    console.log(err.responseJSON.message)
  })
 }

function searchRestaurant(event) {
    event.preventDefault()
    // console.log('cek')
    let city = $( '#city' ).val()
    $.ajax({
        method: 'get',
        url: `${baseUrl}/restaurants/${city}`,
        data: { city }
    })
    .done(data => {
        $('.container-home').empty()
        console.log(data[0].restaurant.location.address, 'ini data')
        data.forEach(el => {
            $('.container-home').append(`
            <tr>
                <td>${el.restaurant.name}</td>
                <td>${el.restaurant.location.address}</td>
                <td>
                    <a onclick="" class="btn btn-warning" href="#">Book</a>
                </td>
            </tr>
            `)
        })
    })
    .fail(err => {
        console.log(err)
    })
}