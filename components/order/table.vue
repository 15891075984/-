<template>
    <div class="m-order-wrapper">
        <el-table
            :data="tableData"
            style="width: 980px;">
            <el-table-column
            label="项目"
            prop='item'
            width="532">
            </el-table-column>
            <el-table-column
            label="单价"
            prop='price'
            width="132">
            </el-table-column>
            <el-table-column
            width="212"
            class="center"
            prop='quantity'>
            <template slot-scope="scope">
                <el-input-number v-model="scope.row.quantity" @change="handleChange" :min="1" :max="222" label="数量"></el-input-number>
            </template>
            </el-table-column>
            <el-table-column
            prop='count'
            label="总价">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.price*scope.row.quantity }}</span>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    props:{
        tableData:{
            type:String,
            default:[]
        }
    }
}
</script>

<style lang='scss'>
.m-order-wrapper{
    .sell{
        text-align: center;
    }
    .center{
         text-align: center !important;
    }
}
</style>
