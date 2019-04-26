<template>
    <div class="m-user">
        <div class="as-user" v-if="this.$store.state.user.info.login">
            <nuxt-link to='/login' class="user-info">{{this.$store.state.user.info.username}}</nuxt-link>
            <nuxt-link to='/register' >退出</nuxt-link>
        </div>
        <div class="no-user" v-else>
            <nuxt-link to='/login' >立即登录</nuxt-link>
            <nuxt-link to='/register' class="fast-register">注册</nuxt-link>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:""
        }
    }
}
</script>

<style lang='scss'>
.m-user{
    .as-user{
        .user-info{
            color:#999;
            margin-right:10px;
        }
    }
    .no-user{
        .fast-register{
            color:#999;
            margin-left:10px;
        }
    }
}
</style>
