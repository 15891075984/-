const state={
    money:100
}
const mutations={
    addMoney(state){
        console.log(11)
        state.money=200
    }
}
const actions={
    addMoney:({commit})=>{
        commit('addMoney')
    }
}
export default {namespaced:true,state,actions,mutations}