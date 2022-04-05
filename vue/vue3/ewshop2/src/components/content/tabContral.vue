<template>
    <div class="tab-control">
        <div class="tab-control-item "
            :class="{active:index == currentIndex}"
          v-for="(item,index) in title" :key="index"
            @click="itemClick(index)"
          >{{item}}</div>
       
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: "TabControl",
    props:{
      title:{
            type:Array,
            default(){
            return[]
        }
      }
    },
    setup (props,{emit}) {
        const currentIndex=ref(0)
        const itemClick=(index)=>{
            currentIndex.value=index,
            emit("tabClick",index)
        };
        return {
            currentIndex,
            itemClick
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-control{
    display: flex;
    position: sticky;
    top: 44px;
    z-index: 30px;
    background-color: #fff;
    height:40px;
    line-height:40px;
    .tab-control-item{
        flex: 1;
        text-align: center;
    }
}
.active{
    border-bottom: 1px solid rgb(75, 133, 73);
    color: red;
}
</style>