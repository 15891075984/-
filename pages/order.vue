<template>
    <div class="order-wrapper">
        <el-row>
            <el-col :span="20">
                <m-table/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MTable from '@/components/order/index'
export default {
    components:{
        MTable
    }
}
</script>


<style lang='scss'>
.order-wrapper{
    margin-top:100px;
    padding-left:260px;
    dl{
        padding-bottom:15px;
    }
}

</style>
