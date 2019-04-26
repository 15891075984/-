import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import user from './modules/user'

Vue.use(Vuex)
const store=()=>new Vuex.Store({
    modules:{
        geo,
        user
    },
})
export default store
