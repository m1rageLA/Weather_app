import { createApp } from 'vue'
import { createPinia } from 'pinia'
//@ts-ignore
import snotify from 'vue3-snotify';
import 'vue3-snotify/style';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(snotify);
app.use(createPinia())
app.use(router)

app.mount('#app')
