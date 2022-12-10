<template>
  <main>
    <div class="recentArt">
      <h2 class="recentArt__title">recent articles</h2>
      <div class="recentAtr__card">
        <h2 class="recentArt__card--title">
          consectetur adipisicing elit. Aperiam dignissimos inventore ipsum,
          accusamus maiores harum!
        </h2>
        <div class="recentArt__info">
          <img src="" alt="" class="recentArt__info--image" />
          <div class="recentArt__info--text">
            <h5 class="recentArt__info--name">Ali Mundher</h5>
            <p class="recentArt__info--date">date</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "RecentArticles"
};
</script>

<style lang="scss" scoped>
main {
  background-color: $bgArticle;
  border-radius: 10px;
  padding: 1rem;

  .recentArt {
    .recentArt__title {
      @include title;
    }
    .recentAtr__card {
      .recentArt__card--title {
        color: #666;
        font-size: 1.3rem;
        text-transform: capitalize;
      }
      .recentArt__info {
        display: flex;
        .recentArt__info--image {
        }
        .recentArt__info--text {
        }
      }
    }
  }
}
</style>
