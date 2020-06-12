const baseURL = 'http://localhost:3000'

$( document ).ready(function() {
    // Handler for .ready() called.
    // auth()
    console.log('berhasil masuk')
    $('#search-form').submit(function(event) {
        event.preventDefault()
        let city = $('#search').val()
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
    })
  });
  
