const axios =require( './utils/axios')
const Router =require( 'koa-router');
const Poi=require('../dbs/models/poi')
const Regions=require('../dbs/models/regions')
const router=new Router({
    prefix:"/search"
})
router.get('/top', async (ctx) => {
    try {
      let top = await Poi.find({
        'name': new RegExp(ctx.query.input),
        // city: ctx.query.city
        city:"三亚"
      })
      ctx.body = {
        code: 0,
        top: top.map(item => {
          return {
            name: item.name,
            type: item.type
          }
        }),
        type: top.length ? top[0].type : ''
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        top: []
      }
    }
})

router.get('/hotPlace', async (ctx) => {
    let city =ctx.query.city
    try {
      let result = await Regions.find().limit(5)
    
      ctx.body = {
        code: 0,
        result: result.map(item => {
          return {
            name: item.name,
            type: item.type,
            id:item.id
          }
        })
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        result: []
      }
    }
})
module.exports=router