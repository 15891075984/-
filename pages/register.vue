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
                <span class="status">{{statusMsg}}</span>
                <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
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
                <el-button type="primary"  @click="register('ruleForm')">同意以下协议并注册</el-button>
            </el-form-item>
            <el-form-item>
                <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
export default {
    layout:"blank",
    data(){
        return {
            statusMsg: '',
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
                pwd:[
                    {required:true,message:"创建密码",trigger:"blur"}
                ],
                cpwd:[
                    {required:true,message:"确认密码",trigger:"blur"},
                    {validtator:(rule,value,callback)=>{
                        if(value===""){
                            callback(new Error("请再次输入密码"))
                        }else if(value!==this.pwd){
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
      register:()=>{
          console.log('====================================')
          console.log(this.$refs)
          console.log('====================================')
      },
    //   register(formName) {
    //       console.log('====================================')
    //       console.log(this.$refs)
    //       console.log('====================================')
    //     // this.$refs['ruleForm'].validate((valid) => {
    //     //   if (valid) {
    //     //     alert('submit!');
    //     //   } else {
    //     //     console.log('error submit!!');
    //     //     return false;
    //     //   }
    //     // });
    //   },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
