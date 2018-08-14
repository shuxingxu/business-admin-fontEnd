<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
           unique-opened router >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                breadcrumb:[],
                items: [
                    {
                        icon: 'iconfont icon-shouye',
                        index: '/',
                        title: '首页'
                    },
                    {
                        icon: 'iconfont icon-guanli',
                        index: 'index2',
                        title: '经营管理',
                        subs: [
                            {
                                index: '/orderList',
                                title: '订单管理'
                            },{
                                index: '/subscribe',
                                title: '预约管理'
                            },
                            {
                                index: '/income',
                                title: '收入管理'
                            },{
                                index: '/analysis',
                                title: '销售分析'
                            }
                        ]
                    },
                    {
                        icon: 'iconfont icon-shangjiacopy',
                        index: '/business',
                        title: '店铺管理',
                        subs: [
                            {
                                index: '/shop/pack',
                                title: '套餐管理'
                            },
                            {
                                index: '/shop/case',
                                title: '案例管理'
                            },
                            {
                                index: '/shop/info',
                                title: '店铺信息'
                            },
                            {
                                index: '/shop/notice',
                                title: '店铺公告'
                            },
                            {
                                index: '/shop/fitment',
                                title: '店铺装修'
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-yingxiaocopy',
                        index: '/servermanage',
                        title: '营销管理',
                        subs:[
                            {
                                index: '/camegift',
                                title: '到店礼'
                            },
                            {
                                index: '/appgift',
                                title: 'APP下单优惠'
                            },
                            {
                                index: '/recommend',
                                title: '推荐橱窗'
                            },
                            {
                                index: '/actmanage',
                                title: '活动管理'
                            }
                        ]
                    },
                    {
                        icon: 'iconfont icon-xiaoxicopy',
                        index: '/sms',
                        title: '消息'
                    },
                    {
                        icon: 'iconfont icon-yuangongguanli',
                        index: '/setuser',
                        title: '员工管理'
                    },
                    {
                        icon: 'iconfont icon-shezhicopy',
                        index: '/set',
                        title: '设置'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path;
            }
        },
        created(){
            let that = this;
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
            // _.forEach(this.items,function(v,k){
            //     if(_.find(v.subs,['index',that.$route.path])){
            //         that.breadcrumb = _.concat(_.omit(that.items[k],'subs'),_.find(v.subs,['index',that.$route.path]),{'title':that.$route.meta.title})
            //     }
            // })
        },
        methods:{
        }
    }
</script>

<style>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 60px;
        bottom:0;
        overflow-y: auto;
        overflow-x: hidden;
        width: 220px
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 220px;
    }
    .sidebar > ul {
        height:100%;
    }
    .sidebar .sidebar-el-menu{
        box-sizing: border-box;
        border:none;
    }
</style>
