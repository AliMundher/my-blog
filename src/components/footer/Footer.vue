<template>
  <footer>
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">Logo</div>
        <p class="footer__text">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <h2 class="footer__by">by❤️</h2>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  background: $bgColor;
  padding: 20px;
  margin-top: 20px;
  .container {
    @include container;
    .footer__content {
      text-align: center;
      .footer__logo {
        font-size: 1.5rem;
        font-weight: bold;
      }
      .footer__text {
        color: white;
        width: 50%;
        margin: 20px auto;
        line-height: 1.3;
      }
      .footer__by {
      }
    }
  }
}
</style>
