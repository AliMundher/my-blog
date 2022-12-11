<template>
  <div class="button">
    <button class="btnLoad">load more</button>
  </div>
</template>

<script>
export default {
  name: "LoadMore"
};
</script>

<style lang="scss" scoped>
  .button{
   text-align:center;
  
  .btnLoad{
    width:150px;
    margin:2% auto;
    padding:10px;
    background-color:transparent;
    border:2px solid $myBorderColor;
    border-radius:5px;
    cursor:pointer;
    text-transform:capitalize;
    font-weight:bold;
    letter-spacing:1px;
    color:#908d8d;
  }
}
</style>
