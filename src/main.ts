import { createApp } from "vue";
import App from "./App.vue";
import router, { setupRouter } from "./router"; // 路由
import { setupStore } from "./store"

import "element-plus/theme-chalk/src/message.scss"
import "element-plus/theme-chalk/src/loading.scss"
import "element-plus/theme-chalk/src/form.scss"
import "element-plus/theme-chalk/src/form-item.scss"

// import 'element-plus/theme-chalk/src/index.scss'
import './assets/styles/index.scss'


const app = createApp(App);
setupStore(app)
setupRouter(app); // 引入路由

router.isReady().then(() => {
  app.mount("#app");
});
