<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>经营管理</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/income' }">收入管理</el-breadcrumb-item>
                    <el-breadcrumb-item>提现记录</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="page-header-actions">
            </div>
        </div>
        <div class="page-content">
            <div class="page-main">
                <nomal-table :table-json="tableJson" :url="url"></nomal-table>
            </div>
        </div>
    </div>
</template>
<script>
import NomalTable from '@/components/common/NomalTable'
export default {
    data: function() {
        return {
            url: "./static/vuetable.json",
            tableJson: {
                "column": [ //行
                    {
                        "type": "text",
                        "label": "申请提现时间",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "提现金额（元）",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "提现状态",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "label": "到账时间",
                        "prop": "name",
                        "width": "",
                        "align": "center",
                    }
                ],
            }
        }
    },
    components: {
        NomalTable
    },
    methods: {},
    mounted() {

    },
    computed: {}
}
</script>
<style lang='less' scoped>
</style>