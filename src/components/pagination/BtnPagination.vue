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
  }
}
</style>
