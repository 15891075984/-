import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import user from './modules/user'
import a from './modules/a'

Vue.use(Vuex)
const store=()=>new Vuex.Store({
    modules:{
        geo,
        user,
        a
    },
})
export default store
