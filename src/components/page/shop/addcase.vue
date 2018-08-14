<template>
    <div class="marketGame page">
        <div class="page-header">
            <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
        </div>
        <div class="page-content">
            <div class="pack-content w-full"> 
                <div class="form-main">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px">
                        <h2 class="session"><span>基本信息</span></h2>
                        <div class="line"></div>
                      <el-form-item label="案例标题：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell w-600">
                                <el-input v-model="ruleForm.name" placeholder="请输入案例的展示名称"></el-input>
                            </div>
                            <div class="tips">8<span class="text-muted">/24</span></div>
                        </div>
                      </el-form-item>
                      <el-form-item label="案例封面：" prop="name">
                        <div class="input-img w-full">
                            <p class="info text-muted w-600">展示在案例列表中的封面图，图片应为高清无水印（无网址、微信、手机号等），最佳尺寸为1080*675像素，支
持JPG、PNG和BMP等大部分格式，图片大小不可大于10M</p>
                            <el-upload
                              class="avatar-uploader"
                              action="https://jsonplaceholder.typicode.com/posts/"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <div class="avatar-content">
                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                  <div v-else class="avatar-tip">
                                    <i class="el-icon-plus avatar-uploader-icon"></i>
                                    <p class="p-info">套餐封面</p>
                                    <p class="p-infos">（1080*675像素）</p>
                                  </div>
                              </div>
                            </el-upload>
                        </div>
                      </el-form-item>
                      <el-form-item label="案例头图：" prop="name">
                        <div class="input-img w-full">
                            <p class="info text-muted w-600">展示在案例页顶部的图片，图片应为高清无水印（无网址、微信、手机号等），最佳尺寸为1080*675像素，支
