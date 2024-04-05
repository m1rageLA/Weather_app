<template lang="">
  <div class="content">
    <div v-if="loading">ЗАГРУЗКА...</div>
    <div v-else>
      <template v-if="weatherData">
        <p class="content__temperature">{{ Math.round(weatherData.main.temp) }} °</p>
        <p class="content__city">{{ city }}</p>
      </template>
<template v-else> </template>
</div>
<img src="../assets/mount.png" class="mount" alt="mountains" />
<img :src="srcToElement" :class="element" />
<div class="content__bottom">
  <div class="content__line"></div>
  <template v-if="forecast">
        <p class="bottom-1">{{ Math.round(forecast.list[1].main.temp) }} °</p>
        <p class="bottom-2">{{ Math.round(forecast.list[2].main.temp) }} °</p>
        <p class="bottom-3">{{ Math.round(forecast.list[3].main.temp) }} °</p>
        <p class="bottom-4">{{ Math.round(forecast.list[4].main.temp) }} °</p>
      </template>
  <template v-else> </template>
  <img src="../assets/sun.png" class="sun" />
  <img src="../assets/sun.png" class="sun" />
  <img src="../assets/sun.png" class="sun" />
  <img src="../assets/sun.png" class="sun" />
</div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'GetCurrentWeather',
  mounted() {
    //@ts-ignore
    this.$snotify.error('hello')
  },
  props: {
    type: {
      type: String,
      required: true
    },
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
    const weatherData = ref(null); //типо useState()
    const forecast = ref(null); //типо useState()
    const loading = ref(false);
    const element = ref('');
    const srcToElement = ref('');
    const apiUrlForecast: string = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${props.apiKey}`
    const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${props.apiKey}`

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiUrl)
        const responseForecast = await fetch(apiUrlForecast)
        const dataForecast = await responseForecast.json()
        const data = await response.json()

        if (props.type === 'night') {
          element.value = 'moon'
          srcToElement.value = '../src/assets/moon.png'
          console.log("night");
        }
        if (props.type === 'day') {
          element.value = 'sun_day'
          srcToElement.value = '../src/assets/sun_day.png'
          console.log("day");
        }
        if (props.type === 'morning') {
          element.value = 'sun_morn'
          srcToElement.value = '../src/assets/sun_morn.png'
          console.log("morning");
        }
        weatherData.value = data
        forecast.value = dataForecast
        loading.value = false
      } catch (error) {
        console.error('ERROR->', error)
        loading.value = false
      }
    }

    fetchWeatherData()

    return {
      weatherData,
      forecast,
      loading,
      imageUrl: '../assets/mount.png',
      element,
      srcToElement
    }
  }
})
</script>
<style lang=""></style>
