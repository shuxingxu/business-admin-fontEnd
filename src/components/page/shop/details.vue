<template>
    <div class="marketGame page">
        <div class="page-header">
            <bread-crumb :bread-crumb="breadcrumb"></bread-crumb>
        </div>
        <div class="page-content">
            <div class="w-full container"> 
                <div class="taps-box">
                    <table-tabs :page-tabs="menus" @tabs-click="tabClick"></table-tabs>
                    <div class="right-btn">
                        <router-link to="/shop/addpack"><el-button type="primary" size="mini">编辑</el-button></router-link>
                        <el-button plain size="mini" class="reset">预览</el-button>
                    </div>
                </div>
                <div v-if="menus.activeIndex == 1" class="pack-content">
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des"><p class="text-default"> 【森系婚礼】18年大热 镜面 T 台水晶布景超炫灯光</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des"><p class="text-default"> 【森系婚礼】18年大热 镜面 T 台水晶布景超炫灯光</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des"><p class="text-default"> 【森系婚礼】18年大热 镜面 T 台水晶布景超炫灯光</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des"><p class="text-default"> 【森系婚礼】18年大热 镜面 T 台水晶布景超炫灯光</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des"><p class="text-default"> 【森系婚礼】18年大热 镜面 T 台水晶布景超炫灯光</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des">
                            <div class="pack-img">
                                <img src="/static/img/img.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des">
                            <div class="pack-img">
                                <ul>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des"><p class="text-default w-1-80">场景中极具特色的水晶灯由1314个大大小小的施华洛世奇水晶排列而成，每一个角度都摇曳闪耀，令人心动。在设计师看来，水晶灯那种夺目的闪耀和神秘感像极了每对恋人相爱的时候，希望每一对新人都能在这个场景中感应到最初的那份炽爱，收获经久不衰的甜蜜爱情。</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right"><p class="text-info"> 套餐名称：</p></div>
                        <div class="pack-des">
                            <div class="pack-img">
                                <ul>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li><img src="/static/img/img.jpg"></li>
                                    <li>
                                        <img src="/static/img/img.jpg">
                                        <a class="more" href="javascript:;" @click="showImgs()"><span>查看更多</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div v-else-if="menus.activeIndex == 2" class="pack-content">
                    <h2 class="session"><i>1</i><span>品质服务</span><span class="f14">（选择该套餐提供的品质服务）</span></h2>
                    <div class="line"></div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info line-height-30"> 套餐名称：</p></div>
                        <div class="pack-des">
                            <div class="pack-des-tap">
                                <ul>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info line-height-30"> 套餐名称：</p></div>
                        <div class="pack-des">
                            <div class="pack-des-tap">
                                <ul>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                    <li>sadfdas</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <h2 class="session"><i>2</i><span>造型</span></h2>
                    <div class="line"></div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 新娘服装：</p></div>
                        <div class="pack-des"><p class="text-default"> 4套</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 新郎服装：</p></div>
                        <div class="pack-des"><p class="text-default"> 4套</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 服装说明：</p></div>
                        <div class="pack-des"><p class="text-default"> 提供精致白纱、晚礼、特色服装整体搭配【城市恋人拍摄区】</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 造型说明：</p></div>
                        <div class="pack-des"><p class="text-default"> 提供首席摄影、化妆团队量身定制全程拍摄【全程贴心服务】提供拍摄新娘化妆造型4款提供拍摄新郎化妆造型全程</p></div>
                    </div>

                    <h2 class="session"><i>3</i><span>场景</span></h2>
                    <div class="line"></div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 新娘服装：</p></div>
                        <div class="pack-des"><p class="text-default"> 4套</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 新郎服装：</p></div>
                        <div class="pack-des"><p class="text-default"> 4套</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 服装说明：</p></div>
                        <div class="pack-des"><p class="text-default"> 提供精致白纱、晚礼、特色服装整体搭配【城市恋人拍摄区】</p></div>
                    </div>
                    <div class="pack-list">
                        <div class="pack-label text-right w-120"><p class="text-info"> 造型说明：</p></div>
                        <div class="pack-des"><p class="text-default"> 提供首席摄影、化妆团队量身定制全程拍摄【全程贴心服务】提供拍摄新娘化妆造型4款提供拍摄新郎化妆造型全程</p></div>
                    </div>
                    <h2 class="session"><i>4</i><span>拍摄</span></h2>
                    <div class="line"></div>
                    <h2 class="session"><i>5</i><span>成品</span></h2>
                    <div class="line"></div>
                    <h2 class="session"><i>6</i><span>团队</span></h2>
                    <div class="line"></div>
                    <h2 class="session"><i>7</i><span>补充说明</span></h2>
                    <div class="line"></div>

                </div>


                <div v-else-if="menus.activeIndex == 3" class="pack-des-main">
                    
                        <div class="pack-main-header">
                            <span class="margin-right-10">套餐服务</span><span class="f14 p-info">婚博会婚纱摄影类服务标准为10步（本套餐服务已选择<span class="strong">6</span>步）</span>
                        </div>
                        <div class="checkbox-list">
                            <el-checkbox-group v-model="checkedservice">
                                <p v-for="item in services" :key="item.id">
                                   <el-checkbox :label="item.id" disabled>{{item.label}}</el-checkbox> 
                                </p>
                            </el-checkbox-group>
                        </div>
                </div>


                <div v-else-if="menus.activeIndex == 4" class="pack-content">
                    <div class="tags-list" v-for="tag in tags" :key="tag.id">
                        <div class="tags-label"><i class="icon"></i>{{tag.title}}</div>
                        <div class="tags">
                            <el-checkbox-group  v-model="tag.value" class="shop-promise" :max="2">
                              <el-checkbox-button v-for="item in tag.list" :label="item.id" :key="item.id">{{item.name}}</el-checkbox-button>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog
            title="图片浏览"
            :visible.sync="dialogVisible">
            <div class="pack-dialog">
                <a class="btn pre" href="javascript:;"><i class="el-icon-arrow-left f26"></i></a>
                <div class="dialog-img"><img src="http://img.zcool.cn/community/017fcc5535f1710000001e3101c50c.jpg"></div>
                <a class="btn next" href="javascript:;"><i class="el-icon-arrow-right f26"></i></a>
            </div>
        </el-dialog>

    </div>
