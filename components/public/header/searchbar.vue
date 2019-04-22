<template>
    <div class="m-search-panel">
        <el-row :gutter='0'>
            <el-col :span="5">
                <img class='logo' src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="10">
                <div class="wrapper">
                    <el-input placeholder="搜索商家或地点" class="input"  v-model="search" @focus="inputFocus" @blur="inputBlur">
                    </el-input><el-button type="primary" class="btn">
                        <i class="iconfont">&#xe6d8;</i>
                    </el-button>
                        <dl v-if="isCommand" class='command'>
                            <dd v-for="item in command" :key="item.id">
                                <span>
                                    <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
                                </span>
                            </dd>
                        </dl>
                        <dl v-if="isHotSearch"  class='hotSearch'>
                            <dt>热门搜索</dt>
                            <dd>
                                <span v-for="item in hotSearch" :key="item.id">
                                    <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
                                </span>
                            </dd>
                        </dl>
                </div>
                <p class="suggest">
                    <span v-for="item in hotSearch" :key="item.id">
                        <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
                    </span>
                </p>
            </el-col>
            <el-col :span="9"></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            command:[
                {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:1,
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:2,
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:3
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:4
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:5
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:6
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:7
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:8
                }, {
                    title:"北京欢乐谷",
                    link:"/123",
                    id:9
                },
            ],
            hotSearch:[
                {
                    title:"故宫博物院",
                    link:"/123",
                    id:11
                },{
                    title:"故宫博物院",
                    link:"/123",
                    id:12
                },{
                    title:"故宫博物院",
                    link:"/123",
                    id:13
                },{
                    title:"故宫博物院",
                    link:"/123",
                    id:14
                },{
                    title:"故宫博物院",
                    link:"/123",
                    id:15
                }],
            search:'',
            isFocus:false
        }
    },
    methods:{
        inputFocus(){
            this.isFocus=true
        },
        inputBlur(){
            setTimeout(()=>{
                this.isFocus=false
            },200)
        }
    },
    computed:{
        isCommand:function(){
            return this.isFocus&&this.search
        },
        isHotSearch:function(){
            return this.isFocus&&!this.search
        }
    }
}
</script>

<style lang='scss'>
.m-search-panel{
    padding:28px 0px 40px 150px;
    .logo{
        width: 126px;
        height: 46px;
        border: 0;
        vertical-align: initial;
    }
    .wrapper{
        position: relative;
        .input{
            width:75%;
        }
        .btn{
            width:17%;
            background: #13d1be;
            border-color: #13d1be
        }
        dl{
            padding-left:13px;
            font-size:13px;
            border:1px solid #eee;
            width:75%;
            box-sizing: border-box;
            background:#fff;
            position: absolute;
            border-top:0 solid #eee;
            line-height: 25px;
            dd{
                span{
                    margin-right:10px;
                }
                &>span:hover{
                    a{
                        color: #31BBAC;
                    }
                }
                &:hover{
                        color: #31BBAC;
                        cursor:pointer;
                }
                a{
                    color: #999;
                }
                    }
                }
    }
    .suggest{
        font-size: 12px;
        text-indent: 1em;
        text-align: left;
        span{
            margin-right:10px;
        }
        &>span:hover{
            a{
                   color: #31BBAC;
            }
        }
        a{
            color: #999;
        }
    }
}
</style>
