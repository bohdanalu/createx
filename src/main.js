import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Vue from 'vue';
// import { svgSpritePlugin } from 'vue-svg-sprite';
// import { svgSpriteDirectivePlugin } from 'vue-svg-sprite';


import "./assets/styles/main.scss";

const app = createApp(App);

app.use(router);
// Vue.use(svgSpritePlugin, {
//     url: 'path/to/svg/file.svg',
//     class: 'my-class',
//   })
// Vue.use(svgSpriteDirectivePlugin, {} /* options */)

app.mount("#app");
