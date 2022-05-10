<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
  <hr />
  <Test />
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo4hooks";
import Test from "./11hooksTest";
export default {
  name: "App",
  components: { Demo, Test },
  setup() {
    let isShowDemo = ref(true);
    return { isShowDemo };
  },
};
</script>
