import { Form,  Input, Button,Select} from 'antd';
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
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://192.168.3.236:8088/sysRoles?limit=1000&page=0')
        .then(function (res) {
          console.log(res.data.data)
          _this.setState({
            
            data:res.data.data,
            count:res.data.count
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
  CreateUser(userInfo){
    console.log("用户信息")
    console.log(userInfo)
    let url='http://192.168.3.236:8088/user'
        axios.post(url,{
            username:userInfo.username,
            password:userInfo.password,
            roleId:userInfo.roleId,
            workNum:userInfo.workNum,
            name:userInfo.name,
            mobile:userInfo.mobile,
            email:userInfo.email,
            team:userInfo.team

            
        }       
        ).then((res)=>{
          console.log("收到数据")
            console.log(res);
            const result=res.data;
           if((result.userId!=="")&&(result.userId!==null)){
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
    const { Option } = Select;
    const options = this.state.data.map(d => <Option key={d.id}>{d.name}</Option>);
    return (
       
      <FormBox>         
        <div style={{float:'left',width:'100%',height:'4vh',
        background:'#CCCCCC',textIndent:'1em',lineHeight:'2vh',padding:'5px 0 0 0'}}>添加用户</div><br/><br/>
      <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}onSubmit={this.handleSubmit} >
      <Form.Item label="工号">
          {getFieldDecorator('workNum', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="用户名">
          {getFieldDecorator('username', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="密码">
          {getFieldDecorator('password', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="电话">
          {getFieldDecorator('mobile', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="邮箱">
          {getFieldDecorator('email', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="角色选择">
          {getFieldDecorator('roleId', {
            rules: [],
          })(
            <Select           
              //onChange={this.handleSelectChange}
            >            
                {options}
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="公司名称">
          {getFieldDecorator('team', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item>           
          <Button style={{marginLeft:'30%'}}type="primary" htmlType="submit" className="login-form-button" onClick={()=>this.CreateUser(
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