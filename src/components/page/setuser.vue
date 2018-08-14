<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>员工管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="page-content">
            <div class="page-main">
                <div class="sub-heading mt-n">
                    <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title">数据列表</span></h3>
                    <div class="sub-actions">
                        <el-button icon="el-icon-plus" size="mini" type="primary" @click="addModel = true">新增</el-button>
                    </div>
                </div>
                <nomal-table :table-json="tableJson" :url="url"></nomal-table>
            </div>
        </div>
        <el-dialog title="新建子账号" :visible.sync="addModel" width="30%">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="94px" class='demo-dynamic'>
                <el-form-item label="账号备注：" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入账号备注"></el-input>
                </el-form-item>
                <el-form-item label="登陆密码：" prop="name">
                    <el-input v-model="ruleForm.url" placeholder="请输入6-16位登录密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="name">
                    <el-input v-model="ruleForm.url" placeholder="请确认密码"></el-input>
                </el-form-item>
                <el-form-item label="拥有权限：" prop="name">
                    <el-select v-model="ruleForm.name" placeholder="请选择拥有的权限" class="w-full">
                        <el-option label="财务" value="shanghai"></el-option>
                        <el-option label="员工" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="绑定手机：" prop="name" class="mb-n">
                    <el-input v-model="ruleForm.url" placeholder="请输入绑定手机号"></el-input>
                    <p class="f12 text-muted">请输入子账号使用的手机号，首次登陆需验证</p>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addModel = false">取 消</el-button>
                <el-button type="primary" @click="addModel = false">创 建</el-button>
              </span>
        </el-dialog>
        <el-dialog title="编辑子账号" :visible.sync="editModel" width="30%">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="94px" class='demo-dynamic'>
                <el-form-item label="账号备注：" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入账号备注"></el-input>
                </el-form-item>
                <el-form-item label="拥有权限：" prop="name">
                    <el-select v-model="ruleForm.name" placeholder="请选择拥有的权限" class="w-full">
                        <el-option label="财务" value="shanghai"></el-option>
                        <el-option label="员工" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="绑定手机：" prop="name" class="mb-n">
                    <el-input v-model="ruleForm.url" placeholder="请输入绑定手机号"></el-input>
                    <p class="f12 text-muted">请输入子账号使用的手机号，首次登陆需验证</p>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editModel = false">取 消</el-button>
                <el-button type="primary" @click="editModel = false">创 建</el-button>
              </span>
        </el-dialog>
        <el-dialog title="修改密码" :visible.sync="pwdModel" width="30%">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="94px" class='demo-dynamic'>
                <el-form-item label="登陆密码：" prop="name">
                    <el-input v-model="ruleForm.url" placeholder="请输入6-16位登录密码"></el-input>
                </el-form-item>
                <el-form-item label="确认密码：" prop="name" class="mb-n">
                    <el-input v-model="ruleForm.url" placeholder="请确认密码"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="pwdModel = false">取 消</el-button>
                <el-button type="primary" @click="pwdModel = false">创 建</el-button>
              </span>
        </el-dialog>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
export default {
    data() {
        return {
            addModel: false,
            editModel: false,
            pwdModel: false,

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
            },
            url: "./static/vuetable.json",
            tableJson: {
                "column": [ //行
                    {
                        "type": "text",
                        "label": "套餐",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "手机号",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "账号备注",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "角色",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "在线状态",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "handle",
                        "label": "操作",
                        "align": "center",
                        "width": "",
                        "list": [{
                            "label": "编辑",
                            onClick(tablePage, self, row) {
                                self.editModel = true
                            }
                        }, {
                            "label": "修改密码",
                            onClick(tablePage, self, row) {
                                self.pwdModel = true
                            }
                        }, {
                            "label": "删除",
                            onClick(tablePage, self, row) {
                                self.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                }).then(() => {
                                    self.$message({
                                        type: 'success',
                                        message: '删除成功!'
                                    });
                                })
                            }
                        }]
                    }
                ],
            },

        }
    },
    components: {
        NomalTable
    },
    created() {

    },
    computed: {

    },
    methods: {

    }
}
</script>
<style scoped>
</style>