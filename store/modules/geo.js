const state=()=>({
    position:{
        geo:"北京"
    }
})
const mutations={
    setPosition(state,value){
        state.position.geo=value
    }
}
const actions={
    setPosition:({commit},position)=>{
        commit('setPosition',position)
    }
}
export default {namespaced: true, state, mutations, actions}