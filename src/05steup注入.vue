<template>
  <Demo @hello="showHelloSex" sex="男" main="端茶">
    <template v-slot:qwe>
      <span>打工人1</span>
    </template>
    <template v-slot:asd>
      <span>打工人2</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo1steup注入";
export default {
  name: "App",
  components: { Demo },
  setup(props) {
    function showHelloSex(val) {
      alert(`你触发了hello事件，我收到的数据是${val}`);
    }
    return {
      showHelloSex,
    };
  },
};
</script>
