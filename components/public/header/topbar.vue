<template>
     <el-row
        class='m-header'
        :gutter="0">
        <el-col :span="6">
          <m-geo/>
        </el-col>
        <el-col :span="9">
          <m-user/>
        </el-col>
        <el-col :span="9">
           <m-nav/>
        </el-col>
    </el-row>
</template>

<script>
import MGeo from './geo.vue'
import MUser from './user.vue'
import MNav from './nav.vue'
export default {
components:{
    MGeo,
    MUser,
    MNav
  }
}
</script>

<style>
.m-header{
  line-height: 50px;
  font-size: 12px;
  padding-left: 220px;
  background: #f8f8f8;
  color:#666;
}
</style>
