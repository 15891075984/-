<template>
    <div class="detail-wrapper">
        <el-row>
            <el-col :span="20">
                <Crumb :keyword="keyword" :keyword2="keyword2"/>
                <Card/>
                <item/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Crumb from '@/components/product/crumb'
import Card from '@/components/detail/card'
import item from '@/components/detail/item'
export default {
    components:{
        Crumb,
        Card,
        item
    },
    data(){
        return {
            keyword:"火锅",
            keyword2:"美食"
        }
    }
}
</script>

<style lang='scss'>
.detail-wrapper{
    margin-top:100px;
    padding-left:200px;
}

</style>