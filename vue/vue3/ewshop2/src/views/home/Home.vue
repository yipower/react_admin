<template>
    <div>
        <nav-bar>
            <slot>首页</slot>
        </nav-bar>
        <div class="swiper">
            <div>
                <img src="~assets/images/1.png" alt="">
            </div>
        </div>
        <recommend :recommond1="recommond1"></recommend>
        <tab-contral :title="['畅销','新书','精选']" @tabClick="tabClick"></tab-contral>
        <goods-list :goods="showGoods"></goods-list>
    </div>
</template>

<script>

import NavBar from "components/common/NavBar"
import Recommend from "./childComps/Recommend"
 import {ref,  onMounted, reactive, computed} from 'vue';
import TabContral from '../../components/content/tabContral.vue';
import GoodsList from '../../components/content/GoodsList.vue';
import {getHomeAllData, getHomeGoods} from "../../network/home"
export default {
    components:{
        NavBar,
        Recommend,
        TabContral,
        GoodsList
    
    },
    setup () {
        let recommond1=ref([]);
        let banref=ref([])
        onMounted(()=>{
            getHomeAllData().then(res=>{
                // console.log(res);
                recommond1.value=res.goods.data
                banref.value=res.slides
            })
            getHomeGoods("sales").then(res=>{
                // console.log(res)
                goods.sales.list = res.goods.data;
            }),
            getHomeGoods("new").then(res=>{
                console.log(res);
                goods.new.list=res.goods.data
            })
            getHomeGoods("recommend").then(res=>{
                // console.log(res);
                goods.recommend.list=res.goods.data
            })
        })
        const goods=reactive({
            sales:{page:1,list:[]},
            new:{page:1,list:[]},
            recommend:{page:1,list:[]},

        })
        let currentType=ref("sales");
         const showGoods = computed(()=>{
                return goods[currentType.value].list;
            })
        const tabClick=(index)=>{
           let tyep= ['sales', 'new', 'recommend'];
           currentType.value=tyep[index]
        }
        
        return {
            tabClick,
         recommond1,
         banref,
         showGoods
        }
    }
}
</script>

<style lang="scss" scoped>

</style>