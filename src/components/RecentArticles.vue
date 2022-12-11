<template>
  <main>
    <h2 class="main__title">recent articles</h2>
    <div class="recentArt">
      <div class="recentAtr__card">
        <h2 class="recentArt__card--title">
          consectetur adipisicing elit. Aperiam dignissimos inventore ipsum,
          accusamus maiores harum!
        </h2>
        <div class="recentArt__info">
          <div class="recentArt__info--image">
            <img src="../../public/images/mo.jpg" alt="" />
          </div>
          <div class="recentArt__info--text">
            <h5 class="recentArt__info--name">Ali Mundher</h5>
            <p class="recentArt__info--date">Jun 20,2020</p>
          </div>
        </div>
        <p class="recentArt__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          asperiores itaque quis maxime, sint nostrum nemo explicabo, harum
          aperiam aut, optio iusto amet sequi incidunt illo ut a! Unde ut ab
          amet sed totam iste at sequi officiis earum tempore.
        </p>
      </div>
    </div>
    <div class="recentArt">
      <div class="recentAtr__card">
        <h2 class="recentArt__card--title">
          consectetur adipisicing elit. Aperiam dignissimos inventore ipsum,
          accusamus maiores harum!
        </h2>
        <div class="recentArt__info">
          <div class="recentArt__info--image">
            <img src="../../public/images/mooon.jpg" alt="" />
          </div>
          <div class="recentArt__info--text">
            <h5 class="recentArt__info--name">Ali Mundher</h5>
            <p class="recentArt__info--date">Jun 20,2020</p>
          </div>
        </div>
        <p class="recentArt__body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          asperiores itaque quis maxime, sint nostrum nemo explicabo, harum
          aperiam aut, optio iusto amet sequi incidunt illo ut a! Unde ut ab
          amet sed totam iste at sequi officiis earum tempore.
        </p>
      </div>
    </div>
    <BtnLoad />
  </main>
</template>

<script>
import BtnLoad from "@/components/buttons/LoadMore.vue";

export default {
  name: "RecentArticles",
  components:{
    BtnLoad
  }
};
</script>

<style lang="scss" scoped>
main {
  background-color: $bgArticle;
  border-radius: 10px;
  padding: 1rem;
  .main__title {
    @include title;
  }

  .recentArt {
    border: 2px solid #7e7e7e;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;

    .recentAtr__card {
      .recentArt__card--title {
        color: #666;
        font-size: 1.3rem;
        text-transform: capitalize;
        margin: 1rem 0 2rem;
      }
      .recentArt__info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        .recentArt__info--image {
          width: 65px;
          height: 65px;
          border: 2px solid #7e7e7e;
          border-radius: 5px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .recentArt__info--text {
          .recentArt__info--name {
            margin-bottom: 0;
            line-height: 1px;
            font-size: 1rem;
          }
          .recent__info--date {
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
      }
      .recentArt__body {
        font-size: 0.9rem;
        line-height: 1.3;
        text-align: justify;
      }
    }
  }
}
</style>