持JPG、PNG和BMP等大部分格式，图片大小不可大于10M</p>
                            <el-upload
                              class="avatar-uploader"
                              action="https://jsonplaceholder.typicode.com/posts/"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <div class="avatar-content">
                                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                  <div v-else class="avatar-tip">
                                    <i class="el-icon-plus avatar-uploader-icon"></i>
                                    <p class="p-info">案例头图</p>
                                    <p class="p-infos">（1080*675像素）</p>
                                  </div>
                              </div>
                            </el-upload>
                        </div>
                      </el-form-item>
                      <el-form-item label="简要描述：" prop="desc">
                        <el-input style="width: 681px;" rows="6" type="textarea" placeholder="请填写一段简明而清晰的描述" v-model="ruleForm.desc"></el-input>
                      </el-form-item>
                        <el-form-item label="店铺环境：" prop="name">
                            <div class="input-img margin-bottom-30 pack-imgs w-full">
                                <p class="info text-muted w-600">请上传5~50张照片或1个视频，拖拽图片调整图片顺序（图片请勿添加水印，<span class="strong">纵横比尽量接近3比4，单张图片不要超过10M</span>，支持JPG、PNG和BMP等常见图片格式）</p>
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


                        <h2 class="session"><span>详细信息</span></h2>
                        <div class="line"></div>
                        <!-- 跟妆类 -->
                        <div class="margin-bottom-30">
                          <el-form-item label="案例参考价：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder=" 请填写该案例的参考价格"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                            
                        </div>
                        <!-- 婚纱摄影类 -->
                        <div class="margin-bottom-30">
                          <el-form-item label="拍摄风格：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的拍摄风格"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="拍摄景点：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的拍摄景点"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="服装造型：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的服装造型"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="案例参考价：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder=" 请填写该案例的参考价格"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                            
                        </div>
                        <!-- 婚礼策划类 -->
                        <div class="margin-bottom-30">
                          <el-form-item label="婚礼日期：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的婚礼日期"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="婚礼场地：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的婚礼场地"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="婚礼主题：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的婚礼主题"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="婚礼摄影：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder=" 请填写该案例的婚礼摄影"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="婚礼摄像：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的婚礼摄像"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="化妆造型：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的化妆造型"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="婚礼司仪：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该案例的婚礼司仪"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="婚礼花艺：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder=" 请填写该案例的婚礼花艺"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                          <el-form-item label="案例参考价：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell w-600">
                                    <el-input v-model="ruleForm.name" placeholder=" 请填写该案例的参考价格"></el-input>
                                </div>
                            </div>
                          </el-form-item>
                            
                        </div>

                        <h2 class="session"><span>案例标签</span><span class="f14 text-info">（每种属性最多选择2个标签）</span></h2>
                        <div class="line"></div>

                        <div class="tags-list" v-for="tag in tags" :key="tag.id">
                            <div class="tags-label"><i class="icon"></i>{{tag.title}}</div>
                            <div class="tags">
                                <el-checkbox-group  v-model="tag.value" class="shop-promise" :max="2">
                                  <el-checkbox-button v-for="item in tag.list" :label="item.id" :key="item.id">{{item.name}}</el-checkbox-button>
                                </el-checkbox-group>
                            </div>
                        </div>


                        <h2 class="session"><span>关联套餐</span><span class="f14 text-info">（最多选择3个套餐）</span></h2>
                        <div class="line"></div>

                        <div class="packs-container">
                            <div class="packs-list">
                                <ul>
                                    <li>
                                        <div class="left"><img src="/static/img/img.jpg"></div>
                                        <div class="right f14 text-info">
                                            <p class="top">a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅</p>
                                            <p class="text-right bottom">¥2222</p>
                                        </div>
                                        <span class="flag">√</span>
                                    </li>
                                    <li>
                                        <div class="left"><img src="/static/img/img.jpg"></div>
                                        <div class="right f14 text-info">
                                            <p class="top">a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅</p>
                                            <p class="text-right bottom">¥2222</p>
                                        </div>
                                        <span class="flag">√</span>
                                    </li>
                                    <li>
                                        <div class="left"><img src="/static/img/img.jpg"></div>
                                        <div class="right f14 text-info">
                                            <p class="top">a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅</p>
                                            <p class="text-right bottom">¥2222</p>
                                        </div>
                                        <span class="flag">√</span>
                                    </li>
                                    <li>
                                        <div class="left"><img src="/static/img/img.jpg"></div>
                                        <div class="right f14 text-info">
                                            <p class="top">a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅</p>
                                            <p class="text-right bottom">¥2222</p>
                                        </div>
                                        <span class="flag">√</span>
                                    </li>
                                    <li>
                                        <div class="left"><img src="/static/img/img.jpg"></div>
                                        <div class="right f14 text-info">
                                            <p class="top">a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅</p>
                                            <p class="text-right bottom">¥2222</p>
                                        </div>
                                        <span class="flag">√</span>
                                    </li>
                                    <li>
                                        <div class="left"><img src="/static/img/img.jpg"></div>
                                        <div class="right f14 text-info">
                                            <p class="top">a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅a撒发大师傅</p>
                                            <p class="text-right bottom">¥2222</p>
                                        </div>
                                        <span class="flag">√</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="page-box">
                                <el-pagination
                                  :current-page.sync="currentPage"
                                  :page-size="100"
                                  layout="prev, pager, next, jumper"
                                  :total="1000">
                                </el-pagination>
                            </div>

                        </div>

















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
                


            </div>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '@/components/common/BreadCrumb'

