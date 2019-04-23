<template>
    <div class="page-register">
        <div class="register-header">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="">
            <div class="right">
                <span>已有美团账号</span>
                <el-button type="small">登录</el-button>
            </div>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
                <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
                <span class="status">{{statusMsg}}</span>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="ruleForm.code" maxlength="4"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input v-model="ruleForm.pwd" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="cpwd">
                <el-input v-model="ruleForm.cpwd" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="register()">同意以下协议并注册</el-button>
            </el-form-item>
            <el-form-item>
                <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from 'axios'
import CryptoJS from 'crypto-js'
export default {
    layout:"blank",
    data(){
        return {
            count:60,
            statusMsg: '',
            timer:'',
            error: '',
            ruleForm: {
                name: '',
                code: '',
                pwd: '',
                cpwd: '',
                email: ''
            },
            rules:{
                name:[
                    {required:true,message:"请输入昵称",trigger:"blur"}
                ],
                email:[
                    {required:true,type:"email",message:"请输入邮箱",trigger:"blur"}
                ],
                code:[
                    {required:true,message:"输入验证码",trigger:"blur"}
                ],
                pwd:[
                    {required:true,message:"创建密码",trigger:"blur"}
                ],
                cpwd:[
                    {required:true,message:"确认密码",trigger:"blur"},
                    {validator:(rule,value,callback)=>{
                        if(value===""){
                            callback(new Error("请再次输入密码"))
                        }else if(value!==this.ruleForm.pwd){
                            callback(new Error("两次输入密码不一致"))
                        }else{
                            callback()
                        }
                    },
                    trigger:"blur"
                    }
                ]
            }
        }
    },
    methods: {
    register() {
        let self=this;
        self.$refs['ruleForm'].validate((valid) => {
        if (valid) {
            axios.post('/users/signup',{username:self.ruleForm.name,
                                        password:self.ruleForm.pwd,
                                        email:self.ruleForm.email,
                                        code:self.ruleForm.code})
            .then(({status,data})=>{
                if(status==200){
                    if(data.code==0){
                        location.href='/login'
                    }
                }else{
                    self.error="服务器端出错"
                }
            })
        } else {
            return false;
        }
        });
        },
        sendMsg:function(){
        let namePass,emailPass;
        let self=this;
        if(this.timer){
            return false
        }
        self.$refs['ruleForm'].validateField('name',(valid)=>{
            namePass=valid
            })
        self.statusMsg=''
        if(namePass){
            return false
        }
        self.$refs['ruleForm'].validateField('email',(valid)=>{
            emailPass=valid
            })
        if(!namePass&&!emailPass){
            axios.post('/users/verify',{
                username:this.ruleForm.name,
                email:this.ruleForm.email
                })
            .then(({status,data})=>{
                if(status===200&&data&&data.code=="0"){
                    let count=10;
                    self.statusMsg=`验证码已发送，剩余${count--}秒`
                        this.timer=setInterval(()=>{
                        self.statusMsg=`验证码已发送，剩余${count--}秒`
                        if(count<0){
                            self.statusMsg="";
                            clearInterval(this.timer);   //clearInterval清除完,打印出来this.timer是数字
                            this.timer="";  //需要清除一下数字才生效
                        }
                    },1000)
                }else{
                    self.statusMsg=data.message
                }
            })
        }
    }
    }
}
</script>

<style lang='scss'>
.page-register{
    padding-left:275px;
    line-height: 60px;
    padding-bottom:10px;
    .register-header{
        height:60px;
        overflow: hidden;
        margin-bottom:45px;
        img{
            width: 126px;
            height: 46px;
        }
        .right{
            float:right;
            margin-right:120px;
        }
    }
    .demo-ruleForm{
        width:600px;
    }
}

</style>
