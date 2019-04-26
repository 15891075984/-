<template>
    <div class="m-detail-item">
        <b>商家团购及优惠</b>
        <dl>
            <dt>7款堂食套餐</dt>
            <dd>
                <img src="http://p1.meituan.net/208.126/deal/d0f7f839bed9d7f11ac8fde92019bb0353728.jpg@100w_100h_1e_1c" alt="">
                <div class="flex">
                    <p class="flex-title">老北京火锅四人餐</p>
                    <p>已售3005</p>
                    <p>￥
                        <span class="red">208</span>
                        <span class="price">门市价￥345</span>
                    </p>
                    </div>
                <div class="shopping">
                    <nuxt-link :to="'/order/老北京火锅购物车'">
                        <el-button type='primary' @click='goShopping'>立即抢购</el-button>
                    </nuxt-link>
                </div>
            </dd>
            <dd>
                <img src="http://p1.meituan.net/208.126/deal/d0f7f839bed9d7f11ac8fde92019bb0353728.jpg@100w_100h_1e_1c" alt="">
                <div class="flex">
                    <p class="flex-title">老北京火锅四人餐</p>
                    <p>已售3005</p>
                    <p>￥
                        <span class="red">208</span>
                        <span class="price">门市价￥345</span>
                    </p>
                    </div>
                <div class="shopping">
                    <el-button type='primary'>立即抢购</el-button>
                </div>
            </dd>
            <dd>
                <img src="http://p1.meituan.net/208.126/deal/d0f7f839bed9d7f11ac8fde92019bb0353728.jpg@100w_100h_1e_1c" alt="">
                <div class="flex">
                    <p class="flex-title">老北京火锅四人餐</p>
                    <p>已售3005</p>
                    <p>￥
                        <span class="red">208</span>
                        <span class="price">门市价￥345</span>
                    </p>
                    </div>
                <div class="shopping">
                    <el-button type='primary'>立即抢购</el-button>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goShopping(){
            window.location.href=`/order/?id=老北京购物车`
        }
    }
}
</script>

<style lang='scss'>
.m-detail-item{
    margin-top:35px;
    b{
        font-size: 20px;
    }
    dl{
        padding:15px;
        margin-top:10px;
        border:1px solid #aaa;
        border-radius: 5px;
        dt{
            font-size: 16px;
            font-weight: bold;
            line-height: 26px;
            margin-right:20px;
        }
        dd{
            overflow: hidden;
            position: relative;
            margin-bottom:20px;
            border-bottom:1px solid #eee;
            img{
                float: left;
                border-radius: 5px;
            }
            .flex{
                float: left;
                margin-left:20px;
                .flex-title{
                    font-size: 16px;
                }
                p{
                    line-height: 22px;
                    .red{
                        line-height: 85px;
                        color:red;
                        font-size: 35px;
                        margin-right:10px;
                    }
                    .price{
                        color:#aaa;
                    }
                }
        }
        .shopping{
            position: absolute;
            right:15px;
            top:25px;
        }
        }
    }
}
</style>
