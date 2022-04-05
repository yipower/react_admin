<template>
    <div class="goods-list">
       <goods-list-item v-for="(item) in goods" :product="item" :key="item.id"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
    export default {
       props: {
            goods: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        components:{
            GoodsListItem
        }
    }
</script>

<style lang="sass" scoped>

</style>