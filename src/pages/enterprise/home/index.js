import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Button,Input} from 'antd';
import {actionCreators} from '../store';
import { MySearch,MyTableContent } from '../style';
import { Table} from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Upload, message, Icon } from 'antd';
class Home  extends Component{  
    constructor(props){
        super(props);
        this.state={
          data:[],
          userName:''
          
        }
      }
      componentWillMount(){
        let url='http://192.168.3.236:8088/CorporateInfos?limit=1000&page=0'
        axios.get(url    
        ).then((res)=>{
            console.log(res.data.list);
            this.setState({           
              data:res.data.list,       
              });                 
        }).catch((error)=>{
            alert(error)
        });
      }
     userName=(event)=>{
        console.log(this.state.userName)
        this.setState({
          userName:event.target.value
        })
      }
      deleteInfo(id){
        axios.delete('http://192.168.3.236:8088/CorporateInfo/'+id)
        .then((res)=>{        
          if(res.data===1){           
            alert("删除成功")
            let url='http://192.168.3.236:8088/CorporateInfos?limit=1000&page=0'
            axios.get(url    
            ).then((res)=>{
                console.log(res.data.list);
                this.setState({           
                  data:res.data.list
                  }); 
                  console.log(this.state.data)
            }).catch((error)=>{
                alert(error)
            });
        }else{
          alert("删除失败")
        }   
        })
        .catch((error)=>{
          console.log(error)    
        })
      }
      SearchByName(){
        let url='http://192.168.3.236:8088/CorporateInfos?keywords='+this.state.userName+'&limit=1000&page=0'
        axios.get(url    
        ).then((res)=>{
            console.log(res.data.list);
            this.setState({           
              data:res.data.list,       
              });                 
        }).catch((error)=>{
            alert(error)
        });
        
      }
      
    render(){  
        const {data}=this.state;
       

          const uploading = {
            accept:".xls",
            action: 'http://192.168.3.236:8088/uploadCorporateInfo',      
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };
        const columns = [
         
          {
            title: '客户名',
            dataIndex: 'clientName',
            key: 'id',
            width:250,
            fixed:'left',
            
          },
          {
            title: '联系方式',
            dataIndex: 'contactInformation',
            key: 'contactInformation',
            width: 120,
            fixed:'left'
          },
          {
            title: '行业名',
            dataIndex: 'industry',
            key: 'industry',
            width: 100,
           
           
          },
          {
            title: '客户民间声誉情况',
            dataIndex: 'privateReputation',
            key: 'privateReputation',
            width: 120,  
          },
          {
            title: '国家级专利个数',
            dataIndex: 'nationalPatents',
            key: 'nationalPatents',
            width: 120,
            
          },
          {
            title: '新产品认定级别',
            dataIndex: 'productLevel',
            key: 'productLevel',
            width: 120,
            
          },
        
          {
            title: '企业员工数量',
            dataIndex: 'employeesNumber',
            key: 'employeesNumber',
            width: 120,
         
          },
          {
            title: '是否有政府背景',
            dataIndex: 'governmentBackground',
            key: 'governmentBackground',
         
            width: 120,
           
          },
          {
            title: '是否有民间贷款',
            dataIndex: 'privateLending',
            key: 'privateLending',
            width: 120,
         
          },
          {
            title: '产品销售范围',
            dataIndex: 'productSales',
            key: 'productSales',
            width: 120,
         
          },
          {
            title: '名牌产品级别',
            dataIndex: 'productsLevel',
            key: 'productsLevel',
            width: 120,
         
          },
          {
            title: '详情',             
            width: 150,
            fixed:'right',            
            render: (record) =>
              ( <div>
                <Button ><Link to={'/check/'+record.id}>查询</Link>   </Button>
                <Button onClick={()=>this.deleteInfo(record.id)} >删除</Button>
              </div>
                                             
              )
          }
          
            
          
        ];     
        return (
            <div>
            <MySearch>
                客户名称：
                
                <Input  style={{ width: '15%',marginRight:'15%',marginLeft:'5%' }} placeholder="请输入客户名称" onChange={this.userName} />
                客户号：
                <Input  style={{ width: '15%',marginRight:'20%' }} placeholder="请输入客户号" />
               <Button  onClick={ ()=>this.SearchByName()} icon="search">查询</Button><br/>
            </MySearch>    
             <MyTableContent>
             <Table  pagination={false}
                 bordered  
                 columns={columns} 
                 dataSource={(data)} 
                 rowKey='id' 
                 size="middle" 
                 scroll={{ x: 1600, y: 280 }}
                 />           
             </MyTableContent>
             <Link style={{float:'right'}} to={'/add'}>新增</Link> 
             <Upload {...uploading}>
                <Button>
                  <Icon type="upload" /> 上传文件
                </Button>
              </Upload> 
             </div>
            )   
          
      }
     }
  
  const mapDispatch=(dispatch)=>{
    return{
        ListShow(){
            dispatch(actionCreators.ListShow())
        }
    }
  }
  export default  connect(null,mapDispatch)(Home );