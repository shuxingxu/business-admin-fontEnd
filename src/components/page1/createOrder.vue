<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">
          <div class="page-main">
            <div class="searchTop demo-input-suffix">
              <el-input style="width:200px" v-model="phoneKey" placeholder="输入顾客手机号"></el-input>
              <el-button type="primary"><i class="el-input__icon el-icon-search"></i>查询</el-button>
            </div>
            <!-- <div class="stepBox">
              <div class="stepOne" :class="{act: actIndex === idx}" @click="actIndex = idx" v-for="(stepName, idx) in steps" :key="'step' + idx"><span>{{idx + 1}}</span>{{stepName}}</div>
            </div> -->
            <el-steps :active="actIndex" simple style="margin-top: 20px;" v-if="$route.name === 'createOrder'">
              <el-step v-for="(stepName, idx) in steps" :key="'step' + idx" :title="stepName"></el-step>
            </el-steps>
          </div>
          
        </div>
        <div class="page-content">
            <div class="page-main">
              <div class="amendStepBox"  v-if="$route.name === 'amendOrder'">
                <el-steps :active="actIndex" align-center>
                  <el-step v-for="(stepName, idx) in amend" :key="'step' + idx" :title="stepName"></el-step>
                </el-steps>
              </div>
              <div class="orderAmended" v-if="amendIndex === 1">
                <h2>订单价格修改申请已提交</h2>
                <p>是否需要修改套餐及服务项目</p>
                <div class="btnsBox">
                  <el-button plain type="primary">不需要</el-button>
                  <el-button type="primary">需要</el-button>
                </div>
              </div>
              <div class="titleLine">
                <p v-html="titles[actIndex]"></p>
                <el-button plain type="primary" @click="nextHandle">下一步</el-button>
              </div>
              <el-row :gutter="12" v-if="actIndex === 0">
                <el-col :span="6" v-for="(good, idx) in goodsList" :key="'good' + idx">
                  <div class="goodOne">
                    <img :src="good.imgUrl" alt="">
                    <p class="tit">{{good.title}}</p>
                    <p class="shop">{{good.shopName}}</p>
                    <p class="price">&yen;{{good.price}}</p>
                  </div>
                </el-col>
              </el-row>
              <div class="standardBox" v-if="actIndex === 1">
                <div v-for="(item, idx) in standard" :key="'standard' + idx" class="itemList" @click="checkHandle(idx)">
                  <i :class="['checkbox', {act: item.checked, cancel: !item.checked && item.systemCheck}]"></i>{{item.content}}
                </div>
                <div class="personTit">人员安排</div>
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
              <div v-if="actIndex === 2" class="formlist">
                <div style="width:400px;margin: 0 auto;">
                  <formlist :formdata="options" @submit="submit"></formlist>
                  <div class="dashBorderBtn" @click="addQishu">+ 添加付款期数</div>
                </div>
              </div>
            </div>
            <rightModel :orderInfo="orderInfo"></rightModel>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import BreadCrumb from "@/components/common/BreadCrumb";
