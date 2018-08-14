<template>
    <div class="marketGame page">
        <div class="page-header">
            <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
        </div>
        <div class="page-content">
            <div class="pack-content w-full"> 
                <div class="form-main">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px">
                       
                      <el-form-item label="店铺名称：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell">
                                <el-input v-model="ruleForm.name" placeholder="请输入店铺名称"></el-input>
                            </div>
                            <div class="tips">8<span class="text-muted">/20</span></div>
                        </div>
                      </el-form-item>
                      <el-form-item label="品牌名称：" class="form-box">
                        <div class="input-cell">韩国艺匠</div>
                      </el-form-item>
                      <el-form-item label="经营范围：" class="form-box">
                        <div class="input-cell">婚纱摄影</div>
                      </el-form-item>
                      <el-form-item label="联系手机：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell w-200">
                                <el-input v-model="ruleForm.name" placeholder="请输入联系手机"></el-input>
                            </div>
                        </div>
                      </el-form-item>
                      <el-form-item label="门店电话：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell w-200">
                                <el-input v-model="ruleForm.name" placeholder="请输入门店电话"></el-input>
                            </div>
                        </div>
                      </el-form-item>
                      <el-form-item label="电子邮箱：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell w-200">
                                <el-input v-model="ruleForm.name" placeholder="请输入电子邮箱"></el-input>
                            </div>
                        </div>
                      </el-form-item>
                      <el-form-item label="所在地区：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell w-200">
                                <el-input v-model="ruleForm.name" placeholder="请输入所在地区"></el-input>
                            </div>
                        </div>
                      </el-form-item>
                      <el-form-item label="联系地址：" prop="name">
                        <div class="input-cell">
                            <div class="cell">
                                <el-input v-model="ruleForm.name" placeholder="请输入联系地址"></el-input>
                            </div>
                            <div class="tips">8<span class="text-muted">/20</span></div>
                        </div>
                        <p class="info text-muted">为了让顾客了解您线下店铺的地址信息，<span class="strong">请务必在地图上标注、确认</span></p>
                        <div class="shop-map">
                            <div><el-button type="primary" @click="labelAddressShow">在地图上标记</el-button></div>
                            <div class="map-box" id="mapBox">
                                
                            </div>
                        </div>
                      </el-form-item>
                      <el-form-item label="套餐描述：" prop="desc">
                        <p class="info text-muted">填写店铺简介，介绍要有亮点，<span class="strong">不能出现网址、微信、手机号、支付方式等</span></p>
                        <el-input style="width: 681px;" rows="6" type="textarea" placeholder="描述您的套餐，会展示手机端的套餐简介部分，长度不超过20字" v-model="ruleForm.desc"></el-input>
                      </el-form-item>
                      <el-form-item label="商家logo：" prop="name">
                        <div class="input-img margin-bottom-30">
                            <p class="info text-muted">logo图中不能包含营销信息、联系方式、微信、网址二维码等，<span class="strong">推荐尺寸400*400像素</span></p>
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <div class="avatar-content">
                                  <div class="avatar-tip">
                                    <i class="el-icon-plus avatar-uploader-icon"></i>
                                    <p class="p-info">添加图片</p>
                                    <p class="p-infos">还可以添加5张</p>
                                  </div>
                                </div>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                              <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                      </el-form-item>
                      <el-form-item label="商家封面：" prop="name">
                        <div class="input-img w-full">
                            <p class="info text-muted">为顾客APP端商家主页背景图，请上传与经营范围相关的高清图片，请不要包含限词，<span class="strong">推荐尺寸为1080*472像素</span></p>
                            <el-upload
                              class="avatar-uploader shop-cover"
                              action="https://jsonplaceholder.typicode.com/posts/"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <div class="avatar-content">
                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                  <div v-else class="avatar-tip">
                                    <i class="el-icon-plus avatar-uploader-icon"></i>
                                    <p class="p-info">商家封面</p>
                                    <p class="p-infos">（1080*675像素）</p>
                                  </div>
                              </div>
                            </el-upload>
                        </div>
                      </el-form-item>

                        <el-form-item label="店铺环境：" prop="name">
                            <div class="input-img margin-bottom-30 pack-imgs w-full">
                                <p class="info text-muted w-600">店铺照片将在您的商家主页展示，真实、漂亮的店铺照片会让用户对贵店铺的信任感大大提升哦!请挑选3到12张您店铺的外景、内景图，<span class="strong">请上传4:3比例的横图，推荐尺寸1080*810像素，单张图片不要超过10M</span>。</p>
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <div class="avatar-content">
                                      <div class="avatar-tip">
                                        <i class="el-icon-plus avatar-uploader-icon"></i>
                                        <p class="p-info">添加图片</p>
                                      </div>
                                    </div>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                  <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </el-form-item>


                        <div class="handle-btn">
                            <div class="left-btn">
                                <p><el-button type="primary" size="mini" @click="submitForm('ruleForm')">预览</el-button></p>
                                <p><el-button type="info" size="mini" @click="preStep('ruleForm')">提交审核</el-button></p>
                            </div>
                            <div class="right-qrcode">
                                <p><img class="qrcode" src="/static/img/img.jpg"></p>
                                <p class="f12 text-center">扫码预览</p>
                            </div>
                        </div>



                    </el-form>
                </div>
                
                


                <el-dialog
                  title="提示"
                  :visible.sync="dialogMap"
                  :fullscreen="true">
                      <div class="label-map-box" v-show="dialogMap">
                        <div class="label-map-header">
                            <div class="left">
                                <el-input v-model.trim="addressKey" placeholder="请输入关键字"></el-input>
                                <el-button type="primary" class="el-icon-search">查询</el-button>
                            </div>
                            <div class="right">
                                <el-button size="small" @click="dialogMap = false">取消</el-button>
                                <el-button type="primary" size="small" @click="seachAddress">确认</el-button>
                            </div>
                        </div>
                        <div class="label-map-body" id="labelMap"></div>
                    </div>
                </el-dialog>


            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/common/BreadCrumb'
