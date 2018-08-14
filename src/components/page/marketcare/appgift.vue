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
                        <el-button icon="el-icon-plus" size="mini" type="primary" @click="dialogVisible=true">添加优惠券</el-button>
                    </div>
                </div>
            </nomal-table>
            <el-dialog
            title="添加到店礼"
            :visible.sync="dialogVisible"
            width="860px"
            :before-close="handleClose">
            <div style="display:flex">
                <div style="margin-right:30px">
                    <el-form :label-position="'right'" label-width="80px" :model="formLabelAlign">
                        <el-form-item  label="金额">
                            <el-input v-model="formLabelAlign.price1">
                                <template slot="prepend">满</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="formLabelAlign.price2">
                                <template slot="prepend">减</template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="有效期">
                            <el-date-picker
                            v-model="formLabelAlign.value"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions2"
                            @change="pickerchange">
                            </el-date-picker>
                        </el-form-item>
                    </el-form>
                </div>
                <div>
                    <h4>示例：</h4>
                    <img src="" alt="">
                </div>
            </div>
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
                formLabelAlign:{
                    price1:'',
                    price2:'',
                    value:''
                },
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
                },
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                        }
                    }]
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
            addgift(){
                
            },
            pickerchange(){
                console.log('时间',this.value)
            },
            handleClose(){}

        }
    }

</script>

<style scoped>

</style>
