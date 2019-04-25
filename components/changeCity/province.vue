<template>
    <dl class="province">
        <dd>
            <span>按省份选择：</span>
            <el-select v-model="province" filterable   @input='input' @change="changeProvince" placeholder="请选择省份" style="marginRight:15px">
                <el-option
                v-for="item in getProvinceList"
                :key="item.id"
                :label="item.value[0].province"
                :value="item.id">
                </el-option>
            </el-select>
            <el-select v-model="provinceCity" filterable   placeholder="请选择城市" :disabled="province?false:true" slot="">
                <el-option
                v-for="ite in getProvinceCityList[0]"
                :key="ite.name"
                :label="ite.name.indexOf('市辖区')>=0?ite.province:ite.name"
                :value="ite.id">
                </el-option>
            </el-select>
            <span style="marginLeft:25px">直接搜索：</span>
            <el-select
                v-model="search"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入关键词"
                :remote-method="remoteMethod"
                :loading="loading">
                <el-option
                    v-for="item in list"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
        </dd>
    </dl>
</template>

<script>
import axios from '@/static/axios'
export default {
    data(){
        return {
            cities:[],
            value:"",
            list:[],
            loading: false,
            province:"",
            provinceCity:"",
            search:"",
            searchList:[]
        }
    },
    methods:{
        input(){
            this.cities.map(value=>{
                value.value.map(item=>{
                    let name=item.name;
                    if(item.name==="市辖区") {
                        name=item.province;
                    }
                    this.list.push({name,id:item.id})
                })
                })
        },
        changeProvince(){
            this.provinceCity=""
        }
    },
    mounted(){
        axios.get('/geo/city')
        .then(({status,data})=>{
            if(status==200){
                this.cities=data.cities;
                this.cities.map(value=>{
                value.value.map(item=>{
                    let name=item.name;
                    if(item.name==="市辖区") {
                        name=item.province;
                    }
                    this.list.push({name,id:item.id})
                })
                })
            }
        })
    },
    computed:{
        getProvinceList(){
            return this.cities.map(value=>{
                let obj={};
                obj.id=value.id;
                obj.value=value.value;
                return obj
            })
        },
        getProvinceCityList(){
            return (this.cities.filter(item=>{
                return item.id==this.province
                }).map(val=>{
                    return (val.value)
                }))
        },
        getSearchList(){
            return this.cities.map(value=>{
                value.value.map(item=>{
                    let name=item.name;
                    if(item.name==="市辖区") {
                        name=item.province;
                    }
                    this.list.push({name,id:item.id})
                })
                })
        }
    }
}
</script>

<style lang='scss'>
</style>
