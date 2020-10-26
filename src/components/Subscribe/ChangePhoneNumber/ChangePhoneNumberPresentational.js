import React,{useState} from "react";
import {Card,Modal,Tooltip,Button,Form,Row,Col,Input,Select} from "antd";
import "../../../customizedStyles/style.css";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, EmailMsg, Max50Msg, Min10Msg, Max150Msg} from "../../../constants/ValidationMessages";


const FormItem = Form.Item;
const Option = Select.Option;

const ChangePhoneNumberPresentationalForm = (props)=>{

const {form:{getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, setFieldsValue},
		handleSubmit,modal,ChangeMobileServiceDataStatus,ChangeMobileServiceDataStatusDes,showModal,handleCancel,
		UniqueCodeVerifyServiceDataStatus,UniqueCodeVerifyServiceDataStatusDes,state : {CodeVerification,sweet,sweet1},
		handleSubmit1,CancelVerify,modalVerify,onConfirm,onConfirm1,sm_mobile_number } = props
	


	 const handleOk = (values) => {
    	console.log("values",values)
	    	props.form.validateFieldsAndScroll((err, values) => {
		      if (!err) {
				handleSubmit(values)
		      }
	    });
    };

    const handleVerify = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				console.log("values : ", values)
				handleSubmit1(values);
				
			}
		});
	}

	const mobilenumberprefixSelector = getFieldDecorator('mobile_country_code', {initialValue: '+1'})(
	  <Select style={{ width: 100 }}>
	  	<Option key={1} value={+91}>{"+91"}</Option>
	  </Select>        
	);

	const RemobilenumberprefixSelector = getFieldDecorator('Re_mobile_country_code', {initialValue: '+1'})(
	  <Select style={{ width: 100 }}>
	  	<Option key={1} value={+91}>{"+91"}</Option>
	  </Select>        
	);

	const formItemLayout = {
      labelCol: {
        xs: {span: 50},
        sm: {span: 50},
      },
      wrapperCol: {
        xs: {span: 20},
        sm: {span: 24},
      },
    };

	return(
			<div>

				<div>
					 <Tooltip title="Change Phone Number">                                                                    
	         			 <i className="icon  icon-add-circle" onClick={showModal}/>
	        		</Tooltip> 
					</div>
				 <Modal 
		          visible={modal}
		          onCancel={handleCancel}
		           onOk={() => handleOk()}
		           title="Change Phone Number"
		          footer={[
		            <Button key="back" onClick={handleCancel}>Cancel</Button>,
		            <Button key="submit" type="primary"  onClick={() => handleOk()} >
		              Update
		            </Button>, 
		          ]}
        		>

        			<Form className="gx-signin-form gx-form-row0">
	        		 <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 10]}>
                        <Col lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>   
						
			            		<FormItem
					                {...formItemLayout}
					                label="Current Mobile Number"
					              >

					               {getFieldDecorator('current_new_mobile_number', {
					               	initialValue : sm_mobile_number,

					               	rules: [{
					                    pattern: new RegExp("^[0-9]*$"), message: 'Mobile Number should be Numbers!',
					                  },{
					                    max: 15, message: 'Please Enter Maximum 15 digits!',
					                  },{
					                    required: false,  message: 'Please input your Mobile Number!',
					                  }],
					             
					             
					           	 })(
					              
					              <Input  placeholder="Current Mobile Number" readOnly />

					            )}
					          </FormItem> 
			         		 </Col>

				         	 <Col lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>   
						
					           <FormItem
					                {...formItemLayout}
					                label="Enter New Mobile Number"
					              >

					               {getFieldDecorator('enter_new_mobile_number', {

					             rules: [{
				                    pattern: new RegExp("^[0-9]*$"), message: 'Mobile Number should be Numbers!',
				                  },{
				                    max: 15, message: 'Please Enter Maximum 15 digits!',
				                  },{
				                    required: false,  message: 'Re Enter Mobile Number!',
				                  }],
					             
					           	 })(
					              <Input  placeholder="Enter Mobile Number"  name="enter_new_mobile_number" /> 
					            )}
					          </FormItem> 
				         	 </Col>	

		          		</Row> 

	        	 	</Form>


        		</Modal>


        		<div>

        		{ CodeVerification && ChangeMobileServiceDataStatusDes  &&
        		 <Modal 
		          visible={modalVerify}
		          onCancel={CancelVerify}
		           onOk={() => handleVerify()}
		          title="Change Phone Number"
		          footer={[
		            <Button key="back" onClick={handleCancel}>Cancel</Button>,
		            <Button key="submit" type="primary"   onClick={() => handleVerify()} > Update
		            </Button>, 
		          ]}
        		>

        		

	        		<Form className="gx-signin-form gx-form-row0">
	        		 <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 10]}>
	        		 	<Col lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>   
						
			            		<FormItem
					                {...formItemLayout}
					                label="Unique code verification "
					              >

					               {getFieldDecorator('unique_code_verification', {
									rules: [{
						                required: true, message: MandatoryMsg,
					                },{
					                	pattern: new RegExp("^[0-9]*$"), message: NumbersMsg
					                }],
								})(
									<Input type="text" placeholder="Enter Unique code verification"/>
								)}
					          </FormItem> 
			         		 </Col>

                       
		          		</Row> 

	        	 	</Form>

        		</Modal>

        	}
        	</div>

        	<div>
        	{sweet && ChangeMobileServiceDataStatusDes &&
				<Sweetalert
					visible={sweet}
					onConfirm={onConfirm}
					statusDescription={ChangeMobileServiceDataStatusDes}
				/>
			}

			</div>

			<div>
        	{sweet1 && UniqueCodeVerifyServiceDataStatusDes &&
				<Sweetalert
					visible={sweet1}
					onConfirm={onConfirm1}
					statusDescription={UniqueCodeVerifyServiceDataStatusDes}
				/>
			}

			</div>


			</div>
		)
}


const ChangePhoneNumberPresentational = Form.create()(ChangePhoneNumberPresentationalForm);


export default ChangePhoneNumberPresentational;