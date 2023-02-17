<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    hello，vue
    <p id="ngm"></p>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
