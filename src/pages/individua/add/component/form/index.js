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
        axios.defaults.headers.post['Content-Type']='application/json'
        let url='http://192.168.3.236:8088/peasantClient'
            axios.post(url,{
                name:data.name,
                customerId:data.customerId,
                mobilePhone:data.mobilePhone,
                borrowerIdNumber:data.borrowerIdNumber,
                accountManager:data.accountManager,
                householder:data.householder,
                career:data.career,
                certificateType:data.certificateType,
                classificationAdjustment:data.classificationAdjustment,
                createTime:data.createTime,
                customerType:data.customerType,
                dependentPopulation:data.dependentPopulation,
                education:data.education,
                educationExpenses:data.educationExpenses,
                enterHousehold:data.enterHousehold,
                headOfHousehold:data.headOfHousehold,
                householdIdNumber:data.householdIdNumber,
                id:data.id,
                laborers:data.laborers,
                livingCondition:data.livingCondition,
                managementCharacteristics:data.managementCharacteristics,
                maritalStatus:data.maritalStatus,
                nonPerformingBalance:data.nonPerformingBalance,
                organiser:data.organiser,
                planBeginningYear:data.planBeginningYear,
                planCompress:data.planCompress,
                privateLending:data.privateLending,
                relationship:data.relationship,
                residenceYears:data.residenceYears,
                residentialArea:data.residentialArea,
                residentialValue:data.residentialValue,
                severalResidences:data.severalResidences,
                skillStatus:data.skillStatus,
                socialCredibility:data.socialCredibility,
                socialRelationship:data.socialRelationship,
                spouseIdNumber:data.spouseIdNumber,
                spouseName:data.spouseName,
                spousePhone:data.spousePhone,
                yearEndCreditLimit:data.yearEndCreditLimit        
            }       
            ).then((res)=>{
                console.log(res);
                const result=res.data;
                
               if(result===1){
                    alert("新增成功")
                    this.props.history.push('/') 
                }else{
                  alert("新增失败")
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
                <Form.Item label='借款人姓名'>
                {getFieldDecorator('name', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>  
                <Form.Item label='客户号'>
                {getFieldDecorator('customerId', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='证件类型'>
                {getFieldDecorator('certificateType', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>               
                <Form.Item label='借款人身份证号码'>
                {getFieldDecorator('borrowerIdNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='手机'>
                {getFieldDecorator('mobilePhone', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='职业'>
                {getFieldDecorator('career', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='学历'>
                {getFieldDecorator('education', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>             
                <Form.Item label='户口成员数'>
                {getFieldDecorator('accountMembersNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='社会关系'>
                {getFieldDecorator('socialRelationship', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='客户类型'>
                {getFieldDecorator('customerType', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='管理特征'>
                {getFieldDecorator('managementCharacteristics', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>
                <Form.Item label='是否入户'>
                {getFieldDecorator('enterHousehold', {
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
                <Form.Item label='是否户主'>
                {getFieldDecorator('headOfHousehold', {
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
                <Form.Item label='户主姓名'>
                {getFieldDecorator('householder', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='与户主的关系'>
                {getFieldDecorator('relationship', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='户主证件号码'>
                {getFieldDecorator('householdIdNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                  
               
                </div>
                <div style={{float:'right',width:'40%'}}>
                <Form.Item label='婚姻状况'>
                {getFieldDecorator('maritalStatus', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='配偶姓名'>
                {getFieldDecorator('spouseName', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='配偶身份证号码'>
                {getFieldDecorator('spouseIdNumber', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                 
                <Form.Item label='配偶手机号码'>
                {getFieldDecorator('spousePhone', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                                
                <Form.Item label='贷款人及其家庭技能状况'>
                {getFieldDecorator('skillStatus', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='劳动人口数'>
                {getFieldDecorator('laborers', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                 
                <Form.Item label='供养人口数'>
                {getFieldDecorator('dependentPopulation', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                 
                <Form.Item label='居住状况'>
                {getFieldDecorator('livingCondition', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                 
                <Form.Item label='在当地居住年限'>
                {getFieldDecorator('residenceYears', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='几处住宅'>
                {getFieldDecorator('severalResidences', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                
                <Form.Item label='住宅价值（万元）'>
                {getFieldDecorator('residentialValue', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                
                <Form.Item label='住宅面积（m*m）'>
                {getFieldDecorator('residentialArea', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                 
                <Form.Item label='贷款人子女年教育费用'>
                {getFieldDecorator('educationExpenses', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item>                 
                <Form.Item label='民间借贷'>
                {getFieldDecorator('privateLending', {
                    rules: [],
                })(
                    <Input 
                    />,
                )}
                </Form.Item> 
                <Form.Item label='社会信誉状况'>
                {getFieldDecorator('socialCredibility', {
                    rules: [],
                })(
                    <Input 
                    />,
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