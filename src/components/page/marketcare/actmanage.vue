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
                <table-search :searchs="searchs"></table-search>
            </nomal-table>            
        </div>

    </div>
</div>
</template>

<script>
    import NomalTable from '@/components/common/NomalTable'
    import TableSearch from '@/components/common/TableSearch'
    export default {
        data() {
            return {
                url: "",
                searchs:{
                    "list": [
                        {
                            "type": "input-text",  //输入文本
                            "label": "展会名称",
                            "name": "shop_name",
                            "value": "",
                            "placeholder": "请输入商家名称",
                        },
                        {
                            "type": "input-select",  //选择器
                            "label": "展会城市",
                            "name": "company_name",
                            "value": "all",
                            "url":'/api/admin/shop/index',
                        },
                        {
                            "type": "input-select",  //选择器
                            "label": "状态",
                            "name": "company_name",
                            "value": "all",
                            "url":'/api/admin/shop/index',
                        }
                    ]
                },
                tableJson: {
                    "column": [ //行
                        {
                            "type": "text",
                            "align": "center",
                            "label": "参加展会",
                            "prop": "name",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "展会城市",
                            "prop": "address",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "展会地址",
                            "prop": "address",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "展会时间",
                            "prop": "date",
                            "width": "",
                            
                        },
                        {
                            "type": "text",
                            "align": "center",
                            "label": "状态",
                            "prop": "date",
                            "width": "",
                            
                        },
                        {
                            "type": "handle",
                            "label":"操作",
                            "align": "center",
                            "width": "200",
                            "list": [
                                {
                                    "label":"查看活动",
                                    "type":"detail",
                                    "url":"/care/templateInfo", //优先执行url

                                },
                                {
                                    "label":"展会详情",
                                    "type":"detail",
                                    "url":"/care/templateInfo", //优先执行url

                                },
                                // {
                                //     "label":"编辑",
                                //     "type":"edit",
                                //     "url":"/care/templateInfo", //优先执行url

                                // },
                                // {
                                //     "label":"删除",
                                //     "type":"delete"
                                // },
                            ]
                        }
                    ],
                }



            }
        },
        components: {
            NomalTable,
            TableSearch
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
