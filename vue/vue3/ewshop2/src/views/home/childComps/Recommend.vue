<template>
    <div class="commend">
        <div class="commend-item" v-for="item in recommond1.slice(0,4)" :key="item.id">
            <img :src="item.cover_url" alt="">
            <span>{{item.title}}</span>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        recommond1:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .commend{
        width: 100%;
        display: flex;
        .commend-item{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            img{
            width:70px;
            height:70px;
            
            }
            span{
                font-size: 5px;
            }
        }
    }
</style>