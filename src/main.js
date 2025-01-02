import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { store } from './store'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import Katex from 'vue-katex-auto-render'
const app = createApp(App)

app.directive('katex', Katex);
app.use(store)
app.use(router)

app.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -100,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

app.mount('#app');
