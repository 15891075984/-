<template>
    <div class="m-buy">
        <el-row>
            <el-col :span="20">
                <m-buy/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import mBuy from '@/components/buy/buy.vue'
export default {
    components:{
        mBuy
    }
}
</script>

<style lang='scss'>
.m-buy{
    margin-top:100px;
    padding-left:260px;
    dl{
        padding-bottom:15px;
    }
}

</style>