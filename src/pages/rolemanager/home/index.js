import 'antd/dist/antd.css';
import React, { Component} from 'react';
import { MySearch } from '../style';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Table,Button} from 'antd';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class RoleHome extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[],
        }
      }
      componentDidMount(){
        let url='http://192.168.3.236:8088/sysRoles?limit=1000&page=0'
        axios.get(url    
        ).then((res)=>{
            console.log(res.data.data);
            this.setState({           
              data:res.data.data,       
              });                 
        }).catch((error)=>{
            alert(error)
        });
      }
    
      deleteRole(id){
        axios.delete('http://192.168.3.236:8088/sysRole/'+id)
        .then((res)=>{
         // console.log(res)         
          if(res.data.msg==="删除成功"){
            
            alert("删除成功")
            let url='http://192.168.3.236:8088/sysRoles?limit=1000&page=0'
            axios.get(url    
            ).then((res)=>{
                console.log(res.data.data);
                this.setState({           
                  data:res.data.data,       
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
          render(){
              const {data}=this.state;
              const columns = [
                {
                  title: '编号',
                  dataIndex: 'id',
                  key: 'id',
                 
                 
                 
                },
                {
                  title: '角色名',
                  dataIndex: 'name',
                  key: 'name',
                
               
                  
                },
                {
                  title: '更新日期',
                  dataIndex: 'updateDate',
                  key: 'updateDate',
                 
                  
                },
                {
                  title: '创建日期',
                  dataIndex: 'createTime',
                  key: 'createTime',
                
                  
                },
               
                {
                  title: '详情',             
                                       
                  render: (record) =>
                    ( <div>
                      <Link to={'/change/'+record.id}> <Button >修改</Button> </Link> 
                       <Button onClick={()=>this.deleteRole(record.id)}>删除</Button>  
                      </div>                            
                    )
                }
                
                  
                
              ]; 
        return (
            <div>
                <MySearch>                    
                <Button  icon="add" >  <Link to={'/add'}>新增角色</Link></Button><br/>
             </MySearch> 
             <Table  pagination={false}
                bordered  
                columns={columns} 
                dataSource={(data)} 
                rowKey='id' 
                />  
        </div>
        )
}
}

export default withRouter(RoleHome);