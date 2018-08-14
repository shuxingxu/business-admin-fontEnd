<template>
<div class="page">
    <div class="page-header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="page-content">
        <div class="page-main">
            <div class="sub-heading">
                <h3 class="sub-title"><span class="sub-icon"><img src="/static/img/sub_icon.png"  width="100%"></span><span class="title" style="font-size:12px">设置相应橱窗位的关联套餐，共可以放1-3张宣传图并设置跳转链接，让消费者更好的了解您店铺的主打商品。</span></h3>
                <div class="sub-actions">
                    <el-button size="mini" @click="preview = true">效果预览</el-button>
                    <el-button size="mini" type="primary" @click="confirm">提交审核</el-button>
                </div>
            </div>
            <div class="panel">
                <div class="showbox" v-for="(v,i) in kitchen" :key="i">
                    <h4>橱位{{i+1}}</h4>
                    <div class="imgandbtn">
                        <img v-for="(value,index) in v.imgurl" :key="index" :src="value" alt="" v-if="v.imgurl[index]" style="height:285px" :style="{width:v.type===1 ? '390px':'190px'}">
                        <div class="avatar-uploader" v-if="!v.imgurl[0]">
                            <div class="el-upload">
                                <i  @click="dialogTableVisible=true;currentindex=i;cs(currentindex)" class="el-icon-plus avatar-uploader-icon"></i>
                            </div>
                        </div>
                        <a href="javascript:void(0)" class="edit btn" @click="dialogTableVisible=true;currentindex=i">编辑</a>
                        <a href="javascript:void(0)" v-if="v.imgurl[0]" class="del btn"  @click="del2(i)">删除</a>
                        <a href="javascript:void(0)" v-if="i!==0&&v.imgurl[0]" @click="sort(i)" class="up btn">上移</a>
                    </div>
                    <div class="titleandpushto" v-if="v.imgurl[0]">
                        <p v-if="v.type===1 || v.type===3">跳转结果：套餐（创意风格+一对一拍摄+六服六造）</p>
                        <p v-if="v.type===2">左图跳转结果：套餐（创意风格+一对一拍摄+六服六造）</p>
                        <p v-if="v.type===2">右图跳转结果：私信</p>
                    </div>
                </div>
                <el-dialog width='1100px' title="编辑橱窗" :visible.sync="dialogTableVisible">
                    <div class="editbox">
                        <div class="sellecttype">
                            <h4>* 选择样式：</h4>
                            <el-radio-group v-model="radio" class="flexbox">
                                <div class="colflexbox">
                                    <img src="/static/img/upload1.jpg" alt="">
                                    <el-radio class="text" :label="1">横版</el-radio>                                    
                                </div>
                                <div class="colflexbox" style="margin-right:41px">
                                    <div>
                                        <img src="/static/img/upload2.jpg" style="width:141px;margin-right:5px" alt="">
                                        <img src="/static/img/upload3.jpg" style="width:141px;margin-right:0" alt="">
                                    </div>
                                    <el-radio class="text" :label="2">双图</el-radio>                                    
                                </div>
                                <div class="colflexbox">
                                    <img src="/static/img/upload4.jpg" style="width:141px;" alt="">
                                    <el-radio class="text" :label="3">竖图</el-radio>                                    
                                </div>
                            </el-radio-group>
                            <div>
                                <h4 v-show="radio===1">* 橱窗图片：推荐尺寸：538*580像素，支持JGP、PNG格式和BMP等大部分格式，图片大小不超过10M</h4>
                                <h4 v-show="radio===2||radio===3">* 橱窗图片：推荐尺寸：219*580像素，支持JGP、PNG格式和BMP等大部分格式，图片大小不超过10M</h4>
                                
                                <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-if="!imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>                                
                                <h4>* 跳转结果：</h4>
                                <div class="pushtodetail">
                                    <a href="JavaScript:void(0)" v-if="!pushtodata" @click="innerVisible=true">选择</a>
                                    <div v-else>
                                        <img src="" alt="">
                                        <p>设计师款主纱+出门纱+敬酒服+赠送底片</p>
                                        <span>¥ 8800.00</span>
                                    </div>
                                    <a v-if="pushtodata" href="JavaScript:void(0)" @click="innerVisible=true">更换</a>                                    
                                </div>
                                <el-dialog
                                width="50%"
                                title="内层 Dialog"
                                :visible.sync="innerVisible"
                                append-to-body>
                                <ul>
                                    <li v-for="(va,idx) in 5" :key="idx" @click="pushtodata=va;innerVisible=false" style="cursor:pointer">
                                        添加{{va}}
                                    </li>
                                </ul>
                                </el-dialog>                                
                            </div>
                            <div v-if="radio===2">
                                <h4>* 橱窗图片：推荐尺寸：219*580像素，支持JGP、PNG格式和BMP等大部分格式，图片大小不超过10M</h4>
                                
                                <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess2"
                                :before-upload="beforeAvatarUpload2">
                                <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                                <i v-if="!imageUrl2" class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>                                
                                <h4>* 跳转结果：</h4>
                                <div class="pushtodetail">
                                    <a href="JavaScript:void(0)" v-if="!pushtodata2" @click="innerVisible2=true">选择</a>
                                    <div v-else>
                                        <img src="" alt="">
                                        <p>设计师款主纱+出门纱+敬酒服+赠送底片</p>
                                        <span>¥ 8800.00</span>
                                    </div>
                                    <a v-if="pushtodata2" href="JavaScript:void(0)" @click="innerVisible2=true">更换</a>                                    
                                </div>
                                <el-dialog
                                width="50%"
                                title="内层 Dialog"
                                :visible.sync="innerVisible2"
                                append-to-body>
                                <ul>
                                    <li v-for="(va,idx) in 5" :key="idx" @click="pushtodata2=va;innerVisible2=false" style="cursor:pointer">
                                        添加{{va}}
                                    </li>
                                </ul>
                                </el-dialog>                                
                            </div>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogTableVisible = false;resetstatus()">取 消</el-button>
                        <el-button type="primary" @click="confirmdata()">确 定</el-button>
                    </span>                    
                </el-dialog>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                // 上传图片阅览地址
                imageUrl:'',
                imageUrl2:'',
                // 跳转选择信息
                pushtodata:"",
                pushtodata2:"",
                // 编辑第几个橱窗
                currentindex:1,
                // 编辑窗口选择的第几个套餐样式1,2,3
                radio:1,
                // 弹窗控制显示状态
                dialogTableVisible:false,
                // 内部弹窗控制显示状态
                innerVisible:false,
                innerVisible2:false,
                // 预览效果控制状态
                preview:false,
                // 橱窗显示数据
                kitchen:[
                    {
                        // 大图1,双图2，小图3
                        type:1,
                        // 图片地址
                        imgurl:[''],
                        // 跳转位置相关信息
                        pushto:{
                            // 没有type0,套餐1，私信2
                            type:1,
                            title:'',
                            url:'',
                            smsid:'',
                            packageid:''
                        }
                    },
                    {
                        // 大图1,双图2，小图3
                        type:1,
                        imgurl:[''],
                        pushto:{
                            // 套餐1，私信2
                            type:1,
                            title:'',
                            url:'',
                            smsid:'',
                            packageid:''
                        }
                    },
                    {
                        // 大图1,双图2，小图3
                        type:1,
                        imgurl:[''],
                        pushto:{
                            // 套餐1，私信2
                            type:2,
                            title:'',
                            url:'',
                            smsid:'',
                            packageid:''
                        }
                    }
                ],
            }
        },
        components: {
        },
        created() {
        },
        computed: {
        },
        methods: {
            cs(i){
                console.log(i)
            },
            // 提交审核方法
            confirm(){},
            // 排序方法
            sort(i){
                [this.kitchen[i-1],this.kitchen[i]] = [this.kitchen[i],this.kitchen[i-1]];
                console.log(this.kitchen)
                this.kitchen.splice(0,1,this.kitchen[0])
            },
            // 删除当前橱窗信息
            del2(i) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                this.kitchen.splice(i,1,{
                        type:1,
                        imgurl:[''],
                        pushto:{
                            type:1,
                            title:'',
                            url:'',
                            smsid:'',
                            packageid:''
                        }
                    })
                this.kitchen[i].imgurl="";
                console.log('删除完了');
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            },
            // 图片上传成功以后处理函数
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            handleAvatarSuccess2(res, file) {
                this.imageUrl2 = URL.createObjectURL(file.raw);
                
            },
            // 图片上传成功以前处理函数，生成动态链接地址
            beforeAvatarUpload(file) {
                this.getObjectURL(file)
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 10;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 10MB!');
                }
                return isJPG && isLt2M;
            },
            beforeAvatarUpload2(file) {
                this.getObjectURL(file,'two')
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 10;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 10MB!');
                }
                return isJPG && isLt2M;
            },
            // 生成本地图片链接
            getObjectURL(file,i) {
            var url = null;
                if (window.createObjectURL != undefined) {
                    // basic
                    url = window.createObjectURL(file);
                } else if (window.URL != undefined) {
                    // mozilla(firefox)
                    url = window.URL.createObjectURL(file);
                } else if (window.webkitURL != undefined) {
                    // webkit or chrome
                    url = window.webkitURL.createObjectURL(file);
                }
                if(i==='two'){
                    this.imageUrl2 = url;
                }else{
                    this.imageUrl = url;
                }
            },
            // 重置弹窗数据
            resetstatus(){
                this.imageUrl='',
                this.pushtodata='',
                this.imageUrl2='',
                this.pushtodata2=''
            },
            // 提交橱窗设置
            confirmdata(){
                if(this.radio === 2 && (!this.imageUrl || !this.pushtodata || !this.imageUrl2 || !this.pushtodata2)){
                    this.$alert('请填写：橱窗图片及跳转结果', '提交失败', {
                    confirmButtonText: '确定'
                    })
                    return;
                }
                if(!this.imageUrl || !this.pushtodata){
                    this.$alert('请填写：橱窗图片及跳转结果', '提交失败', {
                    confirmButtonText: '确定'
                    })
                    return;
                }
                if(this.radio===2){
                    this.kitchen[this.currentindex].imgurl[0]=this.imageUrl;
                    this.kitchen[this.currentindex].imgurl[1]=this.imageUrl;
                }else{
                    this.kitchen[this.currentindex].imgurl=[this.imageUrl]
                }
                this.kitchen[this.currentindex].type=this.radio;
                this.kitchen.splice(0,1,this.kitchen[0])
                this.dialogTableVisible = false;
                this.dialogTableVisible2 = false;
                this.resetstatus()
            }
            
        }
    }

