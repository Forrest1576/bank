import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Button} from 'antd';
import { MySearch } from '../style';
import {Link} from 'react-router-dom'
import { Table} from 'antd';
import axios from 'axios';
class PermissionSearch extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[],
          
        }
      }
      componentWillMount(){
        let url='http://192.168.3.236:8088/sysPermissions?limit=1000&page=0'
        axios.get(url    
        ).then((res)=>{
            console.log(res);
            this.setState({           
              data:res.data.data,       
              });                 
        }).catch((error)=>{
            alert(error)
        });
      }
      deletePermissions(id){
       // this.context.router.push({ pathname : '/add', state : { msg : '' }});  
        axios.delete('http://192.168.3.236:8088/sysPermission/'+id)
        .then((res)=> {
          console.log(res)  
          //this.forceUpdate();
          if(res.data.msg==="删除成功"){
              alert("删除成功")

            let url='http://192.168.3.236:8088/sysPermissions?limit=1000&page=0'
            axios.get(url    
            ).then((res)=>{
                console.log(res);
                this.setState({           
                  data:res.data.data,       
                  });                 
            }).catch((error)=>{
                alert(error)
            });
          }else{

          }
        })
        .catch((error)=> {
          console.log(error)    
        })
      }
          render(){
              const {data}=this.state;
              const columns = [
                {
                  title: '权限id',
                  dataIndex: 'id',
                  key: 'id',
                 
                 
                 
                },
                {
                  title: '权限名',
                  dataIndex: 'name',
                  key: 'name',         
                  
                },
                {
                  title: '权限链接',
                  dataIndex: 'href',
                  key: 'href',         
                  
                },
                {
                  title: '权限父id',
                  dataIndex: 'parentId',
                  key: 'parentId',
                 
                  
                },
                {
                  title: '详情',             
                                       
                  render: (record) =>
                    ( <div>
                      <Link to={'/change/'+record.id}> <Button >修改</Button> </Link> 
                       <Button onClick={()=>this.deletePermissions(record.id)}>删除</Button>  
                      </div>                            
                    )
                }
                
                  
                
              ]; 
   
        return (
            <div>
             <MySearch>     
                <Button  icon="add" >  <Link to={'/add'}>新增权限</Link></Button><br/>
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

export default  connect(null,null)(PermissionSearch);