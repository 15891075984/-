<template>
    <div class="m-geo">
       <i class="iconfont">&#xe633;</i>
        <span>{{this.geo}}</span>
        <nuxt-link to='/changecity' class="geo-changeCity">切换城市</nuxt-link>[
        <nuxt-link to='/changecity' class='geo-item'>大厂回族自治县</nuxt-link>
        <nuxt-link to='/changecity' class='geo-item'>廊坊</nuxt-link>
        <nuxt-link to='/changecity' class='geo-item'>固安县</nuxt-link>]
    </div>
</template>

<script>
import axios from '@/static/axios'
export default {
    data(){
        return{
            geo:"北京",
            data:[]
        }
    },
    methods:{
        getProvince(){
        axios.get("/geo/province")
        .then(({data,status})=>{
            let random=Math.floor(Math.random()*19)
            this.data=data.province,
            this.geo=this.data[random].name
        },(err)=>{
            console.log(err.message)
        })
        },
        getCity(){
            axios.get('/geo/city')
            .then(res=>{
            })
        }
    },
    mounted(){
        this.getProvince()
        this.getCity()
    }
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
