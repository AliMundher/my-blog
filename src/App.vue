<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/navbar/Nav.vue";
import Footer from "@/components/footer/Footer.vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute();
    console.log(route.matched.path === "/posts");
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
}
</style>
