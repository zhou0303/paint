import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
// 按需引入 
import 'vue-ydui/dist/ydui.base.css';
import { Toast ,Loading} from 'vue-ydui/dist/lib.rem/dialog';

// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

Vue.prototype.$dialog = {
  toast: Toast,
  loading:Loading
};


new Vue({
  router,
  render: h => h(App),
  data(){
    return{
      paintURL:'',
      postURL:''
    }
  }
}).$mount("#app");
