<template>
    <div class="product-wrapper">
        <el-row>
            <el-col :span="20">
                <Crumb :keyword="keyword"/>
                <Categroy/>
                <List/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumb from '@/components/product/crumb'
import Categroy from '@/components/product/categroy'
import List from '@/components/product/list'
export default {
    components:{
        Crumb,
        Categroy,
        List
    },
    data(){
        return {
            keyword:"火锅"
        }
    }
}
</script>

<style lang='scss'>
.product-wrapper{
    margin-top:100px;
    padding-left:200px;
    dl{
        padding-bottom:15px;
    }
}

</style>