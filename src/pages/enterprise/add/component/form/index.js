import React, { Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Form,  Input, Button,Select } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
/**
 * 测试暂存
 */
const formItemLayout = {
    labelCol: {
      xs: { span: 0 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 0 },
      sm: { span: 13 },
    },
  };
class MyFormSub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: {
        value: '123456789',
      },
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
    CreateInfo(data){
        let url='http://192.168.3.236:8088/CorporateInfo'
            axios.post(url,{
                clientName:data.clientName,
                cardNumber:data.cardNumber,
                clientNumber:data.clientNumber,
                contactInformation:data.contactInformation,
                employeesNumber:data.employeesNumber,
                departments:data.departments,
                industry:data.industry,
                privateLending:data.privateLending,
                privateReputation:data.privateReputation,
                governmentBackground:data.governmentBackground,
                productLevel:data.productLevel,
                nationalPatents:data.nationalPatents,
                productSales:data.productSales,
                yearToLive:data.yearToLive,
                guaranteeAmountOne:data.guaranteeAmountOne,
                currencyOne:data.currencyOne,
                guaranteedPledgeMethodOne:data.guaranteedPledgeMethodOne,
                guaranteeAmountTwo:data.guaranteeAmountTwo,
                currencyTwo:data.currencyTwo,
                guaranteedPledgeMethodTwo:data.guaranteedPledgeMethodTwo ,
                managementCharacteristics: data.managementCharacteristics,
                planBeginningYear: data.planBeginningYear,
                yearEndCreditLimit: data.yearEndCreditLimit,
                planCompress: data.planCompress,
                nonPerformingBalance: data.nonPerformingBalance,
                classificationAdjustment: data.classificationAdjustment,
                organiser: data.organiser,
                associatedCustomers: data.associatedCustomers,
                planBeginningYearReal: data.planBeginningYearReal         
            }       
            ).then((res)=>{
                console.log(res);
                const result=res.data;
                
               if(result===1){
                    alert("修改成功")
                    this.props.history.push('/') 
                }else{
                  alert("修改失败")
                }  
                               
            }).catch((error)=>{
                alert(error)
            });
    }
  
  render() {
    const { Option} = Select;
    const { getFieldDecorator } = this.props.form;  
        return (
            <Form  {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
            <div>
            <div style={{float:'left',width:'40%',marginLeft:'8%'}}>                 
                <Form.Item label='企业名'>
                {getFieldDecorator('clientName', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='客户号'>
                {getFieldDecorator('clientNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='联系方式'>
                {getFieldDecorator('contactInformation', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='证件号码'>
                {getFieldDecorator('cardNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
               
                <Form.Item label='企业员工人数'>
                {getFieldDecorator('employeesNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='不同部门的员工人数'>
                {getFieldDecorator('departments', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='行业'>
                {getFieldDecorator('industry', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='是否有民间借贷'>
                {getFieldDecorator('privateLending', {
                    rules: [],
                })(
                  <Select     
                  //onChange={this.handleSelectChange}
                >            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                </Select>,
                )}
                </Form.Item> 
                <Form.Item label='客户民间声誉情况'>
                {getFieldDecorator('privateReputation', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='企业法人是否有政府背景'>
                {getFieldDecorator('governmentBackground', {
                    rules: [],
                })(
                  <Select>            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                  </Select>,
                )}
                </Form.Item> 
                
                
                <Form.Item label='新产品认定级别'>
                {getFieldDecorator('productLevel', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='国家级专利个数'>
                {getFieldDecorator('nationalPatents', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='产品销售范围'>
                {getFieldDecorator('productSales', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='法人代表本地居住年限'>
                {getFieldDecorator('yearToLive', {
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='法人代表汽车及不动产价值总额'>
                {getFieldDecorator('totalValue', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                </div>
                <div style={{float:'right',width:'40%'}}>
                <Form.Item label='担保金额1'>
                {getFieldDecorator('guaranteeAmountOne', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='币种1'>
                {getFieldDecorator('currencyOne', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保质押方式1'>
                {getFieldDecorator('guaranteedPledgeMethodOne', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保金额2'>
                {getFieldDecorator('guaranteeAmountTwo', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='币种2'>
                {getFieldDecorator('currencyTwo', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='担保质押方式2'>
                {getFieldDecorator('guaranteedPledgeMethodTwo', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='关联客户数'>
                {getFieldDecorator('associatedCustomers', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='主办机构'>
                {getFieldDecorator('organiser', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='年初固定授信额度'>
                {getFieldDecorator('planBeginningYearReal', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='年初计划授信额度'>
                {getFieldDecorator('planBeginningYear', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='年末信用额度'>
                {getFieldDecorator('yearEndCreditLimit', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='计划压缩授信额度'>
                {getFieldDecorator('planCompress', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='不良贷款余额'>
                {getFieldDecorator('nonPerformingBalance', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='分类调整'>
                {getFieldDecorator('governmentBackground', {
                    rules: [],
                })(
                  <Select>            
                    <Option value="1">是</Option>
                    <Option value="0">否</Option>
                  </Select>,
                )}
                </Form.Item> 
                      <Button style={{marginRight:'23%',marginLeft:'20%'}} onClick={()=>this.CreateInfo(this.props.form.getFieldsValue())
                        }  htmlType="submit"  >
                            新增
                        </Button> 
                        <Button>                    
                            <Link to={'/'}>返回</Link>
                        </Button>
                        <div style={{height:'10px'}}></div>
                      </div>                                    
                      </div>                                      
                </Form>
        );
  }
}
const MYForm = Form.create()(MyFormSub);

export default withRouter(MYForm);