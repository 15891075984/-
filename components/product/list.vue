<template>
    <div class="m-product-list">
        <dl>
            <dd
                v-for="item in nav" :key="item.name">{{item.txt}}</dd>
        </dl>
        <Item/>
    </div>
</template>

<script>
import Item from './productItem.vue'
export default {
    components:{
        Item
    },
  data() {
    return {
      nav: [
        {
          name: 's-default',
          txt: '智能排序',
          acitve: true
        }, {
          name: 's-price',
          txt: '价格最低',
          active: false
        }, {
          name: 's-visit',
          txt: '人气最高',
          active: false
        }, {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ]
    }
  },
  methods:{
  }
}
</script>

<style lang='scss'>
.m-product-list{
     box-sizing: border-box;
      margin-top: 10px;
      background: #FFF;
      border: 1px solid #E5E5E5;
      border-radius: 4px;
      color: #333;
      font-size: 14px;
      line-height: 20px;
      padding: 11px 20px;

      dl {
          .nav-active{
              color:#13D1BE;
          }
        dd {
          width: 96px;
          height: 20px;
          display: inline-block;
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
        }

        padding-bottom: 2px;
}
}

</style>
