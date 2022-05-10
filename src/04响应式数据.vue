<template>
  <h1>个人信息</h1>
  <h3 v-show="person.name">姓名：{{ person.name }}</h3>
  <h3>年龄：{{ person.age }}</h3>
  <h4>种类：{{ person.job.type }}</h4>
  <h4>内容：{{ person.job.main }}</h4>
  <h4>爱好：{{ person.hobby }}</h4>
  <h4 v-show="person.sex">性别：{{ person.sex }}</h4>
  <h4>测试数据：{{ person.job.a.b.c }}</h4>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除name属性</button>
  <button @click="updatedHobby">修改第一个爱好</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端",
        main: "端茶",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽烟", "喝酒", "打游戏"],
    });

    // let number = reactive(666);

    function changeinfo() {
      //   name = "李四";
      //   age = 48;
      //   name.value = "李四";
      //   age.value = 48;
      //   job.type = "后端";
      //   job.main = "倒水";
      //   job.a.b.c = 777;
      hobby[0] = "学习";
    }
    function addSex() {
      person.sex = "男";
    }
    function deleteName() {
      delete person.name;
    }
    function updatedHobby() {
      person.hobby[0] = "吃饭";
    }
    return {
      person,
      changeinfo,
      addSex,
      deleteName,
      updatedHobby,
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
