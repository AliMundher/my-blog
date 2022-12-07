<template>
  <div>
    <div class="article">
      <div class="article__category">
        <Category />
      </div>
      <div class="article__recent">
        <RecentArticles />
      </div>
      <div class="article__popular">
        <PopularArticles />
      </div>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import RecentArticles from "@/components/RecentArticles.vue";
import PopularArticles from "@/components/PopularArticles.vue";

export default {
  name: "Articles",
  components: {
    Category,
    RecentArticles,
    PopularArticles
  }
};
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  justify-content: space-between;

  .article__category {
    background-color: $bgArticle;
  }
  .article__recent {
  }
  .article__popular {
  }
}
</style>
