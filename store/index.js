import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'

Vue.use(Vuex)
const store=()=>new Vuex.Store({
    modules:{
        geo
    },
})
export default store
