import React, { Component } from 'react';
import { Breadcrumb, Input, Icon, Select, Button, Form, Table, Upload, LocaleProvider,
    Divider, Tag, DatePicker, Modal, message } from 'antd';

import moment from 'moment';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

// router
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import addons from 'react-addons-update';
import update from 'react-update';

import { Ajax, formatSearch, parseSearch } from '../utils/global';
import { config } from '../utils/config';

// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'


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
                add:false,
                importExcelUser:true,
                update:false,
                list:false,
                audit:false
            },
            Modal :{
                visCate:false,
                visAudit:false
            },
            text:'',
            // 表格数据
            indexTable:{
                selectedRowKeys:[],
                pagination:{
                    current:1,
                    total:0,
                    pageSize:10,
                    onChange(page){
                        _this.state.indexTable.pagination.current = page;
                        _this.initIndex();
                    }
                },
                head:[
                    { title: '内容', dataIndex: 'data', key: 'data', render:(text)=>(
                        <div dangerouslySetInnerHTML={{__html:text}}></div>
                    )}, 
                    { title: '操作', dataIndex: 'operation', key: 'operation',render:()=>(
                        <a onClick={()=>{
                            _this.state.Modal.visUpdate = true;
                            _this.state.text = BraftEditor.createEditorState(null);
                            _this.setState({});
                        }} href="javascript:;">修改</a>
                    )} 
                ],
                data:[]
            },
           
            Modal:{
                visUpdate:false
            }
        }
    }
    componentDidMount(){
        this.initIndex()
        this.initPermission()
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
                fatherMenuId:search.id
            },
            success:(data)=>{
                data.forEach((el)=>{
                    _this.state.permission[config.Category.permission[el.url]] = true;
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
        return new Promise((resolve,reject)=>{
            Ajax.get({
                url:config.AdminApp.urls.details,
                params:{},
                success:(data)=>{
                    _this.update('set',addons(_this.state,{
                        indexTable:{
                            data:{
                                $set:[{
                                    'data':data
                                }]
                            }
                        },
                        ...updateParams
                    }))
                    resolve();
                }
            })
        })
    }
    submitContent(){
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log(htmlContent)
    }
    handleEditorChange(editorState){
        this.update('set',addons(this.state,{
            text:{$set:editorState}
        }))
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
                    <Breadcrumb.Item>使用指南管理</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="javascript:;">使用指南列表</a></Breadcrumb.Item>
                </Breadcrumb>
                <div className="main-toolbar"></div>
                <Table 
                    rowKey={record=>record.data} pagination={state.indexTable.pagination} 
                    columns={state.indexTable.head} dataSource={state.indexTable.data} />
                <div style={{marginTop:-42,textAlign:'right'}}>
                    <span style={{paddingRight:10}}>共{ state.indexTable.pagination.total }条</span>
                </div>
                <Modal title="修改"
                    onCancel={()=>{
                        update('set',addons(state,{Modal:{visUpdate:{$set:false}}}))
                    }}
                    onOk={()=>{
                        Ajax.post({
                            url:config.AdminApp.urls.update,
                            params:{
                                text:state.text.toHTML()
                            },
                            success:(data)=>{
                                _this.initIndex({
                                    Modal:{
                                        visUpdate:{
                                            $set:false
                                        }
                                    }
                                });
                            }
                        })
                    }}
                    width={800}
                    okText="确定"
                    cancelText="取消"
                    visible={state.Modal.visUpdate}>
                    
                    <BraftEditor
                        value={state.text}
                        onChange={_this.handleEditorChange.bind(_this)}
                        media={{
                            accepts: {audio:false,video:false},
                            uploadFn:(param)=>{
                                const serverURL = 'http://118.190.145.65:8888/flockpeak-shop/ossImg/upload'
                                const xhr = new XMLHttpRequest
                                const fd = new FormData()
                                const successFn = (response) => {
                                    // 假设服务端直接返回文件上传后的地址
                                    // 上传成功后调用param.success并传入上传后的文件地址
                                    param.success({
                                        url: JSON.parse(xhr.responseText).data.split('?')[0],
                                        meta: {
                                            id: 'xxx',
                                            title: 'xxx',
                                            alt: 'xxx',
                                            loop: false, // 指定音视频是否循环播放
                                            autoPlay: false, // 指定音视频是否自动播放
                                            controls: false, // 指定音视频是否显示控制栏
                                            poster: 'http://xxx/xx.png', // 指定视频播放器的封面
                                        }
                                    })
                                }

                                const progressFn = (event) => {
                                    // 上传进度发生变化时调用param.progress
                                    param.progress(event.loaded / event.total * 100)
                                }

                                const errorFn = (response) => {
                                    // 上传发生错误时调用param.error
                                    param.error({
                                      msg: 'unable to upload.'
                                    })
                                }
                                xhr.upload.addEventListener("progress", progressFn, false)
                                xhr.addEventListener("load", successFn, false)
                                xhr.addEventListener("error", errorFn, false)
                                xhr.addEventListener("abort", errorFn, false)
                                fd.append('file', param.file)
                                xhr.open('POST', serverURL, true)
                                xhr.send(fd)
                            }
                        }}
                        onSave={_this.submitContent.bind(_this)}/>
                </Modal>
            </div>
        );
    }
}
const App = withRouter(component);
export default App;
