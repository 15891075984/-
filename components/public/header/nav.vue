<template>
    <div class="m-nav">
        <ul>
            <li class="list">
                <nuxt-link to='/my'>我的美团</nuxt-link>
                <dl>
                    <dd>
                        <nuxt-link to='/my'>我的订单</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>我的收藏</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>抵用券</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>账户设置</nuxt-link>
                    </dd>
                </dl>    
            </li>
            <li class="list">
                <nuxt-link to='/my'>手机APP</nuxt-link>
            </li>
            <li class="list">
                <nuxt-link to='/my'>商家中心</nuxt-link>
                <dl class="store">
                    <dd>
                        <nuxt-link to='/my'>登录商家中心</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>美团智能收银</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>我想合作</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>手机免费开店</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>餐饮代理商招募</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>商家申请开票</nuxt-link>
                    </dd>
                     <dd>
                        <nuxt-link to='/my'>免费合作美团排队</nuxt-link>
                    </dd>
                </dl>    
            </li>
            <li class="list">
                <nuxt-link to='/my'>网站导航</nuxt-link>
                 <dl class="www-nav" style="">
                         <ul>
                             <li>
                                 <h4>酒店旅行</h4>
                                <div style="width:30%;display:inline-block;cursor:pointer">酒店旅游</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">国际机票</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">火车票</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">榛果民宿</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">经济型酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">主题酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">商务酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">公寓</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">经济型酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">主题酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">商务酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">公寓</div>
                             </li>
                             <li>
                                 <h4>吃美食</h4>
                                 <div style="width:30%;display:inline-block;cursor:pointer">酒店旅游</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">国际机票</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">火车票</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">榛果民宿</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">经济型酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">主题酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">商务酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">公寓</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">经济型酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">主题酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">商务酒店</div>
                                <div style="width:30%;display:inline-block;cursor:pointer">公寓</div>
                             </li>
                             <li>
                                 <h4>看电影</h4>
                                <div style="width:100%;display:inline-block;cursor:pointer">热门影热映电影</div>
                                <div style="width:100%;display:inline-block;cursor:pointer">口碑院榜</div>
                                <div style="width:100%;display:inline-block;cursor:pointer">最受期待电影</div>
                                <div style="width:100%;display:inline-block;cursor:pointer">国内票房榜</div>
                                <div style="width:100%;display:inline-block;cursor:pointer">北美票房榜</div>
                                <div style="width:100%;display:inline-block;cursor:pointer">电影排行榜</div>
                             </li>
                             <li>
                                 <h4>手机应用</h4>
                                 <img style="width:22%;display:inline-block;cursor:pointer" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" alt="">
                                 <img style="width:22%;display:inline-block;cursor:pointer" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt="">
                                 <img style="width:22%;display:inline-block;cursor:pointer" src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt="">
                                 <img style="width:22%;display:inline-block;cursor:pointer" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt="">
                             </li>
                         </ul>
                </dl>    
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.m-nav{
    overflow: hidden;
    a{
                color:#999;
            }
    ul{
        li{
            float:left;
            width: 75px;
            padding:0 auto;
            text-align: center;
            list-style: none;
            dl{
                display: none;
                width: 75px;
                line-height: 35px;
                position: absolute
            }
            .store{
                width:105px;
            }
            
        }

        .list{
            &:hover{
                background: #fff;
                border-bottom:0px solid #eee;
               >a{color: #41B883};
               >dl{
                   display: block;
                   border:1px solid #eee;
                   border-top:0px solid #fff;
                   z-index: 99;
                   background:#fff;
               }
            }
            .www-nav{
                width:calc(69%);
                left:0;
                display:none;
               
                padding-left:120px;
                padding-right:150px;
                ul{
                    li{
                        width: 25%;
                         h4{
                            color: #41B883;
                        }
                    }
                }
            }
        }
        
        
    }
}

</style>
