<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>核心数据</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="page-header-actions">
            </div>
        </div>
        <div class="page-content">
            <div class="page-main">
                <data-display :data='data' :progress='true'></data-display>
                <data-display :data='data' :progress='true'></data-display>
                <el-row :gutter=20>
                    <el-col :span=8>
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="panel-title">预约</h3>
                            </div>
                            <div class="panel-body text-center">
                                <el-row :gutter=10 class="space-sm">
                                    <el-col :span=12>
                                        <p class="f24 mb-sm">17</p>
                                        <p class="f14 text-info">待处理预约</p>
                                    </el-col>
                                    <el-col :span=12>
                                        <p class="f24 mb-sm">17</p>
                                        <p class="f14 text-info">待处理预约</p>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span=8>
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="panel-title">预约</h3>
                            </div>
                            <div class="panel-body text-center">
                                <el-row :gutter=10 class="space-sm">
                                    <el-col :span=12>
                                        <p class="f24 mb-sm">17</p>
                                        <p class="f14 text-info">待处理预约</p>
                                    </el-col>
                                    <el-col :span=12>
                                        <p class="f24 mb-sm">17</p>
                                        <p class="f14 text-info">待处理预约</p>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span=8>
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="panel-title">预约</h3>
                            </div>
                            <div class="panel-body text-center">
                                <el-row :gutter=10 class="space-sm">
                                    <el-col :span=12>
                                        <p class="f24 mb-sm">17</p>
                                        <p class="f14 text-info">待处理预约</p>
                                    </el-col>
                                    <el-col :span=12>
                                        <p class="f24 mb-sm">17</p>
                                        <p class="f14 text-info">待处理预约</p>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <!-- 常用功能部分 -->
                <div class="sub-heading">
                    <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title">常用功能</span></h3>
                    <div class="sub-actions"></div>
                </div>
                <div class="commonusebtn">
                    <div class="fn-col" style="background:#1660FD url('/static/img/copy1.png') no-repeat right bottom">
                        <img src="/static/img/fn_icon1.png" width="52">
                        <span>{{'分公司'}}</span>
                    </div>
                    <div class="fn-col" style="background:#BD10E0 url('/static/img/copy2.png') no-repeat right bottom">
                        <img src="/static/img/fn_icon2.png" width="52">
                        <span>{{'广告位'}}</span>
                    </div>
                    <div class="fn-col" style="background:#FC507A url('/static/img/copy3.png') no-repeat right bottom">
                        <img src="/static/img/fn_icon3.png" width="52">
                        <span>{{'客服'}}</span>
                    </div>
                    <div class="fn-col" style="background:#9164F6 url('/static/img/copy4.png') no-repeat right bottom">
                        <img src="/static/img/fn_icon4.png" width="52">
                        <span>{{'优惠券模板'}}</span>
                    </div>
                    <div class="fn-col" style="background:#6476F6 url('/static/img/copy5.png') no-repeat right bottom">
                        <img src="/static/img/fn_icon5.png" width="52">
                        <span>{{'添加常用功能'}}</span>
                    </div>
                </div>
            </div>
            <div class="page-side">
                <div class="panel">
                    <div class="panel-heading">
                        <h3 class="panel-title">管理员权限页面</h3>
                    </div>
                    <div class="panel-body">
                        <p class="text-info f14">只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面，重新用管理员账号登录才有权限。</p>
                        <p class="text-info f14">想尝试一下，请
                            <router-link to="/login" class="logout">退出登录</router-link>，随便输入个账号名，再进来试试看。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import DataDisplay from '@/components/common/DataDisplay.vue'
export default {
    data: function() {
        return {
            charttype: 'newuser',
            getdaynum: 30,
            data: [{
                    title: '今日注册人数（人）',
                    num: 600,
                    label: '总会员1990人',
                    lefttitle: '昨日新增会员数（人）',
                    lfetnum: 65,
                    righttitle: '环比新增会员数',
                    rightnum: 70,
                },
                {
                    title: '今日销售额（元）',
                    num: 19400,
                    label: '总销售额 65,725 万元',
                    lefttitle: '昨日销售额（元）',
                    lfetnum: 6555,
                    righttitle: '环比销售额',
                    rightnum: 70,
                }
            ]
        }
    },
    components: {
        DataDisplay
    },
    methods: {},
    mounted() {

    },
    computed: {}
}
</script>
<style lang='less' scoped>
.fn-col {
    padding: 16px 10px;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    img {
        // vertical-align: middle;
        // margin-right: 10px;
        position: absolute;
    }
    span {
        line-height: 52px;
        display: block;
        text-align: center;
        padding-left: 52px;
    }
    &:hover {
        opacity: 0.9;
    }
}

.commonusebtn {
    display: flex;
    div {
        flex: 1;
        margin-right: 20px;
    }
    div:nth-last-child(1) {
        margin-right: 0;
    }
}
</style>