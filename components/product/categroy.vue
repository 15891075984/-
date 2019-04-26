<template>
    <div class="m-categroy-wrapper">
        <dl class="classic">
            <dt>分类</dt>
            <dt class="all">全部</dt>
            <dd>
                <span>
                    美食 <i class="iconfont icon">&#xe63f;</i>
                    <div class="m-product-select">
                        <dl>
                            <dd>
                                <h3>美食</h3>
                                <span>全部</span>
                                <span>食品</span>
                                <span>保健</span>
                                <span>特色菜</span>
                                <span>日本菜</span>
                                <span>面包</span>
                                <span>甜点</span>
                                <span>自助餐</span>
                                <span>火锅</span>
                            </dd>
                        </dl>
                    </div>
                </span>
                <span>酒店住宿</span>
                <span>休闲娱乐</span>
                <span>生活服务</span>
                <span>宴会</span>
                <span>时尚购</span>
                <span>汽车服务</span>
                <span>家装</span>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt class="all">全部</dt>
            <dd>
                <span>美食
                </span>
                <span>酒店住宿</span>
                <span>休闲娱乐</span>
                <span>生活服务</span>
                <span>宴会</span>
                <span>时尚购</span>
                <span>汽车服务</span>
                <span>家装</span>
            </dd>
        </dl>
    </div>
</template>

<script>
import Iselect from './iselect'
export default {

}
</script>

<style lang='scss'>
.m-categroy-wrapper{
    margin-top:25px;
    padding:15px 15px 0px 15px;
    border:1px solid #ccc;
    .classic{
        display: flex;
        dt{
            width: 80px;
        }
        dd{
            span{
                display: inline-block;
                position: relative;
                margin-bottom:10px;
                box-sizing: border-box;
                width:140px;
                line-height: 22px;
                height: 22px;
                &:hover{
                    .m-product-select{
                        display: block;
                    }
                }
                .m-product-select{
                    display: none;
                    color:#fff;
                    position: absolute;
                    top:25px;
                    padding-left:5px;
                    color:#000;
                    left:-5px;
                    z-index:150;
                    background: #fff;
                    border:1px solid #eee;
                    height:150px;
                    width:350px;
                    h3{
                        font-size: 16px;
                        color:#999;
                        margin:15px 0px 10px 0;
                    }
                    span{
                        flex:1;
                        display: inline-block;
                        width:80px;
                        line-height: 22px;
                        height: 22px;
                        box-sizing: border-box;
                    }
                }
                .icon{
                    font-size: 12px;
                }
                &:hover{
                    cursor: pointer;
                }
            }
        }
        .all{
            width:60px;
            padding-right:0;
            text-align: center;
            border-radius: 10px;
            margin-right:30px;
            height:22px;
            background:#13D1BE;
            line-height: 22px;
            color: #FFF;
            cursor: pointer;
        }
    }
}

</style>
