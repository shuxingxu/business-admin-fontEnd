<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>经营管理</el-breadcrumb-item>
                    <el-breadcrumb-item>收入管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="page-header-actions">
            </div>
        </div>
        <div class="page-content">
            <div class="page-main">
                <div class="panel">
                    <div class="panel-body">
                        <div class="text-justify">
                            <div><span class="text-info">可提现余额:</span><span class="f26 text-purple fwb ml-xs mr-sm">￥18800.00</span><small class="text-muted">提现后3-5个工作日到账</small></div>
                            <div><el-button type="primary">提&nbsp;&nbsp;现</el-button><el-button type="primary" plain  @click="$router.push({ path: '/presentRecord' })">提现记录</el-button></div>
                        </div>
                    </div>
                </div>
                <table-search :searchs="searchs"></table-search>
                <nomal-table :table-json="tableJson" :url="url"></nomal-table>
            </div>
        </div>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
import TableSearch from '@/components/common/TableSearch'
export default {
    data: function() {
        return {
            searchs: {
                "list": [{
                        "type": "input-date", //输入日期
                        "label": "时间",
                        "name": "date",
                        "value": "",

                    },
                    {
                        "type": "input-text", //输入文本
                        "label": "顾客信息",
                        "name": "user",
                        "value": "",
                        "placeholder": "请输入顾客名/手机号",
                    }
                ],
                "btn": {
                    "iconClass": "el-icon-search",
                    "label": "搜索"
                }
            },
            url: "./static/vuetable.json",
            tableJson: {
                "column": [ //行
                    {
                        "type": "text",
                        "label": "时间",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "流水号",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "顾客信息",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "订单号",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "收款（元）",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    }
                ],
            }
        }
    },
    components: {
        NomalTable,
        TableSearch
    },
    methods: {},
    mounted() {

    },
    computed: {}
}
</script>
<style lang='less' scoped>
</style>