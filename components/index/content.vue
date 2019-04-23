<template>
    <div class="m-content">
        <div class="m-content-header">
            <h4>{{data.headline}}</h4>
            <ul>
                <li v-for="(item,index) in getTitles" :key="index"
                        @mouseenter="enterTitle">
                    {{item.title}}
                </li>
            </ul>
        </div>
        <dl>
            <dd v-for="(item,index) in getContents" :key="index">
                <img :src="item.src" alt="">
                <p>{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
                <p class="price">¥
                    <span>
                        {{item.price}}
                    </span>/人均
                </p>
            </dd>
        </dl>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            data:{
                headline:"有格调",
                titles:[
                    {
                        title:"全部",
                        type:"all"
                    },
                    {
                        title:"约会聚餐",
                        type:"yuehui"
                    },
                    {
                        title:"丽人SPA",
                        type:"spa"
                    },
                    {
                        title:"电影演出",
                        type:"movie"
                    },
                    {
                        title:"品质出游",
                        type:"travel"
                    }
                ],
                contents:[
                    {
                        src:"//p1.meituan.net/joymerchant/f898cc6646e3de0cda536df5885328b2--2098386474.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                        title:"夜幕·含情spa会所24h",
                        desc:"夜幕·含情spa会所24h",
                        price:"790"
                    },
                    {
                        src:"//p0.meituan.net/mogu/50c775bda3ec3c371e4ed320b5cfe53393356.jpg@460w_260h_1e_1c",
                        title:"老巷子花园烤串",
                        desc:"花园串串套餐，建议两人食用",
                        price:"138"
                    },
                    {
                        src:"//p0.meituan.net/merchantpic/3f2e8a9335a0b95a1d26c3c34273d700262758.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                        title:"秘果主题spa会所",
                        desc:"spa会所",
                        price:"424"
                    },
                    {
                        src:"//p1.meituan.net/deal/201203/31/002.jpg@460w_260h_1e_1c",
                        title:"广安门电影院",
                        desc:"儿童报价",
                        price:"34"
                    },
                    {
                        src:"//p1.meituan.net/deal/201208/22/1_0822151022.jpg@460w_260h_1e_1c",
                        title:"音皇电影院",
                        desc:"自费购买,儿童票,有WIFI,4K厅,巨幕厅",
                        price:"53"
                    },
                    {
                        src:"//p0.meituan.net/poi/2dd31bec6f02cf4e47408f63958af5ad71680.jpg@460w_260h_1e_1c",
                        title:"免押金,可停车,儿童票,可刷卡,有WIFI,休息区,60帧厅",
                        desc:"中影国际影城(丰台永旺店)",
                        price:"37.9"
                    }
                ]
            }
        }
    },
    computed:{
        getTitles:function(){
            return this.data.titles
        },
        getContents:function(){
            return this.data.contents
        }
    },
      methods:{
        enterTitle:function(){
            let data= axios.get('https://easy-mock.com/mock/5c36dfeabb16d01c71935e97/example_copy_copy_copy/jihui')
            .then(res=>{
                let {data}=res.data
                this.data=data;
            })
        }
    }

}
</script>

<style lang='scss'>
.m-content{
    margin-top:10px;
    overflow: hidden;
    color:#fff;
    border:1px solid #eee;
    line-height: 50px;
    h4{display: inline-block;font-size: 20px;margin-right:30px;padding-left:20px;}
    .m-content-header{
        height: 50px;
        background: #c1af8d;
        border-radius: 15px;
        ul{
            display: inline-block;
            li{
                display: inline-block;
                position: relative;
                padding:0 20px;
                .triabgle{
                    position: absolute;
                    color:red
                }
                &:hover{
                    cursor:pointer;
                    &::after{
                        content:"";
                        height:0;
                        width:0;
                        border:9px solid #fff;
                        display: block;
                        border-left-color: #c1ac84;
                        border-right-color:#c1ac84;
                        border-top-color:#c1ac84;
                        position: absolute;
                        bottom:0px;
                        left:50%;
                        margin-left:-8px;
                    }
                }
            }
        }
    }
    dl{
        margin:20px 20px;
        margin-right:5px;
        box-sizing: border-box;
        color:#000;
        dd{
            display: inline-block;
            width:33.1%;
            img{
                width: 369px;
                height:208px;
                border-radius: 5px;
            }
            p{
                line-height:30px;
                width: 350px;;
                &:nth-child(2){
                    margin-top:-5px;
                    font-size: 15px;
                }
                span{
                     overflow: hidden;
                    font-size: 22px;
                }
            }
            .desc{
                font-size: 13px;
                color:#999;
            }
        }
    }
}
</style>
