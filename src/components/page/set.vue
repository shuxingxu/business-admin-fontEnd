<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>设置</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="page-header-actions">
            </div>
        </div>
        <div class="page-content">
            <div class="page-main">
                <div class="panel panel-bordered">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <div class="sub-heading m-n">
                                <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/pas.png"  width="100%"></span><span class="title">修改密码</span><small class="text-muted ml-sm">已设置登陆密码</small></h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="form-panel">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="100px" class='demo-dynamic'>
                                <el-form-item label="原始密码：" prop="name">
                                    <el-input v-model="ruleForm.name" placeholder="请输入原始密码"></el-input>
                                </el-form-item>
                                <el-form-item label="修改密码：" prop="name">
                                    <el-input v-model="ruleForm.url" placeholder="请输入6-16位登录密码"></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码：" prop="name">
                                    <el-input v-model="ruleForm.url" placeholder="再次输入新密码"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm')" class="w-100">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <div class="panel-heading">
                        <div class="panel-title">
                            <div class="sub-heading m-n">
                                <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/set.png"  width="100%"></span><span class="title">操作设置</span><small class="text-muted ml-sm">设置是否允许平台代为管理</small></h3>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <el-switch v-model="opt" active-text="允许" inactive-text="不允许">
                        </el-switch>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            opt: true,
            ruleForm: {
                name: '',
                url: '',
                content: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入模板名称', trigger: 'blur' }
                ],
                url: [
                    { required: true, message: '请输入链接地址', trigger: 'blur' },
                    { type: 'url', message: '格式不正确', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请输入100字以内的内容', trigger: 'blur' },
                    { min: 10, max: 100, message: '最少10个字节，最多100个字节', trigger: 'blur' }
                ]
            }
        }
    },
    components: {

    },
    methods: {},
    mounted() {

    },
    computed: {}
}
</script>
<style lang='less' scoped>
</style>