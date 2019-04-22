<template>
<div class="swip">
    <div v-swiper:mySwiper="swiperOption"  class="swiper-wid">
        <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner">
            <img :src="banner.src" class="slider-img">
        </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
    </div>
    <img class="bottom-img img-left" src="//p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
    <img  class="bottom-img" src="//p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
  </div>
</template>

<script>
  export default {
      data:function(){
          return {
              banners:[{
                  src:"//p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
              },{
                  src:"//p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
              },{
                   src:"//p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
              },{
                  src:"//p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
              }],
                swiperOption: {
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                        },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        },
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    }
          }
      }
    
  }
</script>
<style lang='scss'>
.swiper-wid{
    
    margin:15px;
    margin-top:18px;
    margin-bottom: 20px;
    .swiper-wrapper{
        .swiper-slide{
            .slider-img{
                width:560px;
                height:240px;
            }
        }
}
}
.swip{
    .bottom-img{
        width:270px;
        height:165px;
    }
    .img-left{
        margin-left:12px;
    }
}


</style>
