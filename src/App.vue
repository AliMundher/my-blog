<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/navbar/Nav.vue";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 3000px;
}
@media (max-width: 768px) {
  body {
    padding: 10px;
  }
}

@media (min-width: 800px) {
  body {
    padding: 10px;
  }
}
</style>