</script>

<style scoped lang='less'>
.showbox img{
    width: 380px;
    height: 280px;
    background-color: #eee;
    display: inline-block;
    margin-right: 10px;
}
.showbox{
    padding-left: 57px;
    h4{
        margin-bottom: 8px;
        padding-top: 27px;
    }
    .imgandbtn,.titleandpushto{
        margin-left: 50px;
        .btn{
            margin: 0 20px;
        }
    }
    .avatar-uploader{
        display: inline-block;
    }
    .avatar-uploader .el-upload{
    display: inline-block;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    width: 390px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
        .avatar-uploader-icon{
            color: #409EFF
        }
    }
    .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 390px;
    height: 285px;
    line-height: 285px;
    text-align: center;
    }    
}
.editbox{
    padding: 0 57px;
    h4{
        margin-top: 34px;
        margin-bottom: 18px;
    }
    .flexbox,.avatar-uploader,.pushtodetail{
        margin-left: 80px;
    }
    .flexbox{
        img{
            margin-bottom: 22px;
            border-radius: 6px;
        }
        .text{
            margin-bottom: 33px;
        }
    }
}
.editbox img{
    width: 210px;
    height: 130px;
    background-color: #eee;
    display: inline-block;
    margin-right: 10px;
}

.flexbox{
    display: flex;
    // justify-content: center;
    align-items: center;
}
.colflexbox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 262px;
        height: 171px;
        margin-right: 41px
    }
}
.avatar-uploader{
    display: inline-block;
}
.avatar-uploader .el-upload{
display: inline-block;
border: 1px dashed #d9d9d9;
border-radius: 6px;
cursor: pointer;
position: relative;
overflow: hidden;
}
.el-upload:hover {
border-color: #409EFF;
    .avatar-uploader-icon{
        color: #409EFF
    }
}
.avatar-uploader-icon {
font-size: 28px;
color: #8c939d;
text-align: center;
line-height: 180px;
}  
img.avatar {
width: 100%;
height: 100%;
display: block;
}

</style>
