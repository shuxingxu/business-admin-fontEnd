<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">
          <div class="topBtnTit">
            <p>服务项目 <span>本套餐服务全程一共 6 步 （婚博会混合色摄影类标准10步）</span></p>
            <div>
              <el-button type="primary" plain>取消订单</el-button>
              <el-button type="primary" >处理订单</el-button>
            </div>
          </div>
        </div>
        <div class="page-content">
            <div class="page-main">

              <div class="progressPage">
                <div class="tabcont ent">

                  <div class="tabDefault" :class="{payed: tab.payed}" v-for="(tab, idx) in tabs" :key="'tab' + idx">
                    <div class="tabTitle" @click="tab.checked = !tab.checked">{{number_zh[idx]}}、{{tab.tagName}}</div>
                    <div v-show="tab.checked">
                      <div class="noset" v-if="!tab.seted">
                        <p class="f12 text-muted">您尚未对该服务设置服务提醒</p>
                        <router-link :to="{name: 'createOrder'}" class="f16 text-default">去设置服务提醒</router-link>
                      </div>
                      <div class="todoModel" v-if="tab.seted">
                        <div class="oneline">
                          <div class="bt text-muted f14">注意事项：</div>
                          <div class="ct f14">请尽快确定拍摄时间方便为您预约摄影师请尽快确定拍摄时间方便为您预约摄影师</div>
                        </div>
                        <div class="oneline">
                          <div class="bt text-muted f14">注意事项：</div>
                          <div class="ct f14 clearfix">
                            <div class="fl">2018-06-30 19:00:00</div>
                            <div class="border-zise-btn fr">更改时间</div>
                          </div>
                        </div>
                        <div class="oneline between">
                          <div class="bt text-muted f14">人员安排：</div>
                          <div class="ct f14 clearfix">
                            <i class="iconfont icon-dingdan fr"></i>
                          </div>
                        </div>
                        <div class="scrollList">
                          <div class="bigbox clearfix" ref="bigbox">
                            <div class="itemOne fl" v-for="(person, idx) in persons" :key="'person' + idx">
                              <img :src="person.imgUrl" />
                              <p class="f12 text-default">{{person.Title}}</p>
                              <p class="f12 text-muted">{{person.name}}</p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-side">
                <div class="settedBox">
                  <div class="titName">基本信息</div>
                  <div class="miniLine">
                    用户姓名：{{orderInfo.user.name}}
                  </div>
                  <div class="miniLine">
                    手机号码：{{orderInfo.user.phone}}
                  </div>
                  <div class="titName">基本信息</div>
                  <div class="goodOne">
                    <img :src="orderInfo.imgurl" alt="">
                    <div>
                      <p class="tit">{{orderInfo.title}}</p>
                      <p class="price">&yen;{{orderInfo.price}}</p>
                    </div>
                  </div>
                  <div class="titName">订单信息</div>
                  <div class="miniLine">
                      订单时间：2018-05-30 16:30<br>订单编号：ASDFA2323123<br/>服务时间：2018-06-12
                  </div>
                  <div class="titName">人员安排</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from "@/components/common/BreadCrumb";
const number_zh = ['一','二','三','四','五','六','七','八','九','十'];
let tabs = [{
  tagName: "确定拍摄时间",
  seted: true,
  checked: false,
  payed: true
},{
  tagName: "到点签合同",
  seted: false,
  checked: false,
  payed: true
},{
  tagName: "上传合同票据",
  seted: false,
  checked: false,
  payed: true
},{
  tagName: "预约拍照",
  seted: false,
  checked: false,
  payed: false
}];
export default {
  data() {
    return {
      tabs,
      tabact: 1,
      number_zh,
      orderInfo: {
        user: {
          name: "夏河",
          userID: "123123",
          phone: "18310101010"
        },
        status: 0,
        imgurl: "/static/img/1.png",
        title: "阿萨德六块腹肌爱丽丝看风",
        price: 8800,
        createTime: "2018-06-07 15:00:00",
        remarks: "预约到店"
      },
      breadcrumb: [
        //面包屑
        {
          name: "订单管理" //名字
        },
        {
          name: "订单详情" //名字
        },
        {
          name: "服务进度" //名字
        }
      ],
      persons: [
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        },
        {
          name: 'summer',
          Title: '首席化妆师',
          imgUrl: 'static/images/1.jpg'
        }
      ],
    };
  },
  methods: {},
  mounted() {
    this.$refs.bigbox && this.$refs.bigbox.forEach(element => {
      element.style.width = 85 * this.persons.length + 'px';
    })
  },
  components: { BreadCrumb}
};
</script>
<style lang="less" rel="stylesheet/less" scoped>

.topBtnTit{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background: #fcf9ff;
  width: 100%;
  padding: 10px 0 10px 10px;
  line-height: 32px;
}
.topBtnTit p{
  color: #333;
  font-size: 22px;
}
.topBtnTit p span{
  font-size: 14px;
}
.settedBox{
  font-size: 12px;
  color: #666;
  padding: 10px;
}
.settedBox .titName{
  font-size: 14px;
  color: #333;
  line-height: 48px;
}
.settedBox .miniLine{
  line-height: 30px;
}
.settedBox .goodOne{
  display: flex;
  width: 220px;
  padding: 10px;
  margin-left: -10px;
  background: #f8f9fa;
  box-sizing: border-box;
}
.settedBox .goodOne img{
  width: 90px;
  height: 80px;
  flex: none;
  margin-right: 12px;
  border-radius: 6px;
}
.progressPage{
  padding: 10px;
  background: #fff;
}
.toptext{
  height: 40px;
  line-height: 40px;
}
.tabDefault{
  padding: 10px 0 10px 16px;
  position: relative;
  border-left: 2px solid #7224d8;
}
.tabDefault:after{
  content: ' ';
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 7px;
  position: absolute;
  left: -8px;
  top: 15px;
  border: 1px solid #999;
}
.tabDefault.payed:after{
  background: #7224d8;
  border-color: #7224d8;
}
.tabcont{
  width: 380px;
  margin: 0 auto;
}
</style>