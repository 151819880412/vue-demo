import Vue from 'vue'
import App from './App.vue'

//  会有vue2版本到3版本的错误
// new Vue({
//     el:"#app",
//     components:{
//         App
//     },
//     template:'<App/>',
// })

new Vue({
    // el:"#app",
    render: h=>h(App)   //函数返回组件标签<App></App>
    // render:createElement =>createElement(App)
}).$mount('#app')  //挂载到app