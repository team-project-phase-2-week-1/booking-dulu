# booking-dulu

# fancy-todo
Membuat sebuah website fancy todo

# Method 2 (GET/POST)

# List end-points
 - `GET/weather/:city`

GET /restaurants/:city

city string params

response object
 
 
 # POST/weather
 Request:
 params:
    Jakarta

 Response :
 ````json
 [
    
  "coord": {
       "lon": 139.69,
       "lat": 35.69
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
       "temp": 301.99,
       "feels_like": 307,
       "temp_min": 300.15,
       "temp_max": 303.15,
       "pressure": 1004,
       "humidity": 83
  },
  "visibility": 10000,
  "wind": {
       "speed": 2.6,
       "deg": 110
  },
  "clouds": {
       "all": 75
  },
  "dt": 1591926908,
  "sys": {
       "type": 1,
       "id": 8077,
       "country": "JP",
       "sunrise": 1591903495,
       "sunset": 1591955846
  },
  "timezone": 32400,
  "id": 1850144,
  "name": "Tokyo",
  "cod": 200
]
```` 
