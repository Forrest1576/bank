import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table, Button} from 'antd';
import { MyTableContent } from '../../../style';
import {Link} from 'react-router-dom'
import axios from 'axios';
class MyTable extends Component{  
   
  
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
    console.log(id)
    axios.delete('http://192.168.3.236:8088/peasantClient/'+id)
    .then((res)=>{ 
      console.log(res) ; 
      if(res.data===1){           
        alert("删除成功")
        let url='http://192.168.3.236:8088/peasantClient?limit=1000&page=0'
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

      render(){
          const {data}=this.state;
          const columns = [
            {
              title: '编号',
              dataIndex: 'customerId',
              key: 'customerId',
              fixed:'left',
              width:120,


             
            },
            {
              title: '客户名称',
              dataIndex: 'name',
              key: 'name',
              fixed:'left',
              width:120,
              
            },
            {
              title: '住宅数',
              dataIndex: 'headOfHousehold',
              key: 'headOfHousehold',
              width:120,
              
            },
            {
              title: '住宅总价值（万元）',
              dataIndex: 'enterHousehold',
              key: 'enterHousehold',
              width:120,
           
            },
            {
              title: '从属行业',
              dataIndex: 'career',
              key: 'career',
              width:120,
             
            },
            {
              title: '居住地址',
              dataIndex: 'organiser',
              key: 'organiser',
              width:120,
           
            },
            {
              title: '联系电话',
              dataIndex: 'mobilePhone',
              key: 'mobilePhone',
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
            <MyTableContent>
            <Table  pagination={false}
                 bordered  
                 columns={columns} 
                 dataSource={(data)} 
                 rowKey='id' 
                 size="middle" 
                 scroll={{ x: 1000, y: 250 }}
                 />
                        
            </MyTableContent>
            <Button style={{float:'right'}}><Link to={'/add'}>新增</Link></Button>
       </div>    
            )
          
      }
  }
  const mapState=(state)=>({
      login:state.getIn(['login','login']),
      data:state.getIn(['individua','data']),
      
    })
  
  export default  connect(mapState,null)(MyTable);