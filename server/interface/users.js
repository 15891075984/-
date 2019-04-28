const Router =require( 'koa-router');
const Redis =require( 'koa-redis');
const nodeMailer =require( 'nodemailer');
const User =require( '../dbs/models/users')
const Passport =require( './utils/passport')
const Email =require( '../dbs/config')
const axios =require( './utils/axios')
let router=new Router({
    prefix:"/users"
})
let Store=new Redis().client
router.post('/signup',async(ctx)=>{
    const {username,password,code,email}=ctx.request.body;
    if(code){
        const saveCode=await Store.hget(`nodemail:${username}`,`code`)
        const saveExpire=await Store.hget(`nodemail:${username}`,`expire`)
        if(code==saveCode){
            if(new Date().getTime()-saveExpire>0){
                ctx.body={
                    code:-1,
                    msg:"验证码已经过期，请重新尝试"
                }
                return false
            }
        }else{
            ctx.body={
                code:-1,
                msg:"请填写正确的验证码"
            }
        }
    }else{
        ctx.body={
            code:-1,
            msg:"请填写验证码"
        }
    }
    let user=await User.find({
        username
    })
    if(user.length){
        ctx.body={
            code:-1,
            msg:"用户名已经存在"
        }
    }
    let nuser=await User.create({
        username,
        password,
        email
    })
    ctx.body={
        code:0
    }
    if(nuser){
        let res=axios.post('/users/signin',{
            username,
            password
        }).then(res=>{
            ctx.body={
                code:0
            }
        })
        // if(res.data&&res.data.code===0){
        //     ctx.body={
        //         code:0,
        //         msg:"注册成功",
        //         user:res.data.user
        //     }
        // }else{
        //     ctx.body={
        //         code:-1,
        //         msg:"error"
        //     }
        // }
    }else{
        ctx.body={
            code:-1,
            msg:"注册失败"
        }
    }
})
router.get('/logout',(ctx,next)=>{
    return ctx.body={
        code:0,
        msg:"登录退出"
    }
})
router.post('/signin',async (ctx,next)=>{
    let username=ctx.request.body.username;
    let password=ctx.request.body.password;
    await User.find({username,password},(err,doc)=>{
        console.log('====================================');
        console.log(err);
        console.log(doc)
        if(doc.length<=0){
            ctx.body={
                code:-1,
                msg:"登录失败，此用户不存在"
            }
        }else{
            ctx.body={
                code:0,
                username:doc[0].username,
                msg:"登录成功"
            }
        }
    })
})
router.post('/verify',async(ctx,next)=>{
    let username=ctx.request.body.username
    const saveExpire=await Store.hget(`nodemail:${username}`,'expire')
    if(saveExpire&&new Date().getTime()-saveExpire<0){
        ctx.body={
            code:'-1',
            msg:"验证请求过于频繁，1分钟内一次"
        }
        return false
    }
    let transporter=nodeMailer.createTransport({
        host:Email.smtp.host,
        port:587,
        secure:false,  //465接口为true，其他为false
        auth:{
            user:Email.smtp.user,
            pass:Email.smtp.pass
        }
    })
    let ko={
        code:Email.smtp.code(),
        expire:Email.smtp.expire(),
        email:ctx.request.body.email,
        user:ctx.request.body.username
    }
    let mailOptions={
        from:`认证邮件<${Email.smtp.user}>`,
        href:ko.email,
        subject:`《白星星美团网全栈实战》注册码`,
        html:`您在《慕课网高仿美团网全栈实战》课程中注册，您的邀请码是${ko.code}`
    }
    await transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log("error mailOptions")
        }else{
            Store.hmset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email', ko.email)
        }
    })
    ctx.body={
        code:"0",
        msg :'验证码已发送，可能会有延时，有效期1分钟'
    }
})
router.get('/exit',async(ctx,next)=>{
    await ctx.logout()
    if(!ctx.isAuthenticated()){  //再次检测是否登录用户
        ctx.body={
            code:0
        }
    }else{
        ctx.body={
            code:-1
        }
    }
})
router.get('/getUser',async(ctx)=>{
    if(ctx.isAuthenticated()){       //检测是否登录用户,passport把用户信息放到session对象中去
        const {username,email}=ctx.session.passport.user
        ctx.body={
            user:username,
            email
        }
    }else{
        ctx.body={
            user:"",
            email:""
        }
    }
})
module.exports=router