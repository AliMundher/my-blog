<template>
  <header>
  <div class="container">
    <div class="header__content">
      <div class="logo">Logo</div>
      <nav>
        <router-link :to="{name:'Home'}">Home</router-link> 
        <router-link :to="{name:'About'}">About</router-link>
      </nav>
    </div>
  </div>
    </header>
</template> 

<script>
  export default {
    name:"Navbar"
  }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

header{
  background:$bgColor;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;

  .container{
    width:1040px;
    margin:0 auto;

    .header__content{
      display:flex;
      justify-content:space-between;
      align-items:center;

      .logo{
        font-size:1.5em;
        font-weight:bold;
        letter-spacing:1px
      }
      nav{
        a{
          font-weight:bold;
          font-size:14px;
          color:$navLinkColor;
          margin-left:10px;
          text-decoration:none;
          &.router-link-exact-active{
            color:$txColor;
          }
        }
      }

    }
  }
  
}

</style>