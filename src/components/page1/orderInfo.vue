<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">
          <div class="topBtnTit">
            <p>订单状态：服务中</p>
            <div>
              <el-button type="primary" plain>取消订单</el-button>
              <el-button type="primary" >处理订单</el-button>
            </div>
          </div>
        </div>
        <div class="page-content">
            <div class="page-main">
              <div class="orderState">
                <div class="titName">
                  服务项目<span>查看服务进度 ></span>
                </div>
                <el-steps :active="active" align-center>
                  <el-step v-for="(step, idx) in tabs" :key="'step' + idx" :title="step.tagName"></el-step>
                </el-steps>
                <div class="dpBorder" v-for="(dp, idx) in progress" v-if="active === idx" :key="'dp' + idx">
                  <div class="topArrow">
                  </div>
                  <div v-if="!tabs[idx]['seted']" class="noseted">
                    <h2>您尚未对该服务设置服务提醒</h2>
                    <h3>（服务提醒：您可以将该项目服务的注意事项及人员安排等信息告知顾客，并设置提醒时间）</h3>
                    <div class="centerText">
                      <router-link class="linkstyle" :to="{name: 'serveceTodo'}">去设置服务提醒 ></router-link>
                    </div>
                  </div>
                  <div v-if="tabs[idx]['seted']" class="seted">
                    <div class="textLine">
                      <div class="leftText">提醒时间：</div>
                      <div class="rightText">2016-20-2</div>
                    </div>
                    <div class="textLine">
                      <div class="leftText">注意事项：</div>
                      <div class="rightText">
                        1、asdlfkajlj<br>
                        2、阿斯兰的咖啡机埃里克森的
                      </div>
                    </div>
                    <div class="textLine">
                      <div class="leftText">人员安排：</div>
                      <div class="rightText">
                        
                        <div class="scrollList">
                          <div class="bigbox clearfix" ref="bigbox">
                            <div class="itemOne" v-for="(person, idx) in persons" :key="'person' + idx">
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

              <div class="payState">
                <div class="titName">
                  支付状态
                </div>
                <div class="paidBox">
                  <div class="paidDp">
                    <div class="paidInfoone">
                      <p class="lefttext">
                        浮动金额：
                      </p>
                      <p class="righttext">
                        +&yen;2000.00
                      </p>
                    </div>
                  </div>
                  <div class="paidPg">
                    <div class="paidlistBox borB">
                      <div class="paidOne f16" :class="{payed: paid.ispayed}" v-for="(paid, idx) in paidlist" :key="'paid' + idx">
                        <div>{{number_zh[idx] + '期款'}}&yen;{{paid.price}}</br><span class="text-muted">{{paid.ispayed ? paid.payDate : paid.event}}</span></div>
                        <div v-if="paid.ispayed" class="text-info">已收款(APP付款)</div>
                        <div v-if="!paid.ispayed" class="zise-btn">待收款</div>
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
        <div class="page-content">
          <div class="page-main">
            <div class="pingjia">
              <div class="titName">顾客评价</div>
              <p>刚拍完婚纱照，化妆师是雪莲美女，温柔可亲，心灵手巧，非常赞！摄影师是何婷老师，很幽默，拍摄水准也非常高，拍摄过程很愉快！放几张给大家参考。</p>
              <div class="imglist">
                <img src="/static/img/1.png" alt="">
                <img src="/static/img/1.png" alt="">
                <img src="/static/img/1.png" alt="">
                <img src="/static/img/1.png" alt="">
              </div>
            </div>
            <div class="pingjia borB">
              <h2>此评价是否为有值评价？<el-button>否</el-button><el-button>是</el-button></h2>
              <h3>如果确认为有值评价，顾客可获得600元平台奖励</h3>
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
  seted: false
},{
  tagName: "到点签合同",
  seted: true
},{
  tagName: "上传合同票据"
},{
  tagName: "预约拍照"
},{
  tagName: "上传合同票据"
},{
  tagName: "预约拍照"
},{
  tagName: "上传合同票据"
},{
  tagName: "预约拍照"
}];
export default {
  name: "tabletest",
  data() {
    return {
      active: 1,
      tabs,
      number_zh,
      paidlist: [
        {
          ispayed: true,
          price: 1600,
          payDate: '2018-03-03 13:00:00',
          event: '（截至到开始拍摄之前）'
        },
        {
          ispayed: false,
          price: 1600,
          payDate: '2018-03-03 13:00:00',
          event: '（截至到开始拍摄之前）'
        },
        {
          ispayed: false,
          price: 1600,
          payDate: '2018-03-03 13:00:00',
          event: '（截至到开始拍摄之前）'
        }
      ],
      progress: [
        {},
        {},
        {}
      ],
      persons: [
        {
          name: "summer",
          Title: "首席化妆师",
          imgUrl: "static/img/1.png"
        },
        {
          name: "summer",
          Title: "首席化妆师",
          imgUrl: "static/img/1.png"
        },
        {
          name: "summer",
          Title: "首席化妆师",
          imgUrl: "static/img/1.png"
        },
        {
          name: "summer",
          Title: "首席化妆师",
          imgUrl: "static/img/1.png"
        }
      ],
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
        }
      ],
    };
  },
  components: {
    BreadCrumb
  },
  created() {},
  computed: {},
  methods: {
  }
};
</script>
<style scoped>
.borB{
  border-top: 1px solid #efefef;
}
.pingjia{
  padding: 10px;
  background: #fff;
  color: #666;
}
.pingjia p{
  font-size: 14px;
  line-height: 20px;
}
.pingjia .imglist{
  margin-top: 10px;
  
}
.pingjia h2{
  font-size: 18px;
  color: #333;
  line-height: 60px;
}
.pingjia h3{
  color: #7224d8;
  font-size:16px;
}
.scrollList {
  width: 100%;
  overflow-x: scroll;
  line-height: 18px;
  padding: 20px;
}
.scrollList .itemOne {
  float: left;
  width: 65px;
  text-align: center;
  margin-right: 20px;
}
.scrollList .itemOne:last-child {
  margin-right: 0;
}
.scrollList .itemOne img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 0 auto;
}
.seted{
  padding: 10px 60px;
  font-size: 12px;
  line-height: 28px;
}
.seted .textLine{
  display: flex;

}
.paidBox{
  display: flex;
  justify-content: space-around;
}
.paidDp .paidInfoone{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #666;
}
.paidDp .lefttext{
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.paidlistBox .paidOne{
  display: flex;
  justify-content: space-between;
  padding: 1px 0 10px 16px;
  border-left: 3px solid #e6e6e6;
  position: relative;
}
.paidlistBox .paidOne.payed{
  border-color: #7224d8;
}
.paidlistBox .paidOne:after{
  content: ' ';
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 7px;
  position: absolute;
  left: -8px;
  top: 6px;
  border: 1px solid #999;
}
.paidlistBox .paidOne.payed:after{
  background: #7224d8;
  border-color: #7224d8;
}

.payState{
  margin-top: 50px;
  background: #fff;
  padding: 10px;
}
.noseted{
  padding: 32px 120px;
}
.noseted .centerText{
  text-align: center;
}
.noseted .centerText .linkstyle{
  text-align: center;
  font-size: 14px;
}
.noseted h2{
  font-size: 12px;
  color: #333;
  line-height: 24px;
}
.noseted h3{
  font-size: 12px;
  color: #666;
  line-height: 66px;
}
.dpBorder{
  margin-top: 20px;
  border: 1px solid #e1caff;
  background: #fcf9ff;
}

.orderState{
  padding: 10px;
  background: #fff;
  margin-bottom: -20px;
}
.titName{
  font-size: 18px;
  line-height: 40px;
  margin-bottom: 20px;
}
.orderState .titName span{
  color: #7224d8;
  font-size: 12px;
  cursor: pointer;
  margin-left: 10px;
}
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
  font-size: 22px;
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
.goodOne {
  background: #fff;
  margin-bottom: 20px;
}
.goodOne img {
  width: 100%;
}
.goodOne p.tit {
  color: #333;
  font-size: 12px;
}
.goodOne p.shop {
  font-size: 10px;
  color: #666;
}
.goodOne p.price {
  font-size: 16px;
  color: #333;
  line-height: 44px;
  text-align: center;
}
.titleLine {
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 10px 5px;
  line-height: 30px;
}
.titleLine p {
  font-size: 18px;
  color: #333;
}

</style>