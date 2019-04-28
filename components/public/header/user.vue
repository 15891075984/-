<template>
    <div class="m-user">
        <div class="as-user" v-if="this.$store.state.user.info.login">
            <span href='/login' class="user-info">{{this.$store.state.user.info.username}}</span>
            <span  @click="loginOutBtn">退出</span>
        </div>
        <div class="no-user" v-else>
            <a href='/login' >立即登录</a>
            <a href='/register' >注册</a>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            ss:""
        }
    },
    methods:{
        ...mapActions('user',['loginOut','loginIn']),
        ...mapActions('geo',['setPosition']),
        loginOutBtn(){
             this.loginOut()
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
