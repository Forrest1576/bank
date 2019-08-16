import { Form,  Input, Button,Select} from 'antd';
import React, { Component} from 'react';
import 'antd/dist/antd.css';
import {FormBox} from '../style.js'
import axios from 'axios';


class MyChange extends Component {
    constructor(props){
        super(props);
        this.state={
          userInfo:[],
          count:'',
          roleInfo:[],
          rolename:'',
          roleId:""
        }
      }
      componentWillMount(){
        
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://192.168.3.236:8088/user/'+this.props.match.params.userId)
        .then(function (res) {
          console.log(res.data)
          _this.setState({                     
            roleId:res.data.roleId
          })
          axios.get('http://192.168.3.236:8088/sysRole/'+res.data.roleId)
          
          .then(function (res) {
            console.log(res.data)
            _this.setState({           
              rolename:res.data,
             
            });
          })
          .catch(function (error) {
            console.log(error);
            _this.setState({
              error:error
            })
          })
          _this.setState({           
            userInfo:res.data,
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            error:error
          })
        })

        axios.get('http://192.168.3.236:8088/sysRoles?limit=1000&page=0')
        .then(function (res) {  
             
          _this.setState({
            
            roleInfo:res.data.data,
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
  ChangeUser(userInfo){
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
          team:userInfo.team,
          userId:this.props.match.params.userId
            
        }       
        ).then((res)=>{
            console.log(res);
            const result=res.data;
            if(result===1){
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
    const { Option } = Select;
    const {userInfo,roleId}=this.state;
    
    const options = this.state.roleInfo.map(d => <Option key={d.id}>{d.name}</Option>);
    return (
       
      <FormBox>         
        <div style={{float:'left',width:'100%',height:'4vh',
        background:'#CCCCCC',textIndent:'1em',lineHeight:'2vh',padding:'5px 0 0 0'}}>修改用户</div><br/><br/>
      <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}onSubmit={this.handleSubmit} >
        <Form.Item label="工号">
          {getFieldDecorator('workNum', {
            initialValue:userInfo.workNum,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="用户名">
          {getFieldDecorator('username', {
            initialValue:userInfo.username,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            initialValue:userInfo.name,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="电话">
          {getFieldDecorator('mobile', {
            initialValue:userInfo.mobile,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="邮件">
          {getFieldDecorator('email', {
            initialValue:userInfo.email,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="公司">
          {getFieldDecorator('team', {
            initialValue:userInfo.team,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="密码">
          {getFieldDecorator('password', {
           initialValue: userInfo.password,
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        
        <Form.Item label="权限选择">
          {getFieldDecorator('roleId', {
            initialValue:roleId,
            rules: [],
          })(
            <Select     
              //onChange={this.handleSelectChange}
            >            
                {options}
            </Select>,
          )}
        </Form.Item>
        <Form.Item>           
          <Button style={{marginLeft:'30%'}}type="primary" htmlType="submit" className="login-form-button" onClick={()=>this.ChangeUser(
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

const UserInfoChange = Form.create({ name: 'normal_login' })(MyChange)
export default UserInfoChange;