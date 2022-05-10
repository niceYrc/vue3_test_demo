<template>
  <h1>个人信息</h1>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <button @click="sayHello">说话</button>
  <button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
  <br />
  <br />
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br />
  <br />
  <button @click="test2">
    测试一下在Vue3的setup配置中去读取Vue2中的数据、方法
  </button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
      a: 100,
    };
  },
  methods: {
    sayWelcome() {
      alert("你好，靓仔");
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    },
  },
  setup() {
    //数据
    let name = "张三";
    let age = 10;
    let a = 200;

    //方法
    function sayHello() {
      alert(`姓名：${name},年龄:${age}`);
    }
    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);
      console.log(this.sayWelcome);
    }

    //返回一个对象
    return {
      name,
      age,
      sayHello,
      test2,
      a,
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