import BMap from 'BMap'

export default {
    name: 'addpack',
    data() {
        return {
            dialogMap: true,
            addressKey: "",
            breadcrumb: [ //面包屑
                {
                    "name": "店铺管理", //名字
                },
                {
                    "name": "店铺信息", //名字
                }
            ],
            checked:false,
            imageUrl: '', //套餐封面
            dialogImageUrl: '', //套餐头图
            dialogVisible: false, //套餐头图
            ruleForm: {
                name: '',
                type: [],
                resource: '',
                desc: '',
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],              type: [
                { type: 'array', required: true, message: '请至少选择一个承诺', trigger: 'change' }
              ],
              resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ]
            },
            map: null,
            labelMap: null,
            pt:{
                lng: "",
                lat: ""
            },

        }
    },
    components: {
        BreadCrumb,
    },
    created() {
    },
    mounted(){
        this.createMap();
    },
    watch:{
    },
    computed: {

    },
    methods: {
        createMap(){
            // 百度地图API功能
            this.map = new BMap.Map("mapBox");
            var point = new BMap.Point(116.331398,39.897445);
            this.map.centerAndZoom(point,12);
            this.map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT,  type: BMAP_NAVIGATION_CONTROL_SMALL}))
            // this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var myCity = new BMap.LocalCity();
            myCity.get(this.myFun);
        },
        createLabelMap(pt){
            this.labelMap = new BMap.Map("labelMap");
            var point = new BMap.Point(pt.lng || 116.331398,pt.lat || 39.897445);
            this.labelMap.centerAndZoom(point,12);
            this.labelMap.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT}));//添加控件
            this.labelMap.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            var geoc = new BMap.Geocoder();
            this.theLocation(pt.lng, pt.lat, this.labelMap);   
            this.dialogMap = false;
            this.labelMap.addEventListener("click",e => {
                this.pt = e.point;
                this.theLocation(this.pt.lng, this.pt.lat, this.labelMap);
                geoc.getLocation(this.pt, function(rs){
                    var addComp = rs.addressComponents;
                    alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                }); 
            });
        },
        theLocation(lng, lat, map){
            if(lng && lat){
                map.clearOverlays(); 
                var new_point = new BMap.Point(lng, lat);
                var marker = new BMap.Marker(new_point);  // 创建标注
                map.addOverlay(marker);              // 将标注添加到地图中
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            }
        },
        myFun(result) {
            var cityName = result.name;
            this.map.setCenter(cityName);
            this.theLocation(result.center.lng, result.center.lat, this.map);
            this.pt = result.center;
            this.createLabelMap(this.pt);
        },
        labelAddressShow(){
            this.dialogMap = true;
        },
        seachAddress(){

        },
        submitForm(formName) {
            if(this.step<4){
                this.step ++;
            }
            console.log(this.tags)

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        preStep() {
            this.step --;
        },
        handleAvatarSuccess(res, file) { //套餐封面展示
            this.imageUrl = URL.createObjectURL(file.raw);
          },
        beforeAvatarUpload(file) { //套餐封面上传
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handleRemove(file, fileList) { //套餐头图
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) { //套餐头图
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },



    }
}
</script>
<style scoped lang='less'>
.steps{
    display: flex;
}
.step-cell{
    height: 44px;
    line-height: 44px;
    background: #eeefff url('/static/img/icon_02.png') no-repeat right center/auto 100%;
    font-size: 18px;
    color:#666;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.step-cell:last-child{
    background: #eeefff;
}
.step-cell .icon{
    font-style: normal;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    background-color: #666;
    margin-right: 15px;
}
.step-cell.active{
    background: #7224D8 url('/static/img/icon_01.png') no-repeat right center/auto 100%;
    color: #fff;
}
.step-cell.actived{
    background-image:url('/static/img/icon_03.png');
}
.step-cell.active .icon{
    color: #7334db;
    background-color: #fff;
}
.step-cell.active:last-child{
    background: #7224D8;
}
.pack-content{
    background-color: #fff;
}
.form-main{
    padding-top: 40px;
}
.tip-info{
    font-size: 12px;
    color: #999;
    line-height: 20px;
}
.input-cell{
    display: flex;
    font-size: 12px;
}
.input-cell .cell{
    width: 262px;
    margin-right: 10px;
}
.input-cell .tips{
    line-height: 14px;
    font-size: 14px;
    padding-top: 18px;
}
.check-box{
    margin-right: 29px;
    font-size: 12px;
}
.check-box .icon{
    color: #666;
    margin-right: 10px;
    cursor: pointer;
}
.cell2{
    width: 160px;
}
.info{
    color: #666;
    line-height: 20px;
    font-size: 14px;
    padding: 6px 0 15px;
}
.form-box-input{
    width: 400px;
}
.input-img{
    width: 590px;
    margin-bottom: 20px;
}
.avatar-uploader{
    width: 390px;
    height: 238px;
}
.avatar-content{
    display:flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.avatar-uploader-icon {
    font-size: 36px;
    font-weight: bold;
    color: #999;
    margin-bottom: 20px;
}
.avatar {
    width: 100%;
    height: 100%;
    display: block;
}
.avatar-tip p{
    line-height: 26px;
}
.strong{
    color: #7224D8;
}
.video-pack-img .cell{
    display: inline-block;
    margin-right: 12px;
}
.video-pack-img .cell .avatar-uploader{
    width: 259px;
    height: 170px;
}
.shop-map{
    width: 390px;
}
.map-box{
    height: 311px;
}

.handle-btn{
    display: flex;
    padding-left: 200px;
    padding-bottom: 125px;
}
.handle-btn .left-btn{
    margin-right: 90px;
}
.handle-btn .right-qrcode{
    box-shadow: 0px 0px 2px 2px #eee;
    padding: 10px;
}
.handle-btn .right-qrcode .qrcode{
    width: 88px;
    height: auto;
    margin-bottom: 5px;
}
.label-map-box{
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 10;
}
.label-map-header{
    height: 60px;
    background-color: #fff;
}
.label-map-body{
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
}
.label-map-header{
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.label-map-header div{
    width: 50%;
}
.label-map-header .right{
    text-align: right;
}


.p-info{
    color: #666;
}
.p-infos{
    color: #999;
}
.f12{
    font-size: 12px;
}
.f14{
    font-size: 14px;
}
.f16{
    font-size: 16px;
}
.f18{
    font-size: 18px;
}
.text-center{
    text-align: center;
}
.margin-bottom-30{
    margin-bottom: 30px;
}
.margin-right-10{
    margin-right: 10px;
}
.margin-right-20{
    margin-right: 20px;
}
.padding-top-20{
    padding-top: 20px;
}
.padding-top-0{
    padding-top: 0;
}
.w-600{
    width: 600px;
}
</style>
<style>
.input-img .el-upload-list--picture-card .el-upload-list__item,.input-img .el-upload--picture-card{
    height: 190px;
    width: 190px;
}
.input-img .el-upload-list--picture-card .el-upload-list__item{
    width: 190px;
    vertical-align: top;
}
.pack-imgs .el-upload-list--picture-card .el-upload-list__item,.pack-imgs  .el-upload--picture-card{
    width: 190px;
    height: 221px;
}
.input-img .el-upload-list--picture-card .el-upload-list__item,.avatar-uploader .el-upload--text,.input-img .el-upload--picture-card{
    border-radius: 0;
    background-color: #fff;
    border-color: #bfbfbf;
    line-height: inherit;
}
.shop-cover .el-upload--text{
    height: 100%;
    width: 100%;
}
.input-img .el-upload--picture-card:hover,.avatar-uploader .el-upload:hover {
    border-color: #7224D8;
}
.shop-map .el-button--primary{
    width: 100%;
    height: 30px;
    text-align: center;
    border-radius: 0;
}
.handle-btn .el-button--mini{
    padding:0;
    height: 30px;
    width: 200px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 36px;
}

.handle-btn .left-btn p:first-child .el-button--mini{
    background-color: #E9773F;
    border-color: #E9773F;
}

.handle-btn .left-btn p:first-child .el-button--mini:hover{
    background-color: #ee9468;
    border-color: #ee9468;
}
</style>