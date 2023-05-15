import { createApp } from 'vue';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';

// NEW
if (process.env.NODE_ENV === 'development') {
  import('./mock');
}

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(createPinia());
app.mount('#app');
