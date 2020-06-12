const baseUrl = 'http://localhost:3000'
let idData = null

$( document ).ready(function() {
    // auth()
    searchRestaurant(event)
})

// function auth() {
//     if (localStorage.access_token) {
//         $('.login-page').hide()
//         $('.home-page').show()
//     } else {
//         $('.login-page').show()
//         $('.home-page').hide()
//     }
// }

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