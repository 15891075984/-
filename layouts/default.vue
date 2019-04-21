<template>
  <el-container>
    <el-header class="header-padding">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      Footer
    </el-footer>
</el-container>
</template>
<script>
import MyHeader from '@/components/public/header/index.vue'
import '@/assets/font/iconfont.css'
export default {
  components: {
    MyHeader
  }
}
</script>
<style>
.header-padding{
  padding:0;
}
a{
  text-decoration: none;
  
}
li{
  list-style: none;
}
</style>


