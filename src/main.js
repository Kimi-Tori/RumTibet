import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';

import vuetify from '@/plugins/vuetify';
import 'vuetify/styles';
import vuetifyOptions from '@/plugins/vuetify.options';
import '@mdi/font/css/materialdesignicons.css';

import '@/styles/index.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify, vuetifyOptions);
app.mount('#app');