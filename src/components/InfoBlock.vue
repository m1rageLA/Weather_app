<template lang="">
  <div class="content">
    <div v-if="loading">ЗАГРУЗКА...</div>
    <div v-else>
      <template v-if="weatherData">
        <p>{{ city }}</p>
        <p>Температура:{{ Math.round(weatherData.main.temp - 273.15) }} °C</p>
      </template>
      <template v-else>
        <p>Температура недоступна</p>
      </template>
    </div>
    <img src="../assets/mount.png" class="loading" alt="mountains" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'GetCurrentWeather',
  props: {
    city: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const weatherData = ref(null) //типо useState()
    const loading = ref(false)
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${props.apiKey}`

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        weatherData.value = data
        loading.value = false
      } catch (error) {
        console.error('ERROR->', error)
        loading.value = false
      }
    }

    fetchWeatherData()

    return {
      weatherData,
      loading,
      imageUrl: '../assets/mount.png'
    }
  }
})
</script>
<style lang=""></style>
