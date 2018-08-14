<template>
<div class="page">
    <div class="page-header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="page-content">
        <div class="page-main">
            <nomal-table :table-json="tableJson" :url="url">
                <div class="sub-heading">
                    <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title" style="font-size:12px">当您设置了到店礼后，会在您的客户端商家主页中醒目的位置展示您填写的到店礼，优质的到店礼可以大幅提高用户的联系和到店率哦！</span></h3>
                    <div class="sub-actions">
                        <el-button icon="el-icon-plus" size="mini" type="primary" @click="dialogVisible=true">添加</el-button>
                    </div>
                </div>
            </nomal-table>
            <el-dialog
            title="添加到店礼"
            :visible.sync="dialogVisible"
            width="390px"
            :before-close="handleClose">
            <span>优质的到店礼可以大幅度提高用户的联系和到店率哦</span>
            <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4}"
            placeholder="请输入内容"
            v-model="textarea">
            </el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false;textarea=''">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">提交审核</el-button>
            </span>
            </el-dialog>            
        </div>
    </div>
</div>
</template>

<script>
    import NomalTable from '@/components/common/NomalTable'

    export default {
        data() {
            return {
                textarea:'',
                dialogVisible:false,
                url: "",
                tableJson: {
                    "column": [ //行
                        {
                            "type": "text",
                            "align": "center",
                            "label": "到店礼",
                            "prop": "name",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "状态",
                            "prop": "address",
                            "width": "",
                            
                        },
                        {
                            "type": "switch",
                            "align": "center",
                            "label": "开启/关闭状态",
                            "prop": "address",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "更新时间",
                            "prop": "date",
                            "width": "",
                            
                        },
                        {
                            "type": "handle",
                            "label":"操作",
                            "align": "center",
                            "width": "200",
                            "list": [
                                // {
                                //     "label":"查看",
                                //     "type":"detail",
                                //     "url":"/care/templateInfo", //优先执行url

                                // },
                                {
                                    "label":"编辑",
                                    "type":"edit",
                                    "url":"/care/templateInfo", //优先执行url

                                },
                                {
                                    "label":"删除",
                                    "type":"delete"
                                },
                            ]
                        }
                    ],
                }



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
            addgift(){
                
            }

        }
    }

</script>

<style scoped>

</style>
