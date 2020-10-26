import React from "react";
import {Card, Row, Col, Select, Input, Form, Button, Divider} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../../constants/ValidationMessages";

const Option = Select.Option;
const FormItem = Form.Item;

const AddSiteAdminPresentational = (props) => {
	const { form: { getFieldDecorator }, handleClose } = props;
	const formItemLayout = {
		labelCol: {
			xs: { span: 24 },
			sm: { span: 24 },
		},
		wrapperCol: {
			xs: { span: 24 },
			sm: { span: 24 },
		},
	};
	const handleSubmit = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				props.addSiteAdminUsers(values);
				console.log('AddSiteAdminUsers-View : ', values);
			}
		});
	}
	return(
		<Card title="Add Site Admin" className="gx-card">
			<Divider /><br />
			<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Salutation</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('salutation', {
						})(
							<Select placeholder="Select Salutation" className="cs-fullWidth">
							  <Option value="mr">Mr</Option>
							  <Option value="ms">Ms</Option>
							  <Option value="mrs">Mrs</Option>
							  <Option value="dr">Dr</Option>
							</Select>		                  
						)}
					</FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>First Name</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('firstname', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"), message: AlphabetsSpaceAndSpecialChar,
		                    },{
		                        required: true, message: MandatoryMsg,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter First Name"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Middle Name</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('middlename', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"), message: AlphabetsSpaceAndSpecialChar,
		                    },{
				                 max : 50, message: MandatoryMsg,
				             }],
	                    })(
							<Input placeholder="Enter Middle Name"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Last Name</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('lastname', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"), message: AlphabetsSpaceAndSpecialChar,
		                    },{
		                        required: true, message: MandatoryMsg,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter Last Name"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Email</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('email_id', {
	                    	rules: [{
								type: 'email',  pattern: new RegExp("/[a-z0-9]+[_a-z0-9\.-][a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,20})/i"), message: EmailMsg },{required:true, message: MandatoryMsg,
							},{
								max: 150,
							}],
	                    })(
			                <Input type="text" placeholder="Enter Email"/>
		                )}
	                </FormItem>
				</Col>
			</Row>
			<Divider />
			<div className ="cs-AlignCenter">
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleClose} >Close</Button>
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleSubmit} >Submit</Button>					
			</div>
        </Card>
	)
}

const AddSiteAdminPresentationalForm = Form.create()(AddSiteAdminPresentational);

export default AddSiteAdminPresentationalForm;