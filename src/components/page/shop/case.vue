<template>
    <div class="marketGame page">
        <div class="page-header">
            <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
        </div>
        <div class="page-content">
            <div class="width100"> 
                <div class="taps-box">
                    <table-tabs :page-tabs="menus"></table-tabs>
                    <div class="right-btn">
                        <router-link to="/shop/addcase"><el-button type="primary" size="mini">添加案例</el-button></router-link>
                        <el-button plain size="mini" class="reset">案例排序</el-button>
                    </div>
                </div>
                <nomal-table :table-json="tableJson" :url="url"></nomal-table>
            </div>
        </div>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
import BreadCrumb from '@/components/common/BreadCrumb'
import TableTabs from '@/components/common/TableTabs'

export default {
    name: 'tabletest',
    data() {
        return {
            breadcrumb: [ //面包屑
                {
                    "name": "店铺管理", //名字
                },
                {
                    "name": "案例管理", //名字
                }
            ],
            menus: {
                "type": "menu",
                "list": [{
                        "label": "全部",
                        "index": "/shop/case?tap=0",
                    },
                    {
                        "label": "已上架",
                        "index": "/shop/case?tap=1",
                    },
                    {
                        "label": "审核中",
                        "index": "/shop/case?tap=2",
                    },
                    {
                        "label": "审核未通过",
                        "index": "/shop/case?tap=3",
                    },
                    {
                        "label": "已下架",
                        "index": "/shop/case?tap=4",
                    }
                ],
                "activeIndex": "/shop/case?tap=0" //初始值
            },
            url: "/api/admin/shopproduct/index?shop_id=",
            tableJson: {
                // cellstyle: function({row, column, rowIndex, columnIndex}){
                //     if(columnIndex == 1){
                //         return {"vertical-align":"top"}
                //     }
                // },
                "column": [ //行
                    {
                        "type": "text",
                        "label": "案例",
                        "prop": "address",
                        "minWidth": "300",
                        "align": "center",
                        formatter(row) {
                            let str = "<div style='display:flex; background-color#fff;'>";
                            str += "<div style='width:80px;height:80px;padding:8px; flex-shrink:0;'><img style='width:100%; height:100%;' src=" + "/static/img/img.jpg" + "></div>";
                            str += "<div style='flex-grow:1; text-align:left; font-size:14px; padding-top:10px;line-height:60px;'><p>" + row.address + "</p></div>"

                            str += "</div>";
                            return str;
                        }

                    },
                    {
                        "type": "text",
                        "label": "收藏数",
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
                        "minWidth": "200",
                        "list": [
                            {
                                "label": "查看",
                                "type": "detail",
                                "url":"/shop/details", 
                                onClick(tablePage, self, row) {
                                },
                            },
                            {
                                "label": "编辑",
                                "type": "detail",
                                "url":"/shop/addcase", 
                                onClick(tablePage, self, row) {
                                },
                            },
                            {
                                "label": "下架",
                                "type": "detail",
                                // "url":"/caseDetails", 
                                onClick(tablePage, self, row) {
                                },
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
        TableTabs
    },
    created() {


    },
    computed: {

    },
    methods: {

    }
}
</script>
<style scoped lang='less'>
.taps-box{
    position: relative;
}
.taps-box .right-btn{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
}
.reset{
    color: #7224d8;
    border-color:#7224d8;
    margin:0 10px 0 20px;
}
.reset:hover{
    background-color: rgba(197,164,239,0.2);
}

</style>