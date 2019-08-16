import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Button,Input} from 'antd';
import { MySearch } from '../style';
import {Link} from 'react-router-dom'
import { Table} from 'antd';
import axios from 'axios';
class UserSearch extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[],
          rolename:''
        }
      }
      componentWillMount(){
        let url='http://192.168.3.236:8088/users?limit=1000&page=0'
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
      checkchange(userId){
        console.log(userId)
      }
      deleteUser(userId){
       // this.context.router.push({ pathname : '/add', state : { msg : '' }});  
        axios.delete('http://192.168.3.236:8088/user/'+userId)
        .then((res)=> {
          console.log(res)  
         if(res.data===1){
            alert("删除成功")
            let url='http://192.168.3.236:8088/users?limit=1000&page=0'
        axios.get(url    
        ).then((res)=>{
            console.log(res.data.list);
            this.setState({           
              data:res.data.list,       
              });                 
        }).catch((error)=>{
            alert(error)
        });
         }else{

         }
        })
        .catch( (error)=> {
          console.log(error)    
        })
      }
          render(){
              const {data}=this.state;
              const columns = [
                {
                  title: '工号',
                  dataIndex: 'workNum',
                  key: 'workNum',
                 
                 
                 
                },
                {
                  title: '用户名',
                  dataIndex: 'username',
                  key: 'username',         
                  
                },
                {
                  title: '姓名',
                  dataIndex: 'name',
                  key: 'name',         
                  
                },
                {
                  title: '电话',
                  dataIndex: 'mobile',
                  key: 'mobile',
                 
                  
                },
                {
                  title: '邮箱',
                  dataIndex: 'email',
                  key: 'email',
                
                  
                },
                {
                  title: '公司',
                  dataIndex: 'team',
                  key: 'team',           
                },
               
                {
                  title: '详情',             
                                       
                  render: (record) =>
                    ( <div>
                      <Link to={'/change/'+record.userId}> <Button onClick={()=>this.checkchange(record.userId)}>修改</Button> </Link> 
                       <Button onClick={()=>this.deleteUser(record.userId)}>删除</Button>  
                      </div>                            
                    )
                }
                
                  
                
              ]; 
        return (
            <div>
                <MySearch>
                客户名称：
                <Input  style={{ width: '15%',marginRight:'15%',marginLeft:'5%' }} placeholder="请输入客户名称" />
                客户号：
                <Input  style={{ width: '15%',marginRight:'20%' }} placeholder="请输入客户号" />
                <Button  icon="search">查询用户</Button>
                <Button  icon="add" >  <Link to={'/add'}>新增用户</Link></Button><br/>
             </MySearch> 
             <Table  pagination={false}
                bordered  
                columns={columns} 
                dataSource={(data)} 
                rowKey='userId' 
                /> 
        </div>
        )
    }
}

export default  connect(null,null)(UserSearch);