<template>
    <div class="m-buy-wa">
        <div class="item">
            <i class="el-icon-share"></i>
            请在<span>23:52:46</span>  内完成支付, 超时订单会自动取消
        </div>
        <div class="payCount">
            项目：京都老北京涮肉4人餐
            <div class='money'>应付金额 ¥ 
                <span>208.00</span>
            </div>
        </div>
        <div class="weixin">
            <img src="@/assets/img/pay.png" alt="">
            <p class="money">支付 ¥ 
                <span>208.00</span>
            </p>
            <div class="btn">
                  <el-button type="success" round @click="goPay">去付款</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        goPay(){
            this.$notify({
            title: '付款成功',
            message: '付款成功，您可以去消费了',
            type: 'success'
            });
            }
    }
}
</script>

<style lang='scss'>
.m-buy-wa{
    text-align: center;
    line-height: 46px;
    font-size: 15px;
    color:#666;
    .item{
        border:1px solid #eee;
        height:46px;
        margin-bottom: 20px;
        span{
        color:orange
    }
    };
    .payCount{
        padding:10px;
        text-align:left;
        border:1px solid #eee;
        .money{
            float:right;
            span{
                color:red;
                font-size: 28px;
            }
        }
    };
    .weixin{
        width:1016px;
        box-sizing: border-box;
        border:1px solid #eee;
        // border-right:0;
        margin-top:20px;
        img{
            width:100%;
            height:100%;
        }
        .btn{
            text-align: right;
            margin-right:25px;
            margin-bottom:20px;
        }
        .money{
            text-align: right;
            margin-right:25px;
            span{
                color:red;
                font-size: 28px;
            }
        }
    }
}

</style>
