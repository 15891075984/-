<template>
    <div class="m-search-panel">
        <el-row :gutter='0'>
            <el-col :span="5">
                <a href="/">
                    <img class='logo' src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
                </a>
            </el-col>
            <el-col :span="10">
                <div class="wrapper">
                    <el-input placeholder="搜索商家或地点" class="input"  v-model="search" @input='inputSearch' @focus="inputFocus" @blur="inputBlur">
                    </el-input><el-button type="primary" class="btn">
                        <i class="iconfont">&#xe6d8;</i>
                    </el-button>
                        <dl v-if="isCommand" class='command'>
                            <dd v-for="item in command" :key="item.id">
                                <span>
                                    <a :href="item.link">{{item.title}}</a>
                                </span>
                            </dd>
                        </dl>
                        <dl v-if="isHotSearch"  class='hotSearch'>
                            <dt>热门搜索</dt>
                            <dd>
                                <span v-for="item in hotSearch" :key="item.id">
                                    <a :href="item.link">{{item.title}}</a>
                                </span>
                            </dd>
                        </dl>
                </div>
                <p class="suggest">
                    <span v-for="item in hotSearch" :key="item.id">
                        <a :href="item.link">{{item.title}}</a>
                    </span>
                </p>
            </el-col>
            <el-col :span="9"></el-col>
        </el-row>
    </div>
</template>

<script>
import axios  from '@/static/axios'
export default {
    props:{
        hotSearch:{
            type:String,
            default:[]
        }
    },
    data:function(){
        return {
            command:[],
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
        },
        inputSearch(){
            let self=this;
            clearTimeout(self.timer)
            self.timer=setTimeout(function(){
                axios.get('/search/top',{
                params:{
                    city:self.$store.state.geo.position.geo,
                    name:self.search
                }
            })
                .then(({status,data:{code,top}})=>{
                    if(status===200&&code===0){
                        let data=[];
                        top.map((item,index)=>{
                            data.push(
                                {
                                    title:item.name,
                                    link:`/s/${item.name}`,
                                    id:item.name.toString()
                                }
                            )
                        })
                        self.command=data;
                    }
                })
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
            z-index:99;
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
