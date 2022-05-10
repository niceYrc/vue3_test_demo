<template>
  <h1>个人信息</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h4>种类：{{ job.type }}</h4>
  <h4>内容：{{ job.main }}</h4>
  <button @click="changeinfo">修改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // let name = "张三";
    // let age = 10;

    //包裹ref后 会变成RefImpl的对象  （引用对象）
    // Ref => reference 引用   Impl => implement 实现  通过get，set实现响应式
    //在模版里会解析ref的引用对象 所以不用加value
    //对象类型的ref 下的reference的value 会变成proxy
    let name = ref("张三");
    let age = ref(10);
    let job = ref({
      type: "前端",
      main: "端茶",
    });

    function changeinfo() {
      //   name = "李四";
      //   age = 48;
      name.value = "李四";
      age.value = 48;
      job.value.type = "后端";
      job.value.main = "倒水";
      console.log(name, age, job);
    }
    return {
      name,
      age,
      job,
      changeinfo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
