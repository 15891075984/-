const axios =require( './utils/axios')
const Router =require( 'koa-router');
const Province=require('../dbs/models/province')
const City=require('../dbs/models/city')

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
    let cities=await City.find({id: "110000"})
    ctx.body={
        cities
    }
})
module.exports=router;