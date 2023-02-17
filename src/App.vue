<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    hello，vue
    <p id="ngm"></p>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import say from "./typescript/say-hi.ts";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    say("你干嘛");
  },
};
</script>
