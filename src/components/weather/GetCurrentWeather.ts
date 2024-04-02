const apiKey: string = '0b1a07bc9f4f7521f4aebbf92b479900'
const city: string = 'London'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log('ERROR->', error))
