<template>  
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
        <div class="titName">服务项目</div>
        <div class="miniLine">
          一、确定拍摄时间<br>二、到店签合同
        </div>
        <div class="titName">人员安排</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'rightModel',
  data(){
    return {

    }
  },
  props: ['orderInfo']
}
</script>

<style>

.settedBox {
  font-size: 12px;
  color: #666;
  padding: 10px;
}
.settedBox .titName {
  font-size: 14px;
  color: #333;
  line-height: 48px;
}
.settedBox .miniLine {
  line-height: 30px;
}
.settedBox .goodOne {
  display: flex;
  width: 220px;
  padding: 10px;
  margin-left: -10px;
  background: #f8f9fa;
  box-sizing: border-box;
}
.settedBox .goodOne img {
  width: 90px;
  height: 80px;
  flex: none;
  margin-right: 12px;
  border-radius: 6px;
}
</style>
