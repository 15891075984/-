<template>
    <div class="m-menu">
        <dl @mouseleave="leave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menu" :key="index"
                                    @mouseenter="enter">
                <i class="el-icon-edit icon-type"/>
                <span :class="item.type">{{item.name}}</span>
                <i class="iconfont icon-posi">&#xe603;</i>
            </dd>
        </dl>
        <div class="detail" v-if="kind"
                            @mouseenter="detailEnter"
                            @mouseleave="detailLeave">
            <template v-for="(item,index) in detail.child">
                <div :key="index">
                    <h4 >{{item.title}}</h4>
                    <span class="more">更多
                        <i class="iconfont icon-posi">&#xe603;</i>
                    </span>
                    <hr/>
                    <span v-for="(ite,idx) in item.child" :key="idx">{{ite}}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return {
        kind:'',
        menu:[{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'takeout',
            name:'外卖',
            child:[{
            title:'外卖',
            child:['美团外卖']
            }]
        },{
            type:'hotel',
            name:'酒店',
            child:[{
            title:'酒店星级',
            child:['经济型','舒适/三星','高档/四星','豪华/五星']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        },{
            type:'food',
            name:'美食',
            child:[{
            title:'美食',
            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
            }]
        }]
        }
  },
  methods:{
        enter:function(e){
            this.kind=e.target.getElementsByTagName("span")[0].className;
        },
        leave:function(e){
            let self=this;
            this._timer=setTimeout(function(){
                self.kind=""
            },150)
        },
        detailEnter:function(e){
            clearTimeout(this._timer)
        },
        detailLeave:function(e){
            this.kind=""
        }
    },
    computed:{
        detail:function(){
            return this.menu.filter(item=>item.type===this.kind)[0]
        }
    },
}
</script>

<style lang='scss'>
.m-menu{
    position: relative;
    dl{
        color:#999;
        dt{
            height: 50px;
            padding-top: 15px;
            box-sizing: border-box;
            font-size: 16px;
            background: #28bfac;
            font-weight: 400;
            padding-left:15px;
            color:#fff;
        }
        dd{
            position: relative;
            background: #28bbac;
            line-height: 25px;
            &:hover{
                background:#53c8bd;
                cursor:pointer;
            }
            span{
                color:#fff;
            }
            .icon-posi{
                position: absolute;
                right:0;
            }
        }
    }
    .detail{
        position: absolute;
        z-index:50;
        box-sizing: border-box;
        top:50px;
        left:228px;
        height:395px;
        bottom:0;
        width: 378px;
        padding:15px;
        border:1px solid #eee;
        border-left:0;
        background: #fff;
        .more{
            position: absolute;
            right:0px;
            top:15px;
            font-size: 13px;
        }
        h4{
            line-height: 35px;
        }
        span{
            line-height: 35px;
            margin-right:13px;
            font-size: 13px;
            color:#999;
        }
    }
}
</style>
