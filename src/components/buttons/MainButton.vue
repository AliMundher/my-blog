<template>
  <div class="allButton">
    <div class="button" v-if="name === 'load more'">
      <button class="btnLoad">{{ name }}</button>
    </div>
    <div class="bu" v-else>
      <button class="btnLoad">{{ name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainButton",
  props: ["name"],
  setup() {}
};
</script>

<style lang="scss" scoped>
.allButton {
  .button {
    text-align: center;

    .btnLoad {
      @include buttonStyle;
    }
  }
  .bu {
    .btnLoad {
      @include buttonStyle;
    }
  }
}
</style>
