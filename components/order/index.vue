<template>
    <div class="order">
        <tables :tableData="tableData"/>
        <div class="counts">
            应付金额：
            <span class="red">
                ¥{{total}}
            </span>
        </div>
        <p>
            将发送美团券密码至手机号：158****5984
            <a>绑定新手机号</a>
        </p>
        <div class="counts submit-order">
            <el-button type="primary" @click='commitOrder'>提交订单</el-button>
        </div>
    </div>

</template>

<script>
import tables from './table.vue'
export default {
    components:{
        tables
    },
    data(){
        return{
            tableData:[
                {
                    item:"京都老北京涮肉: 京都老北京涮肉4人餐",
                    price:208,
                    quantity:2,
                }
            ]
        }
    },
    computed:{
        total(){
            let total=0;
            this.tableData.forEach(item=>{
                total+=item.price*item.quantity
            })
            return total
        }
    },
    methods:{
        commitOrder(){
            location.href="/buy"
        }
    }
}
</script>

<style lang='scss'>
.order{
    .counts{
        width:980px;
        margin-top:20px;
        text-align: right;
        box-sizing: border-box;
        line-height: 55px;
        border:1px solid #eee;
        border-left:0;
        border-right:0;
        .red{
            color:red;
            font-size: 25px;
        }
    }
    .submit-order{
        border:0;
    }
    p{
        margin-top:10px;
        margin-bottom:0px;
        font-size: 12px;
    }
}

</style>
