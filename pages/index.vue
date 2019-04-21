<template>
  <section class="container">
    <el-row>
      <el-col :span="5">
        <MMenu/>
      </el-col>
      <el-col :span="19">2</el-col>
    </el-row>
  </section>
</template>

<script>
import MMenu from '../components/index/menu.vue'

export default {
  components: {
    MMenu
  }
}
</script>
<style>
  .container{
    margin-top:80px;
    padding-left:130px;
  }
</style>



