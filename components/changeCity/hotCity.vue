<template>
    <dl class="hotcity">
        <dd>
            <span>{{this.title}} : </span>
            <span v-for="item in hotCity" :key="item.id">{{item.name}}</span>
        </dd>
    </dl>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:""
        },
        hotCity:{
            type:Array,
            default:[]
        }
    },
    
}
</script>

<style lang='scss'>
.hotcity{
    span{
        margin-right: 50px;
        line-height: 50px;
        font-size: 16px;
        cursor:pointer;
        &:hover{
            color:#13D1BE
        }
    }
    :nth-child(1){
        margin-right:18px;
    }
}

</style>
