<template>
    <div>
        <nav-bar>
            <slot>个人中心</slot>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/NavBar"
 import {ref,  onMounted} from 'vue';
export default {
    components:{
        NavBar
    },
    setup () {
        onMounted(()=>{
            console.log(11);
        
        })

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>    