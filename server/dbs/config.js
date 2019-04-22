module.exports={
    dbs:"mongodb://127.0.0.1:27017/student",
    redis:{
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    smtp:{
        get host(){
            return 'smtp.qq.com'
        },
        get user(){
            return '920702811@qq.com'
        },
        get pass(){
            return "cycurpubjrvcbbbf"
        },
        get code(){
            return ()=>{
                return Math.random().toString(16).slice(2,6).toUpperCase()
            }
        },
        get expire(){
            return ()=>{
                new Date().getTime+60*60*1000
            }
        }
    }
}