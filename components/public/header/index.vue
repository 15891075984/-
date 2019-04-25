<template >
   <div class="my-header">
     <top-bar/>
     <search-bar style="marginLeft:67px"/>
   </div>
</template>

<script>
import TopBar from './topbar.vue';
import SearchBar from './searchbar'
export default {
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
