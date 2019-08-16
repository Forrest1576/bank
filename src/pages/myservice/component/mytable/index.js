import 'antd/dist/antd.css';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table} from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios'
class MyTable extends Component{  
  constructor(props){
    super(props);
    this.state={
      data:[],
      
    }
  }
   componentWillMount(){
    let url='http://192.168.3.236:8088/peasantLoanInfos?limit=1000&page=1&type=1'
    axios.get(url    
    ).then((res)=>{
      console.log(res.data.list)
        this.setState({           
          data:res.data.list,       
          });                 
    }).catch((error)=>{
        alert(error)
    });
  }
  
      render(){
        const {data}=this.state
          const columns = [
            {
              title: '流水单号',
              dataIndex: 'pipelineNumber',
              key: 'pipelineNumber',         
            },
            {
              title: '业务机构',
              dataIndex: 'businessOrganization',
              key: 'businessOrganization',         
            },
            {
              title: '借款金额',
              dataIndex: 'loanAmount',
              key: 'loanAmount',         
            },
            {
              title: '贷款余额',
              dataIndex: 'loanBalance',
              key: 'loanBalance',         
            },
            {
              title: '表内欠息',
              dataIndex: 'interestInTable',
              key: 'interestInTable',         
            },
            {
              title: '表外欠息',
              dataIndex: 'offBalanceSheet',
              key: 'offBalanceSheet',         
            },
            {
              title: '借款日期',
              dataIndex: 'dataLoan',
              key: 'dataLoan',         
            },
            {
              title: '到期日期',
              dataIndex: 'dataExpiry',
              key: 'dataExpiry',         
            },
            {
              title: '手机号码',
              dataIndex: 'cellphoneNumber',
              key: 'cellphoneNumber',         
            },
            {
              title: '详情查看',             
              width: 80,                        
              render: (record) =>
                (
                   <Link to={'/check/'+record.id}>查看</Link>   //查看页面为同步加载页面                                
                )
            }                                
          ]; 
        
    return (
      <div>
            
            <Table  pagination={false}
                bordered  
                columns={columns} 
                dataSource={(data)}                
                size="middle"     
                rowKey='id'          
                />                   
       </div>    
            )
          
      }
  }
  const mapState=(state)=>({
      login:state.getIn(['login','login']),
      data:state.getIn(['individua','data']),
      
    })
  
  export default  connect(mapState,null)(MyTable);