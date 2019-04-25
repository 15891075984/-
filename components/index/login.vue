<template>
    <div class="m-index-login">
        <div class="img-wrapper">
            <img src="//p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
            <img src="//p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
        </div>
        <div class="m-index-register">
            <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
            <p>Hi!你好</p>
            <p><el-button @click="Position">注册</el-button></p>
            <p><el-button>立即登录</el-button></p>
        </div>
        <div class="m-index-erweima">
            <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
            <p>美团APP手机版</p>
            <p>
                <span class="red">1元起</span>吃喝玩乐
            </p>
       </div>
    </div>
</template>

<script>
export default {
    methods:{
        Position(){
            this.$store.state.geo.position.dispatch("setPosition",'北京')
        }
    }
}
</script>

<style lang='scss'>
.m-index-login{
    position: relative;
    .img-wrapper{
        width:150px;
        margin-top:18px;
        img{
            width:150px;
            &:nth-child(1){
                margin-bottom:19px;
            }
        }
    }
    .m-index-register{
        position: absolute;
        width: 228px;
        border:1px solid #eee;
        left:165px;
        top:0px;
        padding:20px 16px;
        background: #fff;
        box-sizing: border-box;
        line-height: 30px;
        text-align: center;
        img{
            width: 55px;
            height:55px;
            border-radius: 50%;
        }
        button{
            width:120px;
            border-radius: 30px;
            margin-top:15px;
        }
    }
    .m-index-erweima{
        position: absolute;
        padding-top:15px;
        width: 228px;
        border:1px solid #eee;
        text-align: center;
        left:165px;
        bottom:3px;
        img{
            width: 95px;
            height:95px;
        }
        .red{
            color:red
        }
        &>p:nth-child(3){
            font-size: 13px;
        }
    }
}

</style>
