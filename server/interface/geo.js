const axios =require( './utils/axios')
const Router =require( 'koa-router');
const Province=require('../dbs/models/province')
const City=require('../dbs/models/city')
const pinyin=require('pinyin')

const router=new Router({
    prefix:'/geo'
})

router.get('/province',async(ctx,next)=>{
    let province=await Province.find()
    ctx.body={
        province:province.map(item=>{
            return {
                id:item.id,
                name:item.value[0]
            }
        })
    }
})
router.get('/city',async(ctx,next)=>{
    let cities=await City.find({})
    ctx.body={
        cities
    }
})
router.get('/citypinyin',async(ctx,next)=>{
    let list=[
        {
            first:"A",
            value:[]
        }
    ]
    let array=[]
    // let zzz="ABCDFGHJKLMNPQRSTWXYZ"
    let zzz=""
    // let zzz="ABCDFGHJKLMNPQRSTWXYZ".slice("");
    let cities=await City.find({});
    let pinyinList=cities.map(value=>{
        value.value.map(item=>{
            let name=item.name;
            if(item.name==="市辖区") {
                name=item.province;
            }
            list.push({name,id:item.id,first:pinyin(name)[0][0].slice(0,1).toUpperCase()})
        })
        })
        list.map(val=>{
            if(zzz.indexOf(val.first)<0){
                zzz+=val.first;
                array.push(
                    {
                        first:val.first,
                        value:[val]
                    }
                )
            }else{
                for(let i=0;i<array.length;i++){
                    if(array[i].first==val.first){
                        array[i].value.push(val)
                    }
                }
            }
        })
        array.sort((a,b)=>{
            return a.first.charCodeAt()-b.first.charCodeAt()
        })
        ctx.body={
            code:0,
            array
        }
})
module.exports=router;