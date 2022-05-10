<template>
  <h1>个人信息</h1>
  <h3 v-show="person.name">姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["sex", "main"],
  emits: ["hello"],
  beforeCreate() {
    console.log("beforeCreate -> beforeCreate");
  },
  setup(props, context) {
    console.log("setup -> setup", props, context);
    // console.log('---setup---',props)
    // console.log('---setup---',context)
    console.log("---attrs---", context.attrs); //相当与Vue2中的$attrs
    console.log("---emit---", context.emit); //触发自定义事件的。
    console.log("---slots---", context.slots); //插槽
    let person = reactive({
      name: "张三",
      age: 18,
    });
    function test() {
      context.emit("hello", 666);
    }

    return {
      person,
      test,
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
