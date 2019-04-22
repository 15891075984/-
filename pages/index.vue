<template>
  <section class="container">
    <el-row>
      <el-col :span="4">
        <MMenu/>
      </el-col>
      <el-col :span="10">
        <Swiper/>
      </el-col>
      <el-col :span="10">
        <Login/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="21">
        <Content/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import MMenu from '../components/index/menu.vue'
import Swiper from '../components/index/swiper'
import Login from '../components/index/login.vue'
import Content from '../components/index/content'

export default {
  components: {
    MMenu,
    Swiper,
    Login,
    Content
  }
}
</script>
<style>
  .container{
    margin-top:80px;
    padding-left:130px;
  }
</style>



