import { Form,  Input, Button,Select,DatePicker} from 'antd';
import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {FormBox} from '../style.js'
class MyHome extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    return (
      <FormBox>
        <div style={{float:'left',width:'100%',height:'4vh',
        background:'#CCCCCC',textIndent:'1em',lineHeight:'2vh',padding:'5px 0 0 0'}}>新增业务</div><br/><br/>
      <Form labelCol={{ span: 7 }} wrapperCol={{ span: 15 }}onSubmit={this.handleSubmit} >
        <Form.Item label="流水单号">
          {getFieldDecorator('username', {
            rules: [],
          })(
           <Input          
            />,
          )}
        </Form.Item>
        <Form.Item label="业务类型">
          {getFieldDecorator('gender', {
            rules: [],
          })(
            <Select           
              onChange={this.handleSelectChange}
            >
              <Option value="enterprise">小微企业</Option>
              <Option value="individual">农户</Option>
            </Select>,
          )}
        </Form.Item>
            <Form.Item label="创建时间" hasFeedback >
              <DatePicker style={{ width: '100%' }} />
             </Form.Item>
        <Form.Item>           
          <Button style={{marginLeft:'30%'}}type="primary" htmlType="submit" className="login-form-button">
            <Link to={'/add'}>创建</Link>
          </Button>        
        </Form.Item>
      </Form>
      </FormBox>
    );
  }
}

const Home = Form.create({ name: 'normal_login' })(MyHome)
export default Home;