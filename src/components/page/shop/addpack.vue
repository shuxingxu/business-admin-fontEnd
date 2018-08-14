<template>
    <div class="marketGame page">
        <div class="page-header">
            <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
        </div>
        <div class="page-content">
            <div class="pack-content width100"> 
                <!-- <div class="steps">
                    <div class="step-cell active actived">
                        <i class="icon">1</i>
                        <span>套餐信息</span>
                    </div>
                    <div class="step-cell active actived">
                        <i class="icon">2</i>
                        <span>套餐内容</span>
                    </div>
                    <div class="step-cell active">
                        <i class="icon">3</i>
                        <span>套餐服务</span>
                    </div>
                    <div class="step-cell">
                        <i class="icon">4</i>
                        <span>套餐标签</span>
                    </div>

                </div> -->
                <el-steps :active="step" finish-status="success" simple>
                    <el-step title="套餐信息" ></el-step>
                    <el-step title="套餐内容" ></el-step>
                    <el-step title="套餐服务" ></el-step>
                    <el-step title="套餐标签" ></el-step>
                </el-steps>
                <!-- step 1 -->
                <div v-if="step == 1" class="form-main">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px">
                      <el-form-item label="套餐标题" prop="name">
                        <el-input class="form-box-input" v-model="ruleForm.name" placeholder="请输入套餐的展示名称，长度不少于12个字且不超过24个字"></el-input>
                        <div class="el-popover el-popper" style="position: relative; box-shadow: none; width: 450px;" x-placement="bottom-start">
                            <div class="popper__arrow" style="left: 30px;"></div>
                            <p class="tip-info">填写关键词：商家名/酒店色系/风格/赠送内容/营销词等，建议12-22个字，如下</p>
                            <p class="tip-info">示例一：50-80人小型婚礼之选 静谧蓝婚礼送首席四大</p>
                            <p class="tip-info">示例二：【XX婚礼】18年大热 镜面 T台水晶布景超炫灯光</p>
                            <p class="tip-info">示例三：福朋喜来登酒店-刘诗诗同款  花艺设计效果满分</p>
                        </div>
                      </el-form-item>

                      <el-form-item label="套餐现价：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell">
                                <el-input v-model="ruleForm.name" placeholder="请输入套餐在婚博会标价"></el-input>
                            </div>
                            <span>元</span>
                        </div>
                      </el-form-item>

                      <el-form-item label="套餐原价：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="cell">
                                <el-input v-model="ruleForm.name" placeholder="请输入套餐在市面上的售价"></el-input>
                            </div>
                            <span>元</span>
                        </div>
                      </el-form-item>

                      <el-form-item label="定金支付：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="check-box">
                                <i v-popover:popover class="el-icon-question icon"></i>
                                <el-popover
                                  ref="popover"
                                  placement="bottom-start"
                                  width="400"
                                  trigger="hover"
                                  popper-class="pack-popover"
                                  content="定金支付即表示该套餐支持该额度的定金金额">
                                </el-popover>
                                <el-checkbox v-model="checked">支持</el-checkbox>
                            </div>
                            <div class="cell cell2">
                                <el-input v-model="ruleForm.name" placeholder="请输入套餐的定金金额"></el-input>
                            </div>
                            <span>元</span>
                        </div>
                      </el-form-item>

                      <el-form-item label="订单礼：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="check-box">
                                <i v-popover:popove class="el-icon-question icon"></i>
                                <el-popover
                                  ref="popove"
                                  placement="bottom-start"
                                  width="400"
                                  trigger="hover"
                                  popper-class="pack-popover"
                                  content="订单礼即承诺为下单的用户提供的礼品。">
                                </el-popover>
                                <el-checkbox v-model="checked" class="el-checkbox--label">提供</el-checkbox>
                            </div>
                        </div>
                      </el-form-item>

                      <el-form-item label="全款礼：" prop="name" class="form-box">
                        <div class="input-cell">
                            <div class="check-box">
                                <i v-popover:popov class="el-icon-question icon"></i>
                                <el-popover
                                  ref="popov"
                                  placement="bottom-start"
                                  width="400"
                                  trigger="hover"
                                  popper-class="pack-popover"
                                  content="全款礼即承诺为全款支付的买家提供的礼品。">
                                </el-popover>
                                <el-checkbox v-model="checked" class="el-checkbox--label">提供</el-checkbox>
                            </div>
                            <div class="cell cell2">
                                <el-input v-model="ruleForm.name" placeholder="请输入套餐的全款礼"></el-input>
                            </div>
                        </div>
                      </el-form-item>

                      <el-form-item label="套餐封面：" prop="name">
                        <div class="input-img">
                            <p class="info">展示在套餐列表中的图片，图片应为高清无水印，图片尺寸大于1080*675像素（截取后尺寸不小于1080*675像素），支持JPG，PNG和BMP等大部分格式，图片大小不可大于10M </p>
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

                      <el-form-item label="套餐头图：" prop="name">
                        <div class="input-img margin-bottom-30">
                            <p>您可以上传3-5张图片及1个视频作为套餐头图</p>
                            <p class="info">展示在套餐页顶部的图片，<span class="strong">支持上传3-5张图片（需高清无水印）</span>，你可以拖拽图片调整图片的现实顺序，<span class="strong">图片宽高比为4:3，图片宽度大于等于640像素，图片高度大于等于480像素</span>，支持JPG、PNG和BMP等大部分格式图片，单张图片大小不超过10M </p>
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
                        <div class="input-img">
                            <p class="info">展示在套餐页顶部的视频，<span class="strong">最多可上传 1 个视频</span>，支持RMVB、AVI、MP4等大部分主流视频格式，<span class="strong">视频大小不能超过102M</span></p>
                            <div class="video-pack-img">
                                <div class="cell">
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
                                            <p class="p-info">添加视频</p>
                                          </div>
                                      </div>
                                    </el-upload>
                                </div>
                                <div class="cell">
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
                                            <p class="p-info">添加视频封面</p>
                                          </div>
                                      </div>
                                    </el-upload>
                                </div>
                            </div>
                        </div>
                      </el-form-item>

                      <el-form-item label="套餐描述：" prop="desc">
                        <el-input style="width: 681px;" rows="6" type="textarea" placeholder="描述您的套餐，会展示手机端的套餐简介部分，长度不超过20字" v-model="ruleForm.desc"></el-input>
                      </el-form-item>

                        <el-form-item label="套餐图片：" prop="name">
                            <div class="input-img margin-bottom-30 pack-imgs pack-imgs-self">
                                <p class="info">展示在套餐的图片详情中的图片，至少上传3张，拖拽图片调整图片顺序，双击可预览大图，图片640px≤1024px,高度≤2048px,单张图片不要超过10M, 支持JPG、PNG和BMP等常见图片格式。</p>
                                <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <div class="avatar-content">
                                      <div class="avatar-tip">
                                        <i class="el-icon-plus avatar-uploader-icon"></i>
                                        <p class="p-info">添加图片</p>
                                        <p class="p-infos">还可以添加<span class="strong">50张</span></p>
                                      </div>
                                    </div>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible">
                                  <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </el-form-item>

                      <el-form-item class="form-box next-step">
                        <el-button type="primary" size="mini" @click="submitForm('ruleForm')">下一步</el-button>
                      </el-form-item>
                    </el-form>
                </div>
                <!-- step 2 -->
                <div v-else-if="step == 2" class="form-main padding-top-20">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px">
                        <h2 class="session"><i>1</i><span>品质服务</span><span class="f14">（选择该套餐提供的品质服务）</span></h2>
                        <div class="line"></div>
                        <el-form-item label="商家承诺：" prop="type">
                            <el-checkbox-group v-model="ruleForm.type" class="shop-promise">
                              <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="美食活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="地推" name="type"></el-checkbox-button>
                              <el-checkbox-button label="线下" name="type"></el-checkbox-button>
                            </el-checkbox-group>
                        </el-form-item>

                        <el-form-item label="订单可退：" prop="type">
                            <el-checkbox-group v-model="ruleForm.type" class="shop-promise">
                              <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="美食活动" name="type"></el-checkbox-button>
                              <el-checkbox-button label="地推" name="type"></el-checkbox-button>
                              <el-checkbox-button label="线下" name="type"></el-checkbox-button>
                            </el-checkbox-group>
                        </el-form-item>


                        <h2 class="session"><i>2</i><span>造型</span></h2>
                        <div class="line"></div>
                        <el-form-item label="新娘服装：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写套餐所包含的新娘服装套数"></el-input>
                                </div>
                                <span>套</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="新郎服装：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写套餐所包含的新郎服装套数"></el-input>
                                </div>
                                <span>套</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="服装说明：" prop="desc">
                            <el-input style="width: 681px;" rows="6" type="textarea" placeholder="提供……搭配" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="造型说明：" prop="desc">
                            <el-input style="width: 681px;" rows="6" type="textarea" placeholder="提供……化妆造型" v-model="ruleForm.desc"></el-input>
                        </el-form-item>


                        <h2 class="session"><i>3</i><span>场景</span></h2>
                        <div class="line"></div>
                        <el-form-item label="拍摄场景：" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                              <el-radio label="内外景结合"></el-radio>
                              <el-radio label="纯外景"></el-radio>
                              <el-radio label="纯内景"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="内景数量：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写套餐所包含的内景数量"></el-input>
                                </div>
                                <span>个</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="外景数量：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写套餐所包含的外景数量"></el-input>
                                </div>
                                <span>个</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="内景说明：" prop="desc">
                            <el-input style="width: 681px;" rows="6" type="textarea" placeholder="请填写该套餐包含的内景名称" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="外景说明：" prop="desc">
                            <el-input style="width: 681px;" rows="6" type="textarea" placeholder="请填写改套餐包含的外景名称" v-model="ruleForm.desc"></el-input>
                        </el-form-item>


                        <h2 class="session"><i>4</i><span>拍摄</span></h2>
                        <div class="line"></div>
                        <el-form-item label="拍摄天数：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该套餐拍摄天数"></el-input>
                                </div>
                                <span>天</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="拍摄张数：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该套餐拍摄张数"></el-input>
                                </div>
                                <span>张</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="精修张数：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该套餐精修张数"></el-input>
                                </div>
                                <span>张</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="入册张数：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请填写该套餐入册张数"></el-input>
                                </div>
                                <span>张</span>
                            </div>
                        </el-form-item>


                        <h2 class="session"><i>5</i><span>成品</span></h2>
                        <div class="line"></div>
                        <el-form-item label="相册数量：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请选择套餐所包含的相册数量"></el-input>
                                </div>
                                <span>本</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="相册说明：" prop="desc">
                            <el-input style="width: 681px;" rows="6" type="textarea" placeholder="请填写相册说明" v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="相框数量：" prop="name" class="form-box">
                            <div class="input-cell">
                                <div class="cell">
                                    <el-input v-model="ruleForm.name" placeholder="请选择套餐所包含的相框数量"></el-input>
                                </div>
                                <span>个</span>
                            </div>
                        </el-form-item>
                        <el-form-item label="相框说明：" prop="desc">
                            <el-input style="width: 681px;" rows="6" type="textarea" placeholder="请填写相框说明" v-model="ruleForm.desc"></el-input>
                        </el-form-item>


                        <h2 class="session"><i>6</i><span>团队</span></h2>
                        <div class="line"></div>
                        <el-form-item label="摄影师：" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                              <el-radio label="资深"></el-radio>
                              <el-radio label="首席"></el-radio>
                              <el-radio label="总监"></el-radio>
                              <el-radio label="专家"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="化妆师：" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                              <el-radio label="资深"></el-radio>
                              <el-radio label="首席"></el-radio>
                              <el-radio label="总监"></el-radio>
                              <el-radio label="专家"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="灯光师：" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                              <el-radio label="有"></el-radio>
                              <el-radio label="无"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="化妆助理：" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                              <el-radio label="有"></el-radio>
                              <el-radio label="无"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="* 微电影拍摄：" prop="resource">
                            <el-radio-group v-model="ruleForm.resource">
                              <el-radio label="有"></el-radio>
                              <el-radio label="无"></el-radio>
                            </el-radio-group>
                        </el-form-item>


                        <h2 class="session"><i>7</i><span>补充说明</span></h2>
                        <div class="line"></div>
                        <el-form-item label="购买须知：" prop="desc">
                            <el-input 
                            style="width: 681px;" 
                            rows="6" 
                            type="textarea" 
                            placeholder="请说明套餐中需要用户注意的其他事项，长度不超过200字，支持换行显示
   例如：
   请提前私信与客服联系
   口头约定档期无效" 
   v-model="ruleForm.desc"></el-input>
                        </el-form-item>
                        <el-form-item label="套餐赠品：" prop="desc">
                            <el-input 
                                style="width: 681px;" 
                                rows="6" type="textarea" 
                                placeholder="选填。请说明套餐中所包含的赠品及数量，长度不超过200字，支持换行显示
   例如：
   精品签到本1本
   签到桌鲜花装饰8朵" v-model="ruleForm.desc"></el-input>
                        </el-form-item>

                        <el-form-item class="form-box next-step">
                            <el-button plain size="mini" @click="preStep('ruleForm')">上一步</el-button>
                            <el-button type="primary" size="mini" @click="submitForm('ruleForm')">下一步</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <!-- step 3-->
                <div v-else-if="step == 3" class="form-main padding-top-0">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px">
                        <div class="pack-main-header">
                            <span class="margin-right-10">套餐服务</span><span class="f14 p-info">婚博会婚纱摄影类服务标准为10步（本套餐服务已选择<span class="strong">6</span>步）</span>
                        </div>
                        <div class="checkbox-list">
                            <el-checkbox-group v-model="checkedservice">
                                <p v-for="item in services" :key="item.id">
                                   <el-checkbox :label="item.id">{{item.label}}</el-checkbox> 
                                </p>
                            </el-checkbox-group>
                        </div>

                        <el-form-item class="form-box next-step">
                            <el-button plain size="mini" @click="preStep('ruleForm')">上一步</el-button>
                            <el-button type="primary" size="mini" @click="submitForm('ruleForm')">下一步</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <!-- step 4-->
                <div v-else-if="step == 4" class="form-main padding-top-0">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px">
                        <div class="pack-main-header">
                            <span class="margin-right-10">套餐标签</span><span class="f14 p-info">(每种属性最多选择2个标签)</span>
                        </div>

                        <div class="tags-list" v-for="tag in tags" :key="tag.id">
                            <div class="tags-label"><i class="icon"></i>{{tag.title}}</div>
                            <div class="tags">
                                <el-checkbox-group  v-model="tag.value" class="shop-promise" :max="2">
                                  <el-checkbox-button v-for="item in tag.list" :label="item.id" :key="item.id">{{item.name}}</el-checkbox-button>
                                </el-checkbox-group>
                            </div>
                        </div>
                        <el-form-item class="form-box next-step"></el-form-item>

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
            step:1,
            breadcrumb: [ //面包屑
                {
                    "name": "店铺管理", //名字
                },
                {
                    "name": "套餐管理", //名字
                    "url":"/shop/pack"
                },
                {
                    "name": "添加套餐", //名字
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
            checkedservice: [],
            services: [
                {
                    label:"一、确定拍摄时间",
                    id:"1"
                },
                {
                    label:"二、到店签合同",
                    id:"2"
                },
                {
                    label:"三、上传合同及相关票据",
                    id:"3"
                },
                {
                    label:"四、预约拍摄时间及地点",
                    id:"4"
                },
                {
                    label:"五、提醒客户相关注意事项",
                    id:"5"
                },
                {
                    label:"六、安排拍摄",
                    id:"6"
                },
                {
                    label:"七、支付剩余尾款",
                    id:"7"
                },
                {
                    label:"八、选精修片",
                    id:"8"
                },
                {
                    label:"九、确认版面、相框等",
                    id:"9"
                },
                {
                    label:"十、取成品",
                    id:"0"
                },
            ],
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
    margin-right: 20px;
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
.next-step{
    text-align: center;
    margin-bottom: 50px;
    padding-top: 30px;
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
.checkbox-list{
    padding: 20px 20px 20px 300px;
}
.checkbox-list p{
    padding-bottom: 20px;
}
.pack-main-header{
    height: 49px;
    line-height: 49px;
    background-color: #FBFBFF;
    font-size: 16px;
    padding: 0 20px;
}
.tags-list{
    padding-top: 30px;
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
.handle-btn{
    display: flex;
    padding-left: 209px;
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
.line{
    height: 1px;
    overflow: hidden;
    font-size: 0;
    background-color: #eee;
    margin: 0 20px 20px;
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
</style>
<style>
.form-main .el-input__inner{
    padding: 0 10px;
}
.form-main .el-input--prefix .el-input__inner{
    padding-left: 30px;
}
.form-main .el-input--suffix .el-input__inner{
    padding-right: 30px;
}
.form-main .input-cell .check-box .el-checkbox__label{
    font-size: 12px;
}
.avatar-uploader .el-upload--text{
    height: 100%;
    width: 100%;
}
.input-img .el-upload-list--picture-card .el-upload-list__item,.input-img .el-upload--picture-card{
    height: 170px;
    width: 138px;
}
.input-img .el-upload-list--picture-card .el-upload-list__item{
    width: 224px;
    vertical-align: top;
}
.pack-imgs-self .el-upload-list--picture-card .el-upload-list__item,.pack-imgs-self .el-upload--picture-card{
    width: 190px;
    height: 283px;
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
.next-step .el-button--mini{
    padding: 0;
    height: 30px;
    line-height: 30px;
    width: 110px;
    text-align: center;

}
.pack-popover{
    border-color:#E1CAFF;
    background-color: #FCF9FF;
}
.pack-popover.el-popper[x-placement^=bottom] .popper__arrow{
    border-bottom-color: #E1CAFF;
}
.pack-popover.el-popper[x-placement^=bottom] .popper__arrow::after{
    border-bottom-color: #FCF9FF;
}
/*step 2*/
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