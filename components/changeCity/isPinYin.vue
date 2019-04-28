<template>
    <dl class="ispinyin">
        <dd class="ispinyin-title">
            按拼音首字母选择:
            <span v-for="(item,index) in pinyin" :key="index">
                <a :href="'#'+item">{{item}}</a>
            </span>
        </dd>
        <dd v-for="(item,index) in cities" :key="index" :id="item.first">
            <div class="circle" >{{item.first}}</div>
            <span v-for="(val,key) in item.value" :key="key" class="pinyin-item">
                <span class='geo-item' @click="setPosition(val.name)">{{val.name}}</span>
            </span>
        </dd>
    </dl>
</template>

<script>
import {mapActions} from 'vuex'
import pinyin from "pinyin"
import axios from '@/static/axios'
export default {
    data(){
        let zzz="BCDFGHJKLMNPQRSTWXYZ".slice("");
        return {
            pinyin:zzz,
            cities:[
                {
                    first:"A",
                    value:[]
                }
            ],
        }
    },
    methods:{
        ...mapActions('geo',['setPosition']),
        getCityPinyinList(){
            axios.get('/geo/citypinyin')
            .then(({status,data})=>{
                if(status===200){
                    this.cities=data.array
                }
            })
        }
    },
    mounted(){
        this.getCityPinyinList();
    }
}
</script>

<style lang='scss'>
.ispinyin{
    font-size: 16px;
    overflow: hidden;
    dd{
        margin-top:20px;
        .pinyin-item{
            margin-left:15px;
            line-height: 35px;
            color:#999;
            font-size: 14px;
        }
        .circle{
            margin-right: 20px;
            float:left;
            box-sizing: border-box;
            width: 40px;
            height:40px;
            padding-top:10px;
            text-align: center;
            border-radius: 50%;
            background: #13D1BE;
            color:#FFF;
            font-weight: bold;
        }
        span{
            a{
                color:#aaa;
            }
            &>a:hover{
                cursor:pointer;
                color:#13D1BE;
            }
        }
    }
    .ispinyin-title{
        span{
            margin-left: 26px;
            a{
                color:#000;
            }
        }
    }
}
</style>
