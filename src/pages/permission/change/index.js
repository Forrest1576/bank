import { Form,  Input, Button} from 'antd';
import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {FormBox} from '../style.js'
import axios from 'axios';


class MyChange extends Component {
    constructor(props){
        super(props);
        this.state={
          PermissionInfo:[],
        }
      }
      componentWillMount(){
        
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://192.168.3.236:8088/sysPermission/'+this.props.match.params.id)
        .then(function (res) {
          console.log(res.data)
          _this.setState({           
           PermissionInfo:res.data,
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            error:error
          })
        })

      }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  ChangePermission(PermissionInfo){
    let url='http://192.168.3.236:8088/sysPermission'
        axios.post(url,{
          name:PermissionInfo.name,
          href:PermissionInfo.href,
          parentId:PermissionInfo.parentId,
          id:this.props.match.params.id
            
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
            if(result.msg==="操作成功"){
              alert("修改成功")
              this.props.history.push('/') 
          }else{
          }                    
        }).catch((error)=>{
            alert(error)
        });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const {PermissionInfo}=this.state;
    
    
    return (
       
      <FormBox>         
        <div style={{float:'left',width:'100%',height:'4vh',
        background:'#CCCCCC',textIndent:'1em',lineHeight:'2vh',padding:'5px 0 0 0'}}>修改用户</div><br/><br/>
      <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}onSubmit={this.handleSubmit} >
        <Form.Item label="权限名">
          {getFieldDecorator('name', {
            initialValue:PermissionInfo.name,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="链接">
          {getFieldDecorator('href', {
            initialValue:PermissionInfo.href,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="父id">
          {getFieldDecorator('parentId', {
            initialValue:PermissionInfo.parentId,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        
        
        <Form.Item>           
          <Button style={{marginLeft:'30%'}}type="primary" htmlType="submit" className="login-form-button" onClick={()=>this.ChangePermission(
                        this.props.form.getFieldsValue())
                    }>
           修改
          </Button>        
        </Form.Item>
        </Form>
      </FormBox>
    );
  }
}

const PermissionInfoChange = Form.create({ name: 'normal_login' })(MyChange)
export default PermissionInfoChange;