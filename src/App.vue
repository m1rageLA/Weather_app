<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.scss'
import type InfoBlock from './components/InfoBlock.vue'
</script>

<template>
  <div>
    <main>
      <InfoBlock class="test" />
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
