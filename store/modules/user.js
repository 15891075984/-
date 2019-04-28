import axios from '@/static/axios'
const state={
    info:{
        username:"",
        login:true
    }
}
const mutations={
    loginOut(state){
        axios.get('/users/logout')
        .then(({status,data:{code}})=>{
            if(status===200&&code===0){
                state.info.login=false
            }
        })
    },
    loginIn(state,name){
        console.log('====================================');
        console.log("in"+"");
        console.log(name);
        state.info.login=true;
        state.info.username=name;
        location.href='/'
    }
}
const actions={
    loginOut:({commit})=>{
        commit('loginOut')
    },
    loginIn:({commit},name)=>{
        commit('loginIn',name)
    }
}
export default {namespaced:true,state,actions,mutations}