import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider} from "antd";

import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, EmailMsg, Max50Msg, Min10Msg, Max150Msg} from "../../../constants/ValidationMessages";
import "../../../customizedStyles/style.css";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";

const Option = Select.Option;
const FormItem = Form.Item;

const AddOrgEmpView = (props) => {
	console.log(props)
	const {form: {getFieldDecorator}, handleClose, AddOrgEmployeesService, CountriesPhoneCodesOptionItems, AddOrgEmpServiceDataStatus,
		AddOrgEmpServiceDataStatusDes, SweetOpen, SweetClose, state: {sweet, BtnLoading}
	} = props;
	const formItemLayout = {
	  labelCol: {
		xs: {span: 24},
		sm: {span: 24},
	  },
	  wrapperCol: {
		xs: {span: 24},
		sm: {span: 24},
	  },
	};
	const mobilenumberprefixSelector = getFieldDecorator('mobile_country_code', {initialValue: '+1'})(
	  <Select className="cs-countryPrefix">
	  	{CountriesPhoneCodesOptionItems}
	  </Select>        
	);
	const phonenumberprefixSelector = getFieldDecorator('phone_country_code', {initialValue: '+1'})(
	  <Select className="cs-countryPrefix">
	  	{CountriesPhoneCodesOptionItems}
	  </Select>        
	);
	const handleSubmit = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				console.log("values : ", values)
				AddOrgEmployeesService(values)
				SweetOpen()
			}
		});
	}
	return (
		<Card title="Add Org Employees" className="gx-card">
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
				                max : 50, message: Max50Msg
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
				                max : 50, message: Max50Msg
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
				                max : 50, message: Max50Msg
				            }],
						})(
							<Input placeholder="Enter Last Name"/>		                  
						)}
					</FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Mobile Number</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('mobile_number', {
							rules: [{
	                    	    min: 10, message: Min10Msg,
                            },{
								max: 10, message: Max10Msg,
						    },{
				                required: true, message: MandatoryMsg,
			                },{
			                	pattern: new RegExp("^[0-9]*$"), message: NumbersMsg
			                }],
						})(
							<Input addonBefore={mobilenumberprefixSelector} placeholder="Enter Mobile Number"/>
						)}
					</FormItem>
				</Col>              
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Phone Number</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('phone_number', {
							rules: [{
	                    	    min: 10, message: Min10Msg,
                            },{
								max: 10, message: Max10Msg,
							},{
								pattern: new RegExp("^[0-9]*$"), message: NumbersMsg
							}],
						})(
							<Input addonBefore={phonenumberprefixSelector} placeholder="Enter Phone Number"/>
						)}
					</FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Email ID</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('email_id', {
							rules: [{
								type: 'email',  pattern: new RegExp("/[a-z0-9]+[_a-z0-9\.-][a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,20})/i"), message: EmailMsg
							},{
								required: true, message: MandatoryMsg,
							},{
								max: 150, message: Max150Msg,
							}],
						})(
							<Input type="email" placeholder="Enter Email ID"/>
						)}
					</FormItem>
				</Col>
			</Row> 
			<Divider />
			<div className = "cs-AlignCenter">
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleClose}>Close</Button>
				<Button loading={BtnLoading} className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleSubmit}>Submit</Button>					
			</div>	
			{sweet && AddOrgEmpServiceDataStatusDes &&
				<Sweetalert
					visible={sweet}
					onConfirm={AddOrgEmpServiceDataStatus == "user-insert-successful" ? handleClose : SweetClose}
					statusDescription={AddOrgEmpServiceDataStatusDes}
				/>
			}			
		</Card>
	);
};

const AddOrgEmpViewForm = Form.create()(AddOrgEmpView);

export default AddOrgEmpViewForm;