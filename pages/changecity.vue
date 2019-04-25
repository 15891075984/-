<template>
    <div class="chang-city-wrapper">
        <el-row>
            <el-col :span="20">
                <change-province/>
                <hotCity :hotCity="recently" title="热门城市"/>
                <hotCity :hotCity="hotCity" title="最近访问"/>
                <Spinyin/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import pinyin from "pinyin"
import axios from '@/static/axios'
import changeProvince from '@/components/changeCity/province'
import hotCity from '@/components/changeCity/hotCity'
import Spinyin from '@/components/changeCity/isPinYin'
export default {
    components:{
        changeProvince,
        hotCity,
        Spinyin
    },
    mounted(){
        axios.get('/geo/city')
        .then(({status,data})=>{
            if(status==200){
                this.cities=data.cities;
                this.hotCity=this.cities[6]['value'].slice(2,6);
                this.recently=this.cities[8]['value'].slice(2,6);
            }
        })
    },
    data(){
        return {
            cities:[],
            list:[],
            hotCity:[],
            recently:[]
        }
    },
    computed:{
        // getHotcity(){
        //     return this.cities[6]['value'].slice(2,6)
        // }
    }
}
</script>

<style lang='scss'>
.chang-city-wrapper{
    margin-top:100px;
    padding-left:200px;
    dl{
        padding-bottom:15px;
    }
}

</style>
