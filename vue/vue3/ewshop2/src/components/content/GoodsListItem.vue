<template>
  <div class="goods-list-item" v-for="(item) in product" :key="item.id"> 
    <img :src="item.cover" alt="" />
    <div class="goods-info">
      <span>￥100</span>
      <img src="~assets/images/collect.png" alt="" />
      <i>3</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
            product: Object,
            default() {
                return {}
            }
        },
  setup() {
   
    return {};
  },
};
</script>

<style lang="scss" scoped>
.goods-list-item {
  overflow: hidden;
  width: 46%;
  float: left;
  img {
    width: 100%;
  }

  .goods-info {
    text-align: center;
    span {
    }

    img {
      width: 15px;
    }

    i {
    }
  }
}
</style>