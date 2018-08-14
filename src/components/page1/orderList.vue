<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
            </div>
        </div>
        <div class="page-content">
            
            <nomal-table :table-json="tableJson" :url="url">
                <table-search :searchs="searchs"></table-search>
                <div class="sub-heading">
                    <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title">数据列表</span></h3>
                    <div class="sub-actions">
                        <el-button icon="el-icon-plus" size="mini" type="primary" @click="dialogFormVisible = true">创建订单</el-button>
                    </div>
                    
                </div>
            </nomal-table>
        </div>
        <el-dialog title="创建订单" :visible.sync="dialogFormVisible">
            <div class="contcenter">
            <el-form :model="form">
                <el-form-item label="">
                <el-input v-model="form.name" placeholder="输入顾客手机号" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="$router.push('/createOrder')">查询</el-button>
            </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import NomalTable from "@/components/common/NomalTable";
import TableSearch from "@/components/common/TableSearch";
import BreadCrumb from "@/components/common/BreadCrumb";
import AddButton from "@/components/common/AddButton";

export default {
  name: "tabletest",
  data() {
    return {
      url: "",
      dialogFormVisible: true,
      form: {
          name: ''
      },
      breadcrumb: [
        //面包屑
        {
          name: "营销管理" //名字
        },
        {
          name: "优惠券" //名字
        }
      ],

      searchs: {
        list: [
          {
            type: "input-text", //输入文本
            label: "订单搜索",
            name: "couponName",
            value: "",
            placeholder: "请输入手机号码/用户名/套餐名/订单号"
          },
          {
            type: "input-date", //选择器
            label: "时间",
            name: "coupon",
            value: ""
          },
          {
            type: "input-select", //选择器
            label: "申请状态",
            name: "company",
            value: "all",
            options: [
              {
                name: "全部",
                value: "all"
              },
              {
                name: "option2",
                value: "option2"
              },
              {
                name: "option3",
                value: "option3"
              }
            ]
          },
          {
            type: "input-select", //选择器
            label: "订单状态",
            name: "company",
            value: "all",
            options: [
              {
                name: "全部",
                value: "all"
              },
              {
                name: "option2",
                value: "option2"
              },
              {
                name: "option3",
                value: "option3"
              }
            ]
          },
          {
            type: "input-select", //选择器
            label: "收款状态",
            name: "company",
            value: "all",
            options: [
              {
                name: "全部",
                value: "all"
              },
              {
                name: "option2",
                value: "option2"
              },
              {
                name: "option3",
                value: "option3"
              }
            ]
          }
        ]
      },
      addButton: {
        title: "经营管理",
        name: "订单管理",
        url: ""
      },
      tableJson: {
        column: [
          //行
          {
            type: "text",
            label: "模版ID",
            prop: "date",
            width: "",
            align: "center"
          },
          {
            type: "text",
            label: "模版名称",
            prop: "name",
            width: "",
            align: "center"
          },
          {
            type: "text",
            label: "模版范围",
            prop: "name",
            width: "",
            align: "center"
          },
          {
            type: "text",
            label: "模版类型",
            prop: "name",
            width: "",
            align: "center"
          },
          {
            type: "text",
            label: "金额",
            prop: "id",
            align: "center",
            width: ""
          },
          {
            type: "text",
            label: "适用平台",
            prop: "address",
            align: "center",
            width: ""
          },
          {
            type: "text",
            label: "创建时间",
            prop: "date",
            align: "center",
            width: ""
          },
          {
            type: "handle",
            label: "操作",
            align: "center",
            width: "",
            list: [
              {
                label: "查看排期",
                type: "edit",
                url: "", //优先执行url
                onClick(tablePage, self) {
                  console.log(self.vue);
                  console.log(tablePage.isShow);
                  self.nomal = !self.nomal;
                  tablePage.isShow = !tablePage.isShow;
                }
              },
              {
                label: "删除",
                type: "delete"
              }
            ]
          }
        ]
      }
    };
  },
  components: {
    NomalTable,
    TableSearch,
    BreadCrumb,
    AddButton
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style scoped>
.search {
  background-color: #fff;
  padding: 20px 20px 4px 10px;
}
.contcenter{
    width: 250px;
    text-align: center;
    margin: 0 auto;
}
</style>