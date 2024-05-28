import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Antd from 'ant-design-vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import eventBus from './plugins/eventBus'

loadFonts();
const app = createApp(App)
app.use(eventBus)
app.use(Antd)
app.use(CKEditor)
app.use(router)
app.use(store)
app.use(vuetify)
app.mount("#app")
