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
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  .article__category {
    flex-basis: 28%;

    @media (max-width: 768px) {
      flex-basis: 80%;
    }
  }
  .article__recent {
    flex-basis: 40%;
    @media (max-width: 768px) {
      flex-basis: 80%;
      margin: 15px 0;
    }
  }
  .article__popular {
    flex-basis: 30%;
    @media (max-width: 768px) {
      flex-basis: 80%;
    }
  }
}
</style>
