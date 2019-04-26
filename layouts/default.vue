<template>
  <el-container>
    <el-header class="header-padding">
      <my-header/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer>
      <MFooter/>
    </el-footer>
</el-container>
</template>
<script>
import 'element-ui/lib/theme-chalk/index.css';
import MyHeader from '@/components/public/header/index.vue'
import MFooter from '@/components/public/footer/footer.vue'
import '@/assets/font/iconfont.css'
export default {
  components: {
    MyHeader,
    MFooter
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


