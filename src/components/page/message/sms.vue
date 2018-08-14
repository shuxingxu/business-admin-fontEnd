<template>
    <div class="page">
        <div class="page-header">
            <div class="crumbs">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>消息</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="page-content">
            <div class="page-main">
                <table-tabs :page-tabs="menus" @tabs-click='tabclick'></table-tabs>
                <div v-show="index===0">
                    <talk-box :table='false' :talk='true' :url='"ws://172.16.1.250:9502?from=front&token="+token'></talk-box>
                </div>
                <div v-show="index===1">
                    <ul>
                        <li class="question" v-for="(v,i) in 5" :key="i">
                            <div class="q-title">
                                <img src="" alt="">
                                <p class="f12 text-muted">丹尼斯的问题</p>
                                <span class="f12 text-muted">1018-05-24  17:25:50</span>
                            </div>
                            <div class="q-question">
                                <i></i><span  class="f14 text-info">最快档期什么时候可以拍呢？好着急的，在线等！</span>
                                <p class="f12 text-muted">（提问套餐：春季户外浪漫婚纱摄影总览）</p>
                            </div>

                            <div class="q-answer" v-if="v.answer">
                                <i></i>
                                <p  class="f14 text-info">{{answer | short}}<span class="showalltext" @click="answerclick($event,answer)">…阅读全文</span></p>

                            </div>
                            <div class="q-inputanswer" v-if="status[i] === 1 && !v.answer">
                                <div>
                                    <el-input
                                    class="f14 text-info"
                                    type="textarea"
                                    :autosize="{ minRows: 4, maxRows: 6}"
                                    placeholder="请输入内容"
                                    :v-model="textarea[i]">
                                    </el-input>                                
                                </div>
                                <el-button type="primary" @click="confirm(i);statuslist.splice(i,1,0)">确定</el-button>
                            </div>
                            <div class="q-toanswer" v-if="status[i] === 0 && !v.answer">
                                <i></i><span class="f14 text-muted">暂无回答</span>
                                <el-button type="primary" @click="statuslist.splice(i,1,1)">回答</el-button>
                            </div>
                        </li>
                    </ul>
                </div>                
            </div>

            
        </div>
    </div>
</template>
<script>
import TalkBox from '@/components/common/TalkBox.vue'
import TableTabs from '@/components/common/TableTabs'
export default {
    data() {
        return {
            statuslist:[],
            answer:"订什么样的酒店、餐饮标准、出行人数，婚礼所化费用，婚礼完成后蜜月旅行这一切都要包含在内的总预算一定要有。如果带的人多，新人酒店可以与朋友酒店分开选择。不必要一股脑全都要住到国际星级酒店里，一晚好几千块钱，人数多了钱自然不会少。如果是土豪，请自行掠过",
            textarea:[],
            index:0,
            menus: {
                "type": "card",
                "list": [{
                        "label": "顾客消息",
                        "name": '0',
                    },
                    {
                        "label": "问大家",
                        "name": '1',
                    }
                ],
                "activeVal": '0' //初始值
            }
        }
    },
    components: {
        TalkBox,
        TableTabs
    },
    created() {
        this.token = this.$store.state.user.sid;
        console.log(this.token)
        for(let i = 0;i<5;i++){
            this.statuslist[i] = 0
        }
    },
    filters:{
        short(v){
            if (!v) return ''
            v =v.toString().split('').splice(0,100).join("")
            return v
        }
    },
    computed: {
        status(){
            return this.statuslist
        }
    },
    mounted(){
        console.log('这里这里',this.answer)
    },
    methods: {
        tabclick(v,i){
            this.index = v
        },
        answerclick(el,v){
            el.target.parentElement.innerText=v
        },
        confirm(i){
            // post textarea[i]
        }
    }
}
</script>
<style scoped lang='less'>
li{
    list-style: none
}
li.question{
    margin-bottom: 3px;
    padding:20px 60px 30px 73px;
    background-color: #fff;
}
.q-title{
    margin-bottom: 20px;
    p{
        display: inline;
    }
    span{
        float: right;
    }
}
.q-question{
    margin-bottom: 20px;
}
.q-answer{
    margin-bottom: 20px;
}
.q-answer /deep/ .showalltext{
    cursor: pointer;
    color: #7224D8;
}
.q-answer /deep/ .showalltext::after{
    cursor: pointer;
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    border: 1px solid #7224D8;
    transform: rotate(45deg) translateX(1px) translateY(-5px);
    border-top: transparent;
    border-left: transparent
}
.q-inputanswer{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    div{
        margin-bottom: 10px;
    }
    button{
        width: 56px;
        align-self:flex-end; 
    }
}
.q-toanswer{
    // margin-bottom: 20px;
    button{
        float: right;
    }
}
</style>