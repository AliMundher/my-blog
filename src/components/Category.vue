<template>
  <div class="main">
  <div class="category">
    <h2 class="category__title">categories</h2>
    <ul class="category__list">
      <li>conding</li>
      <li>Programing</li>
      <li>news</li>
      <li>sport</li>
    </ul>
  </div>
  <div class="statistic">
    <h2 class="statistic__title">statistic</h2>
    <ul class="statistic__list">
      <li>
        <h5>posts</h5>
        <span>0</span>
      </li>
      <li>
        <h5>comments</h5>
        <span>0</span>
      </li>
      <li>
        <h5>members</h5>
        <span>0</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Category"
};
</script>

<style lang="scss" scoped>
.main{
  .category {
  @include bgSectionsArticles;

  .category__title {
    @include title;
  }
  .category__list{
    @include ulStyle;
    li{
      @include liStyle;
      text-transform:capitalize;
      padding:10px 7px!important;
      cursor:pointer;
    }
  }
}
 .statistic{
  @include bgSectionsArticles;
  margin-top:5%;

  .statistic__title{
    @include title;
  }
  .statistic__list{
    @include ulStyle;
    li{
      @include liStyle;
      text-transform:capitalize;
      h5{
        padding:10px;
        margin:0;
        font-size:1rem;
        font-weight:normal;
      }
    }
  }
 }
}
</style>
