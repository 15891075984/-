<template>
    <div class="m-geo">
       <i class="iconfont">&#xe633;</i>
        <span>北京</span>
        <nuxt-link to='/city' class="geo-changeCity">切换城市</nuxt-link>[
        <nuxt-link to='/city' class='geo-item'>大厂回族自治县</nuxt-link>
        <nuxt-link to='/city' class='geo-item'>廊坊</nuxt-link>
        <nuxt-link to='/city' class='geo-item'>固安县</nuxt-link>]
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    .m-geo{
        
        span{

        }
        .geo-changeCity{
            color:#666;
            border:1px solid #666;
            border-radius: 2px;
            padding:0 2px;
            margin-right: 3px;
        }
        .geo-item{
            color: #999;
            margin-right:2px;
        }
    }
</style>
