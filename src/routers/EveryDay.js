import React, { Component } from 'react';
import { Breadcrumb, Input, Icon, Select, Button, Table, Divider, message, Upload,
        Tag, DatePicker, LocaleProvider, Modal, Form } from 'antd';
import moment from 'moment';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
// router
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import addons from 'react-addons-update';
import update from 'react-update';

import { Ajax, parseSearch, formatSearch } from '../utils/global';
import { config } from '../utils/config';

// 组件
import Cascader from '../components/Cascader';
// import { createForm } from 'rc-form';


const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/grid');
require('echarts/lib/component/legend');
require('echarts/lib/chart/pie');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/title');

const { RangePicker } = DatePicker;

class component extends Component{
    constructor(props){
        super(props)
        const _this = this;
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 7 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 15 },
          },
        };
        this.update = update.bind(this);
        this.state = {
            permission:{
                
            },
            Modal:{
                
            },
            form:{

            },
            // 工具条查询参数
            toolbarParams:{
                
            },
            // 表格数据
            indexTable:{
                selectedRowKeys:[],
                head:[
                    { title: '日期', dataIndex: 'days', key: 'days'}, 
                    { title: '辖区管理部门', dataIndex: 'department', key: 'department'}, 
                    { title: '权属单位', dataIndex: 'companyName', key: 'companyName'}, 
                    { title: '环卫车数量', dataIndex: 'num', key: 'num'}, 
                    { title: '垃圾桶数', dataIndex: 'garbageNum', key: 'garbageNum'}, 
                    { title: '餐厨垃圾重量', dataIndex: 'type1', key: 'type1', render:(text,record)=>(
                        record.sanitationCarClassResponses.map((el,index)=>{
                            if(el.type==4){
                                return el.weight;
                            }
                        })
                    )}, 
                    { title: '其它垃圾重量', dataIndex: 'type2', key: 'type2', render:(text,record)=>(
                        record.sanitationCarClassResponses.map((el,index)=>{
                            if(el.type==3){
                                return el.weight;
                            }
                        })
                    )}, 
                    { title: '有害垃圾重量', dataIndex: 'type3', key: 'type3', render:(text,record)=>(
                        record.sanitationCarClassResponses.map((el,index)=>{
                            if(el.type==2){
                                return el.weight;
                            }
                        })
                    )}, 
                    { title: '可回收物重量', dataIndex: 'type4', key: 'type4', render:(text,record)=>(
                        record.sanitationCarClassResponses.map((el,index)=>{
                            if(el.type==1){
                                return el.weight;
                            }
                        })
                    )}, 
                    { title: '总重量（t）', dataIndex: 'sumWeight', key: 'sumWeight'}
                ],
                data:[]
            },
            type:'add'
        }
    }
    componentDidMount(){
        this.initIndex();  
        this.initPermission();
    }
    componentWillUnmount() {

    }
    componentWillReceiveProps(nextProps) {
        
    }
    // 初始化权限管理
    initPermission(){
        const _this = this;
        let search = parseSearch(_this.props.location.search);
        Ajax.get({
            url:config.JurisdictionAdmin.urls.list,
            params:{
                type:3,
                fatherMenuId:search.id||''
            },
            success:(data)=>{
                data.forEach((el)=>{
                    _this.state.permission[config.UserAdmin.permission[el.url]] = true;
                })
                _this.setState({});
            }
        })
    }
    /*
     *  初始化页面数据
     */
    initIndex(updateParams){
        const _this = this;
        const params = _this.state.toolbarParams;
        Ajax.get({
            url:config.EveryDay.urls.sanitationCarEveryDay,
            params:{
                ...params,
                startTime:new Date(params.startTime).getTime() || '',
                endTime:new Date(params.endTime).getTime()|| '',
            },
            success:(data)=>{
                _this.update('set',addons(_this.state,{
                    indexTable:{
                        data:{
                            $set:data.data
                        }
                    },
                    ...updateParams
                }))
                _this.drawBar(data.data[0].sanitationCarClassResponses,'pie')
            }
        })
    }
    // 画柱状图
    drawBar(data,id){
        if(!document.getElementById(id)) return;
        const _this = this;
        // 初始化echarts实例
        const myChart = echarts.init(document.getElementById(id));

        let option = {
            title : {
                text: '用户量占比统计',
                top:20,
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c}"
            },
            xAxis: {
                type: 'category',
                data: ['老用户总数','新用户总数']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [data.agedUser,data.newUser],
                type: 'bar',//配置样式
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {   
                    //通常情况下：
                    normal:{  
    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
                            return colorList[params.dataIndex];
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }]
        };

        // 清空画布
        myChart.clear();

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option,true);

        //根据窗口大小自适应图表
        window.addEventListener("resize",()=>{
            myChart.resize();
        });
        
        return myChart;
    }
    render(){
        const _this = this;
        const state = _this.state;
        const update = _this.update;
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        return (
            <div className="content">
                <Breadcrumb>
                    <Breadcrumb.Item>数据统计</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="javascript:;">环卫车每天数据统计</a></Breadcrumb.Item>
                </Breadcrumb>
                
                <div className="main-toolbar">
                    <span className='x-box'>
                        <Input 
                            addonBefore={<span>区域选择：</span>} 
                            className="wrap-input-0"
                            style={{ width: 100 }}/>
                            <Cascader data={state.toolbarParams} onChange={(data)=>{
                                update('set',addons(state,{
                                    toolbarParams:{
                                        pro:{$set:data.pro},
                                        city:{$set:data.city},
                                        area:{$set:data.area},
                                        street:{$set:data.street},
                                        comm:{$set:data.comm}
                                    }
                                }))
                            }}/>
                    </span>
                    
                    
                    
                </div>
                <div className="main-toolbar">
                    <Input onChange={(e)=>{
                        update('set',addons(state,{
                            toolbarParams:{
                                department:{
                                    $set:e.target.value
                                }    
                            }
                        }))
                    }} value={state.toolbarParams.department} 
                    placeholder="请输入辖区管理部门"
                    addonBefore={<span>辖区管理部门</span>} 
                    style={{ width: 300 }} 
                    addonAfter={<a onClick={()=>{
                        _this.initIndex();
                    }} href="javascript:;"><Icon type="search" /></a>}/>
                    <Input onChange={(e)=>{
                        update('set',addons(state,{
                            toolbarParams:{
                                companyName:{
                                    $set:e.target.value
                                }    
                            }
                        }))
                    }} value={state.toolbarParams.companyName} 
                    placeholder="请输入权属单位"
                    addonBefore={<span>权属单位</span>} 
                    style={{ width: 300, marginLeft: 10 }} 
                    addonAfter={<a onClick={()=>{
                        _this.initIndex();
                    }} href="javascript:;"><Icon type="search" /></a>}/>
                </div>
                <div className="main-toolbar">
                    <span className='x-box'>
                        <Input 
                            addonBefore={<span>时间查询：</span>} 
                            className="wrap-input-0"
                            style={{ width: 100 }}/>
                            <LocaleProvider locale={zh_CN}>
                                <RangePicker value={state.toolbarParams.startTime ? [moment(state.toolbarParams.startTime, 'YYYY/MM/DD'),moment(state.toolbarParams.endTime, 'YYYY/MM/DD')] : []} onChange={(date,dateString)=>{
                                    // state.toolbarParams.startTime = dateString[0];
                                    // state.toolbarParams.endTime = dateString[1];
                                    update('set',addons(state,{
                                        toolbarParams:{
                                            startTime:{
                                                $set:dateString[0]
                                            },
                                            endTime:{
                                                $set:dateString[1]
                                            }    
                                        }
                                    }))
                                    // _this.initIndex();
                                }} />
                            </LocaleProvider>
                    </span>
                    
                    
                </div>
                <div className="main-toolbar">
                    <Button style={{marginRight:10}} type="primary" onClick={()=>{
                        state.toolbarParams={};
                        _this.setState({});
                    }}>重置</Button>
                    <Button style={{marginRight:10}} type="primary" onClick={()=>{
                        _this.initIndex();
                    }}>查询</Button>
                    
                </div>
                <Table 
                    rowKey={record=>record.id}
                    pagination={false}
                    columns={state.indexTable.head} 
                    dataSource={state.indexTable.data} />
                <div style={{height:'400px'}}>
                    <div style={{width:'100%',height:'400px',float:'left'}}>
                        <div style={{width:'100%',height:'100%'}} id="pie"></div>
                    </div>
                </div>
            </div>
        );
    }
}
const App = withRouter(component);
export default App;