export default {
    name: 'addpack',
    data() {
        return {
            breadcrumb: [ //面包屑
                {
                    "name": "店铺管理", //名字
                },
                {
                    "name": "店铺信息", //名字
                }
            ],
            currentPage: 1,
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
            tags: [
                {
                    title:"档位",
                    value:[],
                    id:"0",
                    list:[
                        {
                            name:"总监档",
                            id:"0"
                        },
                        {
                            name:"总监档",
                            id:"1"
                        },
                        {
                            name:"总监档",
                            id:"2"
                        },
                        {
                            name:"总监档",
                            id:"3"
                        },
                        {
                            name:"总监档",
                            id:"4"
                        },
                    ]

                },
                {
                    title:"风格",
                    value:[],
                    id:"1",
                    list:[
                        {
                            name:"总监档",
                            id:"0"
                        },
                        {
                            name:"总监档",
                            id:"1"
                        },
                        {
                            name:"总监档",
                            id:"2"
                        },
                        {
                            name:"总监档",
                            id:"3"
                        },
                        {
                            name:"总监档",
                            id:"4"
                        },
                        {
                            name:"总监档",
                            id:"10"
                        },
                        {
                            name:"总监档",
                            id:"11"
                        },
                        {
                            name:"总监档",
                            id:"12"
                        },
                        {
                            name:"总监档",
                            id:"13"
                        },
                        {
                            name:"总监档",
                            id:"14"
                        },
                        {
                            name:"总监档",
                            id:"20"
                        },
                        {
                            name:"总监档",
                            id:"21"
                        },
                        {
                            name:"总监档",
                            id:"22"
                        },
                        {
                            name:"总监档",
                            id:"23"
                        },
                        {
                            name:"总监档",
                            id:"24"
                        },
                    ]

                },
                {
                    title:"时间",
                    value:[],
                    id:"2",
                    list:[
                        {
                            name:"总监档",
                            id:"0"
                        },
                        {
                            name:"总监档",
                            id:"1"
                        },
                        {
                            name:"总监档",
                            id:"2"
                        },
                        {
                            name:"总监档",
                            id:"3"
                        },
                        {
                            name:"总监档",
                            id:"4"
                        },
                    ]

                },
            ],

        }
    },
    components: {
        BreadCrumb,
    },
    created() {


    },
    computed: {

    },
    methods: {
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
/*step 2*/
.session{
    font-weight: normal;
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #666;
    display: flex;
    align-items: center;
    padding-left: 30px;
}
.session>i{
    display: inline-block;
    height: 26px;
    width: 26px;
    line-height: 26px;
    text-align: center;
    border:1px solid #ccc;
    border-radius: 50%;
    font-style: normal;
    margin-right: 15px;
}
.line{
    height: 1px;
    overflow: hidden;
    font-size: 0;
    background-color: #eee;
    margin: 0 20px 20px;
}

.tags-list{
    margin-bottom: 30px;
}
.tags-label{
    height: 20px;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 20px;
}
.tags-label .icon{
    padding-left: 60px;
    background: url('/static/img/img.jpg') no-repeat center/auto 100%;
}
.tags{
    padding:0 50px 0 60px;
}
.packs-container{
    padding:0 60px;
    margin-bottom: 100px;
    width: 862px;
}
.packs-list ul{
    display: flex;
    flex-wrap: wrap;
}
.packs-list ul li{
    flex-shrink: 0;
    width: 250px;
    padding: 10px;
    display: flex;
    border:1px solid #dcdfe6;
    position: relative;
    overflow: hidden;
    margin-right: 15px;
    margin-bottom: 15px;
}
.packs-list ul li:hover{
    cursor: pointer;
    border-color: #7224D8;
}
.packs-list ul li .left{
    height: 60px;
    width: auto;
    margin-right: 10px;
    flex-shrink: 0;
}
.packs-list ul li .right{
    line-height: 26px;
    width: 180px;
}
.packs-list ul li .right .top{
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 5px;
}
.packs-list ul li .right .bottom{
    padding-right: 5px;
}


.packs-list ul li .left img{
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}
.packs-list .flag{
    position: absolute;
    bottom: -20px;
    right: -20px;
    height: 40px;
    width: 40px;
    background-color: #7224D8;
    color: #fff;
    line-height: 28px;
    border-radius: 50%;
    text-indent: 7px;
    font-size: 12px;
}





.page-box{
    text-align: right;
    padding-right: 10px;
}


.p-info{
    color: #666;
}
.p-infos{
    color: #999;
}
.text-center{
    text-align: center;
}
.margin-bottom-30{
    margin-bottom: 30px;
}
.margin-bottom-20{
    margin-bottom: 20px;
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
    width: 600px !important;
}
</style>
<style>
.input-img .el-upload--text{
    width: 100%;
    height: 100%;
}
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
.shop-promise .el-checkbox-button{
    margin-right: 10px;
}
.shop-promise .el-checkbox-button__inner{
    border:1px solid #dcdfe6;
    border-radius: 5px !important;
}

.tags .el-checkbox-button__inner{
    height: 36px;
    line-height: 36px;
    min-width: 100px;
    padding: 0 10px;
    border-radius: 18px !important;
}
.tags .el-checkbox-button{
    margin-bottom: 25px;
}
</style>