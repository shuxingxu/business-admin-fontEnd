import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Index.vue'], resolve),
                    meta: { title: '核心数据' }
                },
                {
                    //经营管理--订单管理
                    path: '/orderList',
                    component: resolve => require(['../components/page1/orderList.vue'], resolve),
                    meta: { title: '经营管理--订单管理' }
                },
                {
                    //经营管理--创建订单
                    name: 'createOrder',
                    path: '/createOrder',
                    component: resolve => require(['../components/page1/createOrder.vue'], resolve),
                    meta: { title: '经营管理--创建订单' }
                },
                {
                    //经营管理--订单修改
                    name: 'amendOrder',
                    path: '/amendOrder',
                    component: resolve => require(['../components/page1/createOrder.vue'], resolve),
                    meta: { title: '经营管理--订单修改' }
                },
                {
                    //经营管理--订单详情
                    path: '/orderInfo',
                    component: resolve => require(['../components/page1/orderInfo.vue'], resolve),
                    meta: { title: '经营管理--订单详情' }
                },
                {
                    //经营管理--服务进度
                    path: '/progress',
                    component: resolve => require(['../components/page1/progress.vue'], resolve),
                    meta: { title: '经营管理--服务进度' }
                },
                {
                    path: '/shop/pack',
                    component: resolve => require(['../components/page/shop/pack.vue'], resolve),
                    meta: { title: '套餐管理' }
                },
                {
                    path: '/shop/addpack',
                    component: resolve => require(['../components/page/shop/addpack.vue'], resolve),
                    meta: { title: '添加套餐' }
                },
                {
                    path: '/shop/details',
                    component: resolve => require(['../components/page/shop/details.vue'], resolve),
                    meta: { title: '查看套餐' }
                },
                {
                    path: '/shop/case',
                    component: resolve => require(['../components/page/shop/case.vue'], resolve),
                    meta: { title: '案例管理' }
                },
                {
                    path: '/shop/addcase',
                    component: resolve => require(['../components/page/shop/addcase.vue'], resolve),
                    meta: { title: '添加案例' }
                },
                {
                    path: '/shop/info',
                    component: resolve => require(['../components/page/shop/info.vue'], resolve),
                    meta: { title: '店铺信息' }
                },
                {
                    path: '/shop/notice',
                    component: resolve => require(['../components/page/shop/notice.vue'], resolve),
                    meta: { title: '店铺公告' }
                },
                {
                    path: '/shop/fitment',
                    component: resolve => require(['../components/page/shop/fitment.vue'], resolve),
                    meta: { title: '店铺装修' }
                },
                {
                    //商家管理 营销-到店礼
                    path:'/camegift',
                    component:resolve => require(['@/components/page/marketcare/camegift.vue'],resolve),
                    meta:{title:'到店礼'}
                },
                {
                    //商家管理 营销-app下单礼
                    path:'/appgift',
                    component:resolve => require(['@/components/page/marketcare/appgift.vue'],resolve),
                    meta:{title:'APP下单优惠'}
                },
                {
                    //商家管理 营销-推荐橱窗
                    path:'/recommend',
                    component:resolve => require(['@/components/page/marketcare/recommend.vue'],resolve),
                    meta:{title:'推荐橱窗'}
                },
                {
                    //商家管理 营销-活动管理
                    path:'/actmanage',
                    component:resolve => require(['@/components/page/marketcare/actmanage.vue'],resolve),
                    meta:{title:'活动管理'}
                },
                {
                    //商家管理 消息
                    path:'/sms',
                    component:resolve => require(['@/components/page/message/sms.vue'],resolve),
                    meta:{title:'消息'}
                },
                {
                    path: '/subscribe',
                    component: resolve => require(['../components/page/subscribe.vue'], resolve),
                    meta:{title:'预约管理'}
                },
                {
                    path: '/income',
                    component: resolve => require(['../components/page/income.vue'], resolve),
                    meta:{title:'收入管理'}
                },
                {
                    path: '/presentRecord',
                    component: resolve => require(['../components/page/presentRecord.vue'], resolve),
                    meta:{title:'提现记录'}
                },
                {
                    path: '/analysis',
                    component: resolve => require(['../components/page/analysis.vue'], resolve),
                    meta:{title:'销售分析'}
                },
                {
                    path: '/setuser',
                    component: resolve => require(['../components/page/setuser.vue'], resolve),
                    meta:{title:'员工管理'}
                },
                {
                    path: '/set',
                    component: resolve => require(['../components/page/set.vue'], resolve),
                    meta:{title:'设置'}
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
