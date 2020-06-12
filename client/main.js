const baseUrl = 'http://localhost:3000'
let idData = null

$( document ).ready(function() {
    // console.log('cek')
    searchRestaurant(event)
    // auth()
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

// function showRestaurant() {
//     // console.log(localStorage.token)
//     $.ajax({
//         method: 'get',
//         url: `${baseUrl}/restaurants`,
//         headers: {
//             access_token: localStorage.access_token
//         }
//     })
//     .done(data => {
//         console.log(data, 'ini data')
        // data.forEach(restaurant => {
        //     $('.container-home').append(`
        //     <tr>
        //         <td>${restaurant.name}</td>
        //         <td>${restaurant.addresss}</td>
        //         <td>
        //             <a onclick="toEditPage(id)" class="btn btn-warning" href="#">Edit</a>
        //             <a onclick="deleteTodo(id)" class="btn btn-danger" href="#">Delete</a>
        //         </td>
        //     </tr>
        //     `)
        // })
//     })
//     .fail(err => {
//         console.log(err.responseJSON.errors, 'ini error')
//     })
// }

// function toHome() {
//     $('.home-page').show()
//     $('.add-todo').hide()
//     $('.edit-todo').hide()
// }

// function login(event) {
//     event.preventDefault()
//     let email = $( '#email' ).val()
//     let password = $( '#password' ).val()
//     $.ajax({
//         method: 'post',
//         url: `${baseUrl}/users/login`,
//         data: { email, password }
//     })
//     .done(data => {
//         localStorage.setItem('access_token', data.access_token)
//         auth()
//     })
//     .fail(err => {
//         console.log(err)
//     })
//     // .always(() => {
//     //     $( '#email' ).val('')
//     //     $( '#password' ).val('')
//     // })
// }

// function logout() {
//     localStorage.clear()
//     auth()
// }