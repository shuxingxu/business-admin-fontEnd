<template>
    <div>

        <slot></slot>

        <div class="nomaltable" :class="{noborder: !border}">
            <div class="right-button table-button" :class="{tabletabs: tableJson.excelButton && tableJson.excelButton.tableTabs}">
                <span v-for="(excel, excelIndex) in tableJson.excelButton" :key="excelIndex"> 
                    <el-upload
                        v-if="excel.type == 'upload'"
                        class="upload-button"
                        action="https://jsonplaceholder.typicode.com/posts/" 
                        :show-file-list="false">
                        <el-button plain size="mini" class="el-icon-document"> 导入</el-button>
                    </el-upload>
                    <el-button v-if="excel.type == 'export'" plain size="mini" class="el-icon-tickets" @click="export2Excel(tableJson)"> 导出</el-button>
                </span>
            </div>

            <el-table 
            :data="tableData" 
            :border='border' 
            :row-class-name="tableRow" 
            :span-method="tableJson.spanMethod" 
            :cell-style="tableJson.cellstyle"
            header-row-class-name="head-row" 
            v-loading="loading"
            style="width: 100%" 
            ref="multipleTable" 
            @sort-change="sortable" 
            @selection-change="handleSelectionChange">
                    <el-table-column 
                        v-if="tableJson.selectBox" 
                        type="selection" 
                        :align="tableJson.selectBox.center || 'left'" 
                        :width="tableJson.selectBox.width">
                    </el-table-column>
                    <el-table-column 
                        v-for="(column, columnIndex) in tableJson.column" 
                        :key="columnIndex"
                        :sortable="column.sortable || false"
                        :label="column.label" 
                        :prop="column.prop"
                        :width="column.width || ''"
                        :fixed="column.fixed || false"
                        :min-width="column.minWidth"
                        :align="column.align || 'left'"
                        :header-align="column.headerAlign">
                        <template slot-scope="scope">
                            <p v-if="column.type == 'text'" v-html="formatter(scope.row,column,columnIndex,scope.$index)"></p>
                            <!-- <p v-if="column.type == 'text'" v-html="formatter(scope.row[column.prop])"></p> -->

                            <el-popover
                                v-if="column.type == 'hover'"
                                :placement="column.hover.placement || 'bottom'"
                                :title="column.hover.title || ''"
                                :width="column.hover.width || 150"
                                :trigger="column.hover.trigger || 'hover'"
                                :popper-class="column.hover.popperClass || ''"
                                :content="scope.row[column.prop]">
                                <el-button type="text" size="small" slot="reference" v-html="column.hover.label"></el-button>
                            </el-popover>

                            <el-button 
                                v-if="column.type == 'handle'" 
                                v-for="(handle, handleIndex) in column.list" 
                                :key="handleIndex" 
                                size="small" 
                                type="text" 
                                @click="handleButtons(handle, scope)"
                                v-html="handle.label">
                            </el-button>

                            <el-switch
                                v-if="column.type == 'switch'"
                                v-model="scope.row[column.prop]"
                                :active-color="column.config.activeColoe || '#7224D8'"
                                :inactive-color="column.config.inactiveColor || '#999'"
                                :active-value="column.config.value[1]"
                                :inactive-value="column.config.value[0]"
                                @change="switchChange(scope.row, column)">
                            </el-switch>

                        </template>
                    </el-table-column>

            </el-table>

            <div class="pagination" v-if="page.total > page.pageSize">
                <!-- <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="page.total" :current-page="page.currentPage">
                </el-pagination> -->
                <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page.sync="page.currentPage"
                  :page-size="page.pageSize"
                  :total="page.total"
                  layout="prev, pager, next, jumper">
                </el-pagination>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'nomaltable',
        data() {
            return {
                loading: false,
                tableData: [],//表格数据
                tableUrl:"",
                page:{
                    currentPage:1,//当前页
                    pageSize:10,
                },
            }
        },
        props:{
            tableJson: Object,
            url: String,
            border: Boolean,
            axiosType: String,
            pageSize: Number,
        },
        created() {
            this.init();
        },
        watch:{
            url:function(newVal, oldVal){
                console.log(newVal, oldVal)
                if(newVal != oldVal){
                    this.page.currentPage = 1;
                    this.getPageData({  //记录当前页码、每页条数
                        currentPage: this.page.currentPage,
                        pageSize: this.page.pageSize || this.pageSize
                    })
                    this.init();
                }
            }
        },
        mounted(){
           
        },
        computed: {
        },
        methods: {

            init(){ //初始加载
                let page = JSON.parse(sessionStorage.getItem('page'));
                let path = this.$route.path;

                if(page){
                    if(page[path]){
                        this.page.currentPage = page[path].currentPage;
                        this.page.pageSize = page[path].pageSize;
                    }
                    sessionStorage.removeItem("page");
                }
                
                this.page.pageSize = this.pageSize || this.page.pageSize;

                this.getPageData({  //记录当前页码、每页条数
                    currentPage: this.page.currentPage,
                    pageSize: this.page.pageSize || this.pageSize
                })

                this.getData({
                    page: this.page.currentPage,
                    page_size: this.page.pageSize
                });

            },            

            // 获取数据
            getData(params, type) {
                console.log("getData--",params);

                let _this = this;


                params.page = params.page || 1;
                params.page_size = params.page_size || this.page.pageSize || 10;

                this.loading = true;

                this.Axios({
                    url: _this.url,
                    type: type || _this.axiosType,
                    params: params,
                    successfn(d){

                        _this.loading = false;

                        // if(d.code != 0){
                        //     _this.$alert(d.msg, '提示', {type:"error"});
                        //     return;
                        // }
d.data = [{
        "date": "1997-11-11",
        "name": "林丽",
        "address": "吉林省 辽源市 龙山区",
        "show":"0",
        "id": "221",
    }, {
        "date": "1987-09-24",
        "name": "文敏",
        "address": "江西省 萍乡市 芦溪县",
        "show":"1",
        "id": "222",
    }, {
        "date": "1996-08-08",
        "name": "杨秀兰",
        "address": "黑龙江省 黑河市 五大连池市",
        "show":"0",
        "id": "223",
    }, {
        "date": "1978-06-18",
        "name": "魏强",
        "address": "广东省 韶关市 始兴县",
        "show":"1",
        "id": "224",
    }, {
        "date": "1977-07-09",
        "name": "石秀兰",
        "address": "江苏省 宿迁市 宿豫区",
        "show":"0",
        "id": "225",
    }, {
        "date": "1994-09-20",
        "name": "朱洋",
        "address": "海外 海外 -",
        "show":"1",
        "id": "226",
    }, {
        "date": "1980-01-22",
        "name": "傅敏",
        "address": "海外 海外 -",
        "show":"0",
        "id": "227",
    }, {
        "date": "1985-10-10",
        "name": "毛明",
        "address": "内蒙古自治区 包头市 九原区",
        "show":"1",
        "id": "228",
    }, {
        "date": "1975-09-08",
        "name": "何静",
        "address": "西藏自治区 阿里地区 普兰县",
        "show":"0",
        "id": "229",
    }, {
        "date": "1970-06-07",
        "name": "郭秀英",
        "address": "四川省 巴中市 恩阳区",
        "show":"0",
        "id": "220",
    }];

                        if(_this.tableJson.formatter && typeof _this.tableJson.formatter == 'function'){
                            _this.tableData = _this.tableJson.formatter(d.data);
                        }else{
                            _this.tableData = d.data;
                        }

                        let page = d.pagination;

    page = {
        current_page:1,
        page_size:10,
        total:158
    }

                        _this.page.currentPage = parseInt(page.current_page);
                        _this.page.pageSize = parseInt(page.page_size);
                        _this.page.total = parseInt(page.total);

                        _this.getPageData({
                            currentPage: _this.page.currentPage,
                            pageSize: _this.page.pageSize
                        })

                    },
                    errorfn: function(){}

                })

            },
            formatter(row, column, columnIndex, rowIndex) { //格式数据
                if(column.formatter){
                    return column.formatter(row, column, columnIndex, rowIndex)
                }else{
                    return row[column.prop]
                }
            },
            tableRow({row,rowIndex}) { //添加表格斑马线
                if(rowIndex%2 == 1){
                    return "table-row"
                }
            },
            export2Excel(table) { //导出
                let headers = [];
                let props = [];

                table.column.forEach(e => {
                    if(e.prop){
                        props.push(e.prop)
                        headers.push(e.label)
                    }
                })

    　　　　　　require.ensure([], () => {
    　　　　　　　　const { export_json_to_excel } = require('../../vendor/Export2Excel');
    　　　　　　　　const tHeader = headers;
    　　　　　　　　const filterVal = props;
    　　　　　　　　const list = this.tableData;
    　　　　　　　　const data = this.formatJson(filterVal, list);
    　　　　　　　　export_json_to_excel(tHeader, data, table.excelButton.export.name);
    　　　　　　})
    　　　　},
    　　　　formatJson(filterVal, jsonData) {
    　　　　　　return jsonData.map(v => filterVal.map(j => v[j]))
    　　　　},

            switchChange(row, column){  //Switch 开关回调
                console.log("switch", row[column.prop], column)

                let _this = this;
                let params = {};
                let id = column.idName || _this.tableJson.idName || 'id';
                params[id] = row[id]

                params[column.prop] = row[column.prop];

                _this.loading = true;

                _this.Axios({
                    url: column.axiosUrl || _this.url,
                    type: column.axiosType || _this.axiosType,
                    params: params,
                    successfn(res){
                        _this.loading = false;
                        if(res.code != 0){
                            _this.$alert(res.msg, '提示', {type:"error"});

                            _this.tableData.map(e => {
                                if(e[id] == row[id]){
                                   e[column.prop] = e[column.prop] == column.config.value[0] ? column.config.value[1] : column.config.value[0];
                                }
                            })
                        }
                    }
                })
            },

            handleSelectionChange(selection){ //勾选选择框
                console.log(selection)
            },

            handleButtons(handle, scope){
                if(handle.url){
                    this.$router && this.$router.push({ path: handle.url });
                }else if(handle.onClick){
                    handle.onClick(this, this.$parent, scope.row);
                }else{
                    if(handle.type == "delete"){
                        this.handleDelete(handle, scope.row);
                    }

                    handle.callback && handle.callback(this, this.$parent, scope.row);
                }
            },

            handleDelete(handle, row) { //删除
                let _this = this;
                let tipsMsg = handle.tips || "此操作将永久删除, 是否继续?";
                let tipsTitle = handle.tipsTitle || "提示";
                let deleteBtn = handle.deleteBtn || "确定";
                let cancel = handle.cancel || "取消";
                let tipsIcon = handle.tipsIcon || 'warning';

                this.$confirm(tipsMsg, tipsTitle, {
                    confirmButtonText: deleteBtn,
                    cancelButtonText: cancel,
                    type: tipsIcon
                }).then(() => {  //删除

                    _this.loading = true;
                    let params = {};
                    let id = handle.idName || _this.tableJson.idName || 'id';
                    params[id] = row[id]

                    _this.Axios({
                        url: handle.axiosUrl,
                        type: handle.axiosType,
                        params: params,
                        successfn(res){
                            _this.loading = false;

                            if(res.code != 0){
                                _this.$alert(res.msg, '提示', {type:"error"});
                                return;
                            }

                            _this.tableData = _this.tableData.filter(e => {
                                return e[id] != row[id];
                            })
                            
                            _this.$message({
                                type:"success",
                                message: "删除成功！"
                            })
                        } 
                    });

                }).catch(() => { //取消删除
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                });
            },

            // 分页导航
            handleCurrentChange(val) {

                this.page.currentPage = val;

                console.log(this.page.currentPage)

                this.getPageData({
                    currentPage: this.page.currentPage
                })

                this.getData({
                    page: this.page.currentPage,
                    page_size: this.page.pageSize
                });

            },
            handleSizeChange(val) {

                this.page.pageSize = val;
                this.getData({
                    page: this.page.currentPage,
                    page_size:this.page.pageSize
                });
            },

            sortable(data){
                console.log(data)

                if(data.prop && data.order){
                    this.getData({
                        sort:data.prop,
                        sortRule:data.order
                    })
                }
            },

            getPageData({currentPage, pageSize, path}){ //存储页，条数
                let page = {
                    currentPage: currentPage || this.page.currentPage,
                    pageSize: pageSize || this.page.pageSize
                };
                let session = {};
                path = path || this.$route.path;

                session[path] = page;
                
                sessionStorage.setItem("page", JSON.stringify(session));
            },

            Axios({url, type, params, successfn, errorfn}){
                let _data = null;

                type = type || "get";
                params = params || {};

                if(type == 'get'){
                    _data = {
                        params: params
                    }
                }else if(type == 'post'){
                    _data = params;
                }

                this.$axios[type](url, _data)
                .then(function (response) { //success

                    console.log(response.data);

                    successfn && typeof successfn == 'function' && successfn(response.data);

                })
                .catch(function (error) { //error

                    console.log(error);

                    errorfn && typeof errorfn == 'function' && errorfn(error);

                });
            }


        }
    }

</script>

<style scoped>

</style>
