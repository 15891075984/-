<template>
    <div class="m-detail-card">
        <el-row  class="m-detail-card-desc">
            <el-col :span=15>
                <div class="titles bottom">
                    <h3>{{this.$route.params.id}}</h3>
                    <el-rate
                        class="rate"
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                        </el-rate>
                        <span>
                            4.9分
                        </span>
                        <span >
                            人均￥68
                        </span>
                </div>
                <div class="desc bottom">
                    <p class="address">地址：西城区粮食店街12号
                        <i class="iconfont">&#xe633;</i>
                    </p>
                    <p>
                        电话：18518657626
                    </p>
                    <p>营业时间：周一至周日 10:00-22:00</p>
                </div>
                <div class="wifi">
                    <img src="http://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" alt="">
                    <p>提供wifi</p>
                </div>
            </el-col>
            <el-col :span=9 class="img">
                <img src="https://img.meituan.net/msmerchant/8ea57660c4bfaa9bac5274dac56e414d96011.jpg@380w_214h_1e_1c" alt="">
                <div>
                    <img src="http://p0.meituan.net/mogu/0eac2288467608637ae14f9f64715f30147425.jpg@92w_50h_1e_1c">
                    <img src="http://p0.meituan.net/mogu/0eac2288467608637ae14f9f64715f30147425.jpg@92w_50h_1e_1c">
                </div>
            </el-col>
        </el-row>
        </div>
</template>

<script>
export default {
    data(){
        return {
            value:3.5
        }
    }
}
</script>

<style lang='scss'>
.m-detail-card{
    margin-top:25px;
    padding:20px 15px 15px 20px;
    border:1px solid #999;
    border-radius: 10px;
    line-height: 22px;
    color:#666;
    .m-detail-card-desc{
        h3{
            font-size: 26px;
            line-height: 37px;
            color: #666;
        }
        .bottom{
            padding-bottom:15px;
            margin-bottom:15px;
            border-bottom:1px solid #eee;
        }
        .wifi{
            line-height: 0;
            font-size: 12px;
            img{
                margin: auto auto 11px;
                width: 24px;
                height: 24px;
                margin-left:9px;
                border-radius: 0;
            }
        }
        .img{
            img{
                border-radius: 10px;
            }
            div{
                img{
                    border-radius: 2px;
                    margin-right: 5px;
                }
            }
        }
    }
}

</style>
