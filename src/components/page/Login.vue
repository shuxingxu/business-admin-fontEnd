<template>
    <div class="login-wrap">
        <div class="ms-title">商家后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="shop_username">
                    <el-input v-model="ruleForm.shop_username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item prop="shop_password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.shop_password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {user} from '@/api'
    export default {
        data: function(){
            return {
                ruleForm: {
                    shop_username: 'shop2',
                    shop_password: '123456'
                },
                rules: {
                    shop_username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    shop_password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this[formName])
                        user.login.call(this, {
                            url: '/api/shop/login/passwordLogin',
                            method: 'post',
                            data: this[formName]
                        })
                        // .then(res => {
                        //     console.log(res.headers)
                        // })
                        // localStorage.setItem('ms_username',this.ruleForm.username);
                        // this.$router.push('/');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>