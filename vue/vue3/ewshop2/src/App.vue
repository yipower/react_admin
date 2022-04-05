<template>
  <!-- <router-view /> -->
  <div id="nav">
    <router-link to="/home" class="nav-bar-item">
      <div class="iconfont icon-shouye"></div>
      <div class="text">首页</div>
    </router-link>
    <router-link class="nav-bar-item" to="/category">
      <div class="iconfont icon-fenlei"></div>
      <div class="text">分类</div></router-link
    >
    <router-link class="nav-bar-item" to="/cart">
      <div class="iconfont icon-gouwuchezhengpin"></div>
      <div class="text">购物车</div></router-link
    >
    <router-link class="nav-bar-item" to="/profile">
      <div class="iconfont icon-yonghu"></div>
      <div class="text">个人中心</div></router-link
    >
  </div>
  <router-view />
</template>

<style lang="scss">
 @import "assets/css/base.css";
  @import "assets/css/iconfont.css";
  @import "assets/css/normalize.css";
#nav{
  overflow: hidden;
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  
  .nav-bar-item{
    // display: flex;
    flex: 1;
    width: 100%;
    text-align: center;
    .text{
      font-size: 10px;
    }
  }
  a {
    color: var(--color-text);
    
    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }
   .tab-bar-item {
    flex:1;
    text-align: center;
    height:50px;
    font-size:var(--font-size);
  }
  .tab-bar-item .icon {
    width:24px;
    height:24px;
    margin-top: 5px;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>