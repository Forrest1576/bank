import { Form,  Input, Button} from 'antd';
import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {FormBox} from '../style.js'
import axios from 'axios';
class MyHome extends Component {
    constructor(props){
        super(props);
        this.state={
          data:[],
          count:''
        }
      }
      componentDidMount(){
      
      }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  CreatePermission(Permission){
    let url='http://192.168.3.236:8088/sysPermission'
        axios.post(url,{
            name:Permission.name,
            href:Permission.href,
            parentId:Permission.parentId,
            type:1,
            sort:1

            
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
           if(result.msg==="操作成功"){
                alert("添加成功")
                this.props.history.push('/') 
            }else{
            }                    
        }).catch((error)=>{
            alert(error)
        });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
       
      <FormBox>         
        <div style={{float:'left',width:'100%',height:'4vh',
        background:'#CCCCCC',textIndent:'1em',lineHeight:'2vh',padding:'5px 0 0 0'}}>添加用户</div><br/><br/>
      <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}onSubmit={this.handleSubmit} >
      <Form.Item label="权限名">
          {getFieldDecorator('name', {
            
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="链接">
          {getFieldDecorator('href', {
          
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="父权限菜单">
          {getFieldDecorator('parentId', {         
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        
        <Form.Item>           
          <Button style={{marginLeft:'30%'}}type="primary" htmlType="submit" className="login-form-button" onClick={()=>this.CreatePermission(
                        this.props.form.getFieldsValue())
                    }>
           创建
          </Button>        
        </Form.Item>
        </Form>
      </FormBox>
    );
  }
}

const Add = Form.create({ name: 'normal_login' })(MyHome)
export default Add;