<template>
    <div class="m-product-item">
        <el-row v-for="(item,key) in listData" :key="key" class="list" :name="item.title">
            <el-col :span="6">
                <a :href="'/detail/'+item.title">
                    <img :src="item.imgUrl">
                </a>
            </el-col>
            <el-col :span="16" class="desc">
                <div >
                    <a :href="'/detail/'+item.title">
                        <h3>{{item.title}}</h3>
                    </a>
                    <p>
                        <el-rate
                            v-model="item.rate"
                            disabled
                            class="select"
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                            </el-rate>
                            <span class="good">很好</span>
                            <span class="good">{{item.rate}}分</span>
                            <span class="good orange">{{item.comment}}人评论</span>
                    </p>
                    <p>
                        <span>{{item.storeName}}</span>|
                        <span>{{item.storeDoor}}</span>
                        <span class='m-product-city'>{{item.position}}</span>
                        <span class='map'>
                            <a href="/map">
                                <i class="iconfont">&#xe633;</i>
                                查看地图
                            </a>
                        </span>
                    </p>
                    <p class="avg-price">
                        人均￥68
                    </p>
                    <ul>
                        <li v-for="(value,key) in item.active" :key="key">
                            <a :href="'/detail/:'+item.title">
                                <h4>{{value.title}}</h4>
                                <p class="detal-title">
                                    <span class="red">
                                        ￥{{value.hotPrice}}
                                    </span>
                                    <span class="good">
                                        门市价￥{{value.price}}
                                    </span>
                                    <span class="good">已售{{value.sellOut}}</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="showAll" @click="clickShowAll">{{showAll?"收起":"更多优惠"}}</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showAll:false,
            hideData:[],
            listData:[
                {
                    imgUrl:"https://p1.meituan.net/msmerchant/8ea57660c4bfaa9bac5274dac56e414d96011.jpg@275w_156h_1e_1c",
                    title:"京都老北京涮肉",
                    rate:4.9,
                    comment:4531,
                    storeName:"老北京火锅",
                    storeDoor:"前门/大栅栏",
                    position:"西城区粮食店街12号",
                    active:[
                        {
                            title:"老北京火锅双人餐",
                            hotPrice:118,
                            price:209,
                            sellOut:10473
                        },
                        {
                            title:"老北京鸳鸯锅",
                            hotPrice:118,
                            price:209,
                            sellOut:10473
                        }
                    ]
                },
                {
                    imgUrl:"//p0.meituan.net/msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@275w_156h_1e_1c",
                    title:"小龙坎",
                    rate:4.9,
                    comment:4531,
                    storeName:"老北京火锅",
                    storeDoor:"前门/大栅栏",
                    position:"西城区粮食店街12号",
                    active:[
                        {
                            title:"老北京火锅双人餐",
                            hotPrice:118,
                            price:209,
                            sellOut:10473
                        },
                        {
                            title:"老北京鸳鸯锅",
                            hotPrice:118,
                            price:209,
                            sellOut:10473
                        }
                    ]
                }
            ],
            name:"京都老北京涮肉"
        }
    },
    computed:{
        activeData(){
            let data=[];
            data.concat(this.listData)
            let self=this;
            let name=this.name;
            console.log('====================================')
            console.log(data)
            console.log('====================================')
            // self.listData.forEach(function(item,index){
            //     if(item.title===name){
            //         if(!self.showAll){
            //             data.push(item.active.slice(0,2))
            //         }else{
            //             data.push(item.active)
            //         }
            //     }else{
            //         data.push(item.active)
            //     }
            // })
            data.forEach(function(item,index){
                if(item.title==name){
                    data[index].active=data[index].active.slice(0,2)
                }
            })
            return data
        }
    },
    methods:{
        clickShowAll(e){
            this.showAll=!this.showAll
            this.name=e.target.parentNode.parentNode.getAttribute('name')
            // let Statedata=[].concat(this.listData)
            // this.listData.map((item,index)=>{
            //     if(item.title==this.name){
            //         Statedata[index].active.splice(2,Statedata[index].active.length)
            //     }
            // })
            // this.listData
        }
    },
    watch:{
        showAll:function(val,old){
            let Statedata=[].concat(this.listData)
            let array=[]
            this.listData.map((item,index)=>{
                if(item.title==this.name){
                    if(val){
                        this.list=Statedata[index].active.splice(2,Statedata[index].active.length)
                        console.log('====================================')
                        console.log(this.list)
                        console.log('====================================')
                    }else{
                        Statedata=this.list.concat(this.listData[index].active)
                    }
                }
            })
            this.listData=Statedata;
        }
    }
}
</script>

<style lang='scss'>
.m-product-item{
    margin-top:15px;
    border-top:1px solid #eee;
    .list{
    padding-bottom:20px;
    padding-top:20px;
    border-top:1px solid #eee;
        .showAll{
        position: absolute;
        left:25px;
        color:peru;
        bottom:-10px;
    }
    }
    a{
        height: 125px;
        width: 220px;
        img{
            width: 220px;
            height: 125px;
            border-radius: 4px;
            }
        }
    .desc{
        margin-left:15px;
        position: relative;
        font-size: 13px;
        h3{
            line-height: 21px;
        }
        .select{
            display: inline-block;
        }
        .good{
            margin-left:10px;
            color:#999;
        }
        .orange{
            color:#ff9900;
        }
        .m-product-city{
            margin:0 18px;
        }
        .avg-price{
            padding-bottom:10px;
            margin-bottom:15px;
            border-bottom:1px dashed #ccc;
        }
        ul{
            li{
                margin-bottom:16px;
                h4{
                        color: #666;
                        height: 20px;
                        font-size: 14px;
                        line-height: 20px;
                        overflow: hidden;
                        white-space: nowrap;
                }
                .red{
                    color:red;
                    font-size: 16px;
                }
            }
        }
    }
    }
</style>