import formlist from "@/components/formlist";
import rightModel from '@/components/page1/rightModel'
const amountType = ["全额支付", "分期支付"];
const number_zh = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
let payform = {
  price: "",
  endTypeId: ""
};
let formOne = [
  {
    name: "name333",
    type: "input",
    label: "一期款",
    rules: [],
    value: ""
  },
  {
    name: "name333",
    type: "selector",
    label: "捷支付款项",
    placeholder: '请选择截止付款的服务项目',
    rules: [],
    options: [
      {
        label: "abc111",
        value: "123123"
      }
    ],
    value: ""
  }
];
export default {
  name: "tabletest",
  data() {
    let qishu = 0;
    return {
      actIndex: 2,
      amendIndex: 1,
      qishu,
      steps: ["选择套餐", "确定服务项目", "选择支付方式"],
      amend: ["商家申请修改订单", "顾客同意订单修改申请", "订单修改成功"],
      titles: [
        "套餐",
        '服务项目<span style="font-size: 14px;margin-left: 10px;">本套餐服务全程一共6步(婚博会混合色摄影类标准10步)</span>',
        "支付方式"
      ],
      phoneKey: "",
      amountType,
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
      options: [
        {
          name: "name",
          type: "text",
          label: "订单原价",
          rules: [],
          value: "&yen;11980.00"
        },
        {
          name: "name",
          type: "single",
          label: "浮动金额",
          rules: [],
          options: [
            {
              label: "加"
            },
            {
              label: "减"
            }
          ],
          value: ""
        },
        {
          name: "name",
          type: "input",
          label: "",
          placeholder: "浮动金额",
          rules: [],
          value: ""
        },
        {
          name: "name",
          type: "selector",
          label: "优惠券",
          placeholder: "全部",
          rules: [],
          options: [
            {
              label: "全部",
              value: "000"
            }
          ],
          value: ""
        },
        {
          name: "aa",
          type: "text",
          label: "APP下单优惠",
          rules: [],
          value: '<span style="color:#FD792C">-&yen;500.00</span>'
        },
        {
          name: "dd",
          type: "text",
          label: "应收",
          rules: [],
          value: '<span style="color:#FD792C">-&yen;11400.00</span>'
        },
        {
          name: "name222",
          type: "single",
          label: "支付方式",
          rules: [],
          options: [
            {
              label: "全额支付"
            },
            {
              label: "分期支付"
            }
          ],
          value: ""
        },
        ...formOne
      ],
      breadcrumb: [
        //面包屑
        {
          name: "订单管理" //名字
        },
        {
          name: "创建订单" //名字
        }
      ],
      goodsList: [
        {
          imgUrl: "/static/img/1.png",
          shopName: "蒙娜丽莎旗舰店",
          title: "死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦",
          price: "9800"
        },
        {
          imgUrl: "/static/img/1.png",
          shopName: "蒙娜丽莎旗舰店",
          title: "死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦",
          price: "9800"
        },
        {
          imgUrl: "/static/img/1.png",
          shopName: "蒙娜丽莎旗舰店",
          title: "死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦",
          price: "9800"
        },
        {
          imgUrl: "/static/img/1.png",
          shopName: "蒙娜丽莎旗舰店",
          title: "死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦",
          price: "9800"
        },
        {
          imgUrl: "/static/img/1.png",
          shopName: "蒙娜丽莎旗舰店",
          title: "死啦地附近冻死了开发商的减肥啦开讲啦可适当减肥啦",
          price: "9800"
        }
      ],
      orderlist: [
        {
          user: {
            name: "夏河",
            userID: "123123",
            phone: "18310101010"
          },
          status: 0,
          imgurl: "/static/images/1.jpg",
          title: "阿萨德六块腹肌爱丽丝看风",
          price: 8800,
          createTime: "2018-06-07 15:00:00",
          remarks: "预约到店"
        }
      ],
      standard: [
        {
          content: "1.确定拍摄时间",
          checked: true,
          systemCheck: true
        },
        {
          content: "2.到点签合同",
          checked: true,
          systemCheck: true
        },
        {
          content: "3.上传合同及相关票据",
          checked: false,
          systemCheck: true
        },
        {
          content: "4.预约拍摄时间及地点",
          checked: false,
          systemCheck: false
        }
      ],
      payList: [
        {
          payform
        }
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
    };
  },
  components: {
    BreadCrumb,
    formlist,
    rightModel
  },
  created() {
  },
  computed: {},
  methods: {
    nextHandle() {
      if (this.actIndex < 2) {
        this.actIndex++;
      }
    },
    checkHandle(idx) {
      let obj = { ...this.standard[idx] };
      obj["checked"] = !obj["checked"];
      this.standard.splice(idx, 1, obj);
    },
    addQishu(){
      console.log(this.qishu)
      this.qishu++;
      let data1 = {...formOne[0]};
      let data2 = {...formOne[1]};
      data1.label = number_zh[this.qishu] + '期款';
      this.options.splice(this.options.length, 0, data1, data2)
    },
    submit(data){
      console.log(data);
    }
  }
};
</script>
<style scoped>
.orderAmended{
  padding: 40px 0;
  width: 300px;
  margin: 0 auto;
  color: #333;
}
.orderAmended h2{
  font-size: 22px;
}
.orderAmended p{
  font-size: 14px;
  color: #666;
  line-height: 30px;
}
.orderAmended .btnsBox{
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.orderAmended .btnsBox button{
  width: 90px;
}
.amendStepBox{
  height: 120px;
  padding: 30px 50px 0;
  box-sizing: border-box;
  background: #eeefff;
}
.dashBorderBtn{
  width: 124px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
  color: #666;
  border: 1px dashed #999;
}
.formlist {
  background: #fff;
  padding: 10px;
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

.personTit {
  line-height: 45px;
  padding: 10px 0 0 5px;
  background: #f8f9fa;
  font-size: 18px;
}
.standardBox {
  background: #fff;
}

.itemList {
  height: 56px;
  line-height: 56px;
  color: #333;
  font-size: 16px;
  padding-left: 200px;
}
.itemList i {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid #999;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 5px;
}
.itemList i.act {
  border-color: #7224d8;
  background: #7224d8;
}
.itemList i.cancel {
  border-color: #666;
  background: #666;
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

.stepBox {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  line-height: 44px;
  background: #eeefff;
  color: #666;
  font-size: 18px;
}
.stepBox span {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  color: #fff;
  background: #666;
  text-align: center;
  border-radius: 8px;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 5px;
}
.stepBox .stepOne {
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
}
.stepBox .stepOne.act {
  background: #7224d8;
  color: #fff;
}
.stepBox .stepOne.act span {
  background: #fff;
  color: #7224d8;
}
</style>