<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{this.$store.state.geo.position.geo}}美团</el-breadcrumb-item>
        <el-breadcrumb-item v-if="keyword2">{{this.$store.state.geo.position.geo}}{{keyword2}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$store.state.geo.position.geo}}{{keyword}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
props: {
    keyword: {
      type: String,
      default: ''
    },
    keyword2:{
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
