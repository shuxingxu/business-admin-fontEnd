<template>
    <div class="page">
        <div class="page-header">
            <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
        </div>
        <div class="page-content">
            <div class="width100"> 
                <div class="taps-box">
                    <p class="public-notice f14 text-info">当您设置了店铺公告后，会在您的客户端商家主页中醒目的位置展示您填写的公告信息，您可以自由填写活动优惠等信息！</p>
                    <div class="right-btn">
                        <el-button type="primary" size="mini" @click="show">发布公告</el-button>
                    </div>
                </div>
                <nomal-table :table-json="tableJson" :url="url"></nomal-table>
            </div>
        </div>

        <el-dialog
          title="店铺公告"
          :visible.sync="dialogVisible"
          width="500px">
          <div class="notice-input">
                <p class="f12 text-purple tips">*请勿发布电话号、微信号，公告将在审核通过后显示</p>
                <el-input
                    type="textarea"
                    rows="6"
                    placeholder="预约到店即送扫地机器人"
                    v-model="noticeVal">
                </el-input>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">提交审核</el-button>
          </span>
        </el-dialog>

    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
import BreadCrumb from '@/components/common/BreadCrumb'

export default {
    name: 'shopNotice',
    data() {
        return {
            dialogVisible: false,
            noticeVal: "",
            breadcrumb: [ //面包屑
                {
                    "name": "店铺管理", //名字
                },
                {
                    "name": "案例管理", //名字
                }
            ],
            url: "/api/admin/shopproduct/index?shop_id=",
            tableJson: {
                "column": [ //行
                    {
                        "type": "text",
                        "label": "公告信息",
                        "prop": "address",
                        "minWidth": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "状态",
                        "prop": "name",
                        "align": "center",

                    },
                    {
                        "type": "text",
                        "label": "上架时间",
                        "prop": "date",
                        "align": "center",

                    },
                    {
                        "type": "handle",
                        "label": "操作",
                        "align": "center",
                        "list": [
                            {
                                "label": "编辑",
                                "type": "detail",
                                // "url":"/caseDetails", 
                                onClick(tablePage, self, row) {
                                    self.show(row.id)
                                },
                            },
                            {
                                "label": "删除",
                                "type": "delete",
                                "tips": "注：公告删除需通过运营审核才能删除成功，您可在审核管理里查看所有审核进度。审核时间为1到2个工作日，在审核结束后，我们将通知您，请注意接收通知",
                                "tipsTitle": "确定提交公告删除申请？",
                                "deleteBtn":"确认删除",
                            },
                        ]
                    }
                ],
            },

        }
    },
    components: {
        NomalTable,
        BreadCrumb,
    },
    created() {


    },
    computed: {

    },
    methods: {
        show(id){
            this.dialogVisible = true;
        },
        publicNotice(id){

        },

    }
}
</script>
<style scoped lang='less'>
.taps-box{
    position: relative;
}
.taps-box .right-btn{
    position: absolute;
    right: 40px;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
}
.public-notice{
    height: 57px;
    line-height: 57px;
    background-color: #FBFBFF;
    padding-left: 20px;
}
.notice-input .tips{
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
}
</style>