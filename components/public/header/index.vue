<template >
   <div class="my-header">
     <top-bar/>
     <search-bar style="marginLeft:67px" :hotSearch="hotSearch"/>
   </div>
</template>

<script>
import axios  from '@/static/axios'
import TopBar from './topbar.vue';
import SearchBar from './searchbar'
export default {
  data(){
    return {
      hotSearch:[]
    }
  },
  mounted(){
    axios.get('/search/hotPlace',{
      params:{
        city:this.$store.state.geo.position.geo
      }
    })
    .then(({status,data:{code,result}})=>{
      if(status===200&&code===0){
        result.map(item=>{
          this.hotSearch.push(
            {
              title:item.name,
              link:`/${item.name}`,
              id:item.id
            }
          )
        })
      }
      console.log('====================================');
      console.log(this.hotSearch);
      console.log('====================================');
    })
  },
  components:{
    TopBar,
    SearchBar
  }
}
</script>

<style lang='scss'>
.my-header{
  // padding-left:70px;
}

</style>
