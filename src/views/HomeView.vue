<template>
  <div class="container">
    <LandingPage />
    <Articles />
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import Articles from "@/components/Articles.vue";

export default {
  name: "HomeView",
  components: {
    LandingPage,
    Articles
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1040px;
  margin: 0 auto;
}
</style>
