<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.scss'
import type InfoBlock from './components/InfoBlock.vue'
import { defineComponent } from 'vue';
import GetCurrentWeather from './components/InfoBlock.vue'; // Здесь укажите путь к вашему компоненту GetCurrentWeather

export default defineComponent({
  name: 'App',
  components: {
    GetCurrentWeather,
  },
});
</script>

<template>
  <div>
    <main>
      <InfoBlock class="block_night">
        <GetCurrentWeather type="night" :city="'biała podlaska'" :apiKey="'0b1a07bc9f4f7521f4aebbf92b479900'" />
      </InfoBlock>
      <InfoBlock class="block_morning">
        <GetCurrentWeather type="morning" :city="'biała podlaska'" :apiKey="'0b1a07bc9f4f7521f4aebbf92b479900'" />
      </InfoBlock>
      <InfoBlock class="block_day">
        <GetCurrentWeather type="day" :city="'biała podlaska'" :apiKey="'0b1a07bc9f4f7521f4aebbf92b479900'" />
      </InfoBlock>
      <vue-snotify />
    </main>
  </div>

  <RouterView />
</template>

<style scoped>
body {
  background: rgb(228, 174, 238);
  background: radial-gradient(circle, rgba(228, 174, 238, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
</style>
