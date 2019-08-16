import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {LoginBox} from './style';
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import {actionCreators} from './store'
/**
 * 测试暂存
 */
class LoginFrom extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const {login1}=this.props;
    
    if(!login1){
        return (
            <LoginBox>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住账号</Checkbox>)}
                    <Link to={''} className="login-form-forgot" >
                        忘记密码
                    </Link>
                    <Button onClick={()=>this.props.login(
                        this.props.form.getFieldsValue().username,
                        this.props.form.getFieldsValue().password)
                    } type="primary" htmlType="submit" className="login-form-button" >
                        登录
                    </Button>
                    Or <Link to={''}  >立即注册!</Link>
                    </Form.Item>
                </Form>
          </LoginBox>
        );
    }else{
        return <Redirect to='/enterprise'/>
    }

  }
}
const Login = Form.create()(LoginFrom);
const mapState=(state)=>({
    login1:state.getIn(['login','login']),
    username:state.getIn(['login','username'])

})
const mapDispath=(dispatch)=>{
    return{
        login(accountElem,passwordElem){
            dispatch(actionCreators.login(accountElem,passwordElem))
        }
        
    }
}
export default connect(mapState,mapDispath)(Login);