<template>
  <div class="pagination">
    <div class="pagination__btn">
      <button class="pagination__btn--prev">Prev</button>
      <button class="pagination__btn--one">1</button>
      <button class="pagination__btn--two">2</button>
      <button class="pagination__btn--next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnPagination"
};
</script>

<style lang="scss" scoped>
.pagination {
  text-align: center;
  .pagination__btn {
    button {
      background-color: transparent;
      border: 2px solid $myBorderColor;
      border-radius: 5px;
      cursor: pointer;
      text-transform: capitalize;
      font-weight: bold;
      letter-spacing: 1px;
      color: #908d8d;
      &.pagination__btn--one {
        margin-left: 5px;
      }
      &.pagination__btn--two {
        margin: 0 5px;
      }
    }
  }
}
</style>
