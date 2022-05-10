//引入的不再是Vue构造函数（构造函数 new调用）  import  Vue from 'vue',引入的是一个createApp的工厂函数（工厂函数无需通过new关键字）
import { createApp } from "vue";
import App from "./20suspense.vue";

/*vue2写法

new Vue({el:"#app"})   


new Vue({
render:h=>h(App)
}).$mount("#app")   


const vm = new Vue({
    render:h=>h(App)
})

vm.$mount("#app")  
 */

// createApp(App).mount("#app");
//创建应用实例对象-app(类似之前Vue2的vm，但app比vm更“轻”)
const app = createApp(App);
console.log("app", app);
app.mount("#app");
