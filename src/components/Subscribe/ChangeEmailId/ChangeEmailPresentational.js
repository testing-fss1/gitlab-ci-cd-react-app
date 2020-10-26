import React from "react";
import {Card,Modal,Tooltip,Button,Form,Input,Row,Col} from "antd";
import "../../../customizedStyles/style.css";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, EmailMsg, Max50Msg, Min10Msg, Max150Msg} from "../../../constants/ValidationMessages";



const FormItem = Form.Item;


const ChangeEmailPresentationalForm = (props)=>{

const {form:{getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, setFieldsValue},showModal,handleCancel,handleSubmit,modal,
sm_email,ChangeEmailServiceDataStatusDes,CodeVerifyOpen,SweetOpen,SweetClose,ChangeEmailServiceDataStatus,UniqueCodeVerifyServiceDataStatus,
UniqueCodeVerifyServiceDataStatusDes,state : {CodeVerification,sweet,sweet1},handleSubmit1,CancelVerify,modalVerify,onConfirm,onConfirm1} = props

	
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
				SweetOpen()
			}
		});
	}

	
	console.log("ChangeEmailServiceDataStatusDes",ChangeEmailServiceDataStatusDes , CodeVerification, modalVerify,  sweet1, UniqueCodeVerifyServiceDataStatusDes)

	return(
			<div>

				<div>
					 <Tooltip title="Change Email">                                                                    
	         			  <i className="icon icon-email" onClick={showModal}/>
	        		</Tooltip> 
					</div>
				 <Modal 
		          visible={modal}
		          onCancel={handleCancel}
		           onOk={() => handleOk()}
		          title="Change Email"
		          footer={[
		            <Button key="back" onClick={handleCancel}>Cancel</Button>,
		            <Button key="submit" type="primary"   onClick={() => handleOk()} > Update
		            </Button>, 
		          ]}
        		>

        		

	        		<Form className="gx-signin-form gx-form-row0">
	        		 <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 10]}>
	        		 	<Col lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>   
						
			            		<FormItem
					                {...formItemLayout}
					                label="Current Email Id "
					              >

					               {getFieldDecorator('current_email_id', {
					               	initialValue : sm_email,
					               	rules: [
										{
											type: 'email',
											message: "Please Enter a valid email address",
										}
									],
					             
					             
					           	 })(
					              
					              <Input name="current_email_id" readOnly />

					            )}
					          </FormItem> 
			         		 </Col>

                        <Col lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>   
						
			            		<FormItem
					                {...formItemLayout}
					                label="Enter New Email Id "
					              >

					               {getFieldDecorator('new_email_id', {
					               	rules: [
										{
											type: 'email',
											message: "Please Enter a valid email address",
										}
									],
					             
					             
					           	 })(
					              
					              <Input name="new_email_id" placeholder="Enter Email ID" />

					            )}
					          </FormItem> 
			         		 </Col>

		          		</Row> 

	        	 	</Form>

        		</Modal>

        		<div>

        		{ CodeVerification && ChangeEmailServiceDataStatusDes === "Submitted sucessfully." &&
        		 <Modal 
		          visible={modalVerify}
		          onCancel={CancelVerify}
		           onOk={() => handleVerify()}
		          title="Change Email"
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
        	{sweet && ChangeEmailServiceDataStatusDes &&
				<Sweetalert
					visible={sweet}
					onConfirm={onConfirm}
					statusDescription={ChangeEmailServiceDataStatusDes}
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

const ChangeEmailPresentational = Form.create()(ChangeEmailPresentationalForm);


export default ChangeEmailPresentational;




/*
<Col lg={{ span: 24}} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>

					          	<FormItem
						                {...formItemLayout}
						                label="Unique Code"
						              >

						               {getFieldDecorator('unique_Code', {
						             
						             
						           	 })(
						              <Input  name="unique_Code" placeholder="Enter Unique code" /> 
						            )}
					          	</FormItem>
		          			</Col>
*/