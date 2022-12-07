<template>
  <div>
    <div class="article">
      <div class="article__category">
        <Category />
      </div>
      <div class="article__recent">recent article</div>
      <div class="article__popular">right side</div>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";

export default {
  name: "Articles",
  components:{
    Category
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

  .article{
    display:flex;
    justify-content:space-between;
    
    .article__category{
      background-color:$bgArticle;
    }
    .article__recent{}
    .article__popular{}
  }
</style>