</template>
<script>
import BreadCrumb from '@/components/common/BreadCrumb'
import TableTabs from '@/components/common/TableTabs'

export default {
    name: 'tabletest',
    data() {
        return {
            breadcrumb: [ //面包屑
                {
                    "name": "套餐管理", //名字
                },
                {
                    "name": "查看详情", //名字
                }
            ],
            dialogVisible: false,
            menus: {
                "type": "menu",
                "router": "off",
                "list": [{
                        "label": "套餐信息",
                        "index": "1",
                    },
                    {
                        "label": "套餐内容",
                        "index": "2",
                    },
                    {
                        "label": "套餐服务",
                        "index": "3",
                    },
                    {
                        "label": "套餐标签",
                        "index": "4",
                    }
                ],
                "activeIndex": "4" //初始值
            },
            checkedservice: ["1","3","4","5"],
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
                    value:["0","3"],
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
                    value:["0","3"],
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
                    title:"时间",
                    value:["0","3"],
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
        TableTabs
    },
    created() {
    },
    computed: {

    },
    methods: {
        tabClick(index){
            this.menus.activeIndex = index;
            console.log(index)
        },
        showImgs(){
            this.dialogVisible = true;
        }

    }
}
</script>
<style scoped lang='less'>

.taps-box{
    position: relative;
}
.taps-box .right-btn{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
}
.reset{
    color: #7224d8;
    border-color:#7224d8;
    margin:0 10px 0 20px;
}
.reset:hover{
    background-color: rgba(197,164,239,0.2);
}
.pack-list{
    margin-bottom: 28px;
    font-size: 14px;
    display: flex;
}
.pack-list p{
    line-height: 20px;
}
.pack-label{
    width: 200px;
    flex-shrink: 0;
}
.pack-content{
    padding-top: 40px;
}
.pack-img{
    padding-top: 3px;
}
.pack-img ul li{
    margin:0 10px 10px 0;
    list-style: none;
    display: inline-block;
    position: relative;
}
.pack-img ul li .more{
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pack-img ul li .more:hover{
    background-color: rgba(0,0,0,0.3);
}
.pack-dialog{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
}
.pack-dialog .btn{
    position: absolute;
    top: 50%;
    margin-top: -20px;
    background-color: rgba(0,0,0,0.6);
    color: #fff;
    border-radius: 50%;
    /*display: none;*/
}
.pack-dialog:hover .btn{
    display: block;
}
.pack-dialog .btn>i{
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
}
.pack-dialog .btn:hover{
    background-color: rgba(0,0,0,0.4);
}
.pack-dialog .btn.pre{
    left: 10px;
}
.pack-dialog .btn.next{
    right: 10px;
}
.dialog-img img{
    max-width: 100%;
    max-height: 600px;
}
.session{
    font-weight: normal;
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #666;
    display: flex;
    align-items: center;
    padding-left: 6px;
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
.pack-des .pack-des-tap ul li{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    min-width: 98px;
    text-align: center;
    color: #7224d8;
    border: 1px solid #7224d8;
    margin-right: 10px;
    border-radius: 6px;
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


.line{
    height: 1px;
    overflow: hidden;
    font-size: 0;
    background-color: #eee;
    margin-bottom: 20px;
}
.w-1-80{
    width: 80%;
}
.w-120{
    width: 120px;
}
.line-height-30{
    line-height: 30px !important;
}
</style>
<style>
.pack-des-main .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{
    background-color: #7224D8;
    border-color: #7224D8;
}
.pack-des-main .el-checkbox__input.is-checked+.el-checkbox__label{
    color: #7224D8;
}
.shop-promise .el-checkbox-button__inner{
    border:1px solid #dcdfe6;
    border-radius: 5px !important;
}
.shop-promise .el-checkbox-button{
    margin-right: 10px;
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