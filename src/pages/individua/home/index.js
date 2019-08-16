import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Button,Input} from 'antd';
import {actionCreators} from '../store';
import { MySearch,MyTableContent } from '../style';
import { Table} from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios'
class Home  extends Component{  
    constructor(props){
        super(props);
        this.state={
          data:[],
          userName:''
          
        }
      }
      componentDidMount(){
        let url='http://192.168.3.236:8088/peasantClients?limit=1000&page=0'
        axios.get(url    
        ).then((res)=>{
            console.log(res);//打印返回信息
            this.setState({           
              data:res.data.list, //根据返回信息配置      
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
        axios.delete('http://192.168.3.236:8088/peasantClient/'+id)
        .then((res)=>{ 
          console.log(res);       
          if(res.data===1){           
            alert("删除成功")
            let url='http://192.168.3.236:8088/peasantClients?limit=1000&page=0'
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
        let url='http://192.168.3.236:8088/peasantClients?keywords='+this.state.userName+'&limit=1000&page=0'
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
       

 
        const columns = [
          {
            title: '客户号',
            dataIndex: 'customerId',
            key: 'customerId',
            fixed:'left',
            width:120,


           
          },
          {
            title: '借款人姓名',
            dataIndex: 'name',
            key: 'name',
            fixed:'left',
            width:120,
            
          },
          {
            title: '证件类型',
            dataIndex: 'certificateType',
            key: 'certificateType',
            width:110,
            
          },
          {
            title: '借款人身份证号码',
            dataIndex: 'borrowerIdNumber',
            key: 'borrowerIdNumber',
            width:175,
         
          },
          {
            title: '手机',
            dataIndex: 'mobilePhone',
            key: 'mobilePhone',
            width:120,
           
          },
          {
            title: '职业',
            dataIndex: 'career',
            key: 'career',
            width:120,
         
          },
          {
            title: '学历',
            dataIndex: 'education',
            key: 'education',
            width:120,
            
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
                 scroll={{ x: 1100, y: 250 }}
                 />          
             </MyTableContent>
             <Link style={{float:'right'}} to={'/add'}>新增</Link> 
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