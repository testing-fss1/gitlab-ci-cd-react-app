import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Modal, Icon, Tooltip} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, EmailMsg, Max50Msg, Min10Msg, Max150Msg} from "../../../../constants/ValidationMessages";
import "../../../../customizedStyles/style.css";

const Option = Select.Option;
const FormItem = Form.Item;

const EditOrgEmpPresentational = (props) => {
	const {form:{getFieldDecorator}, handleClose, OpenModal, handleCancel, closeModal, EditOrgEmployeesService, el, CountriesPhoneCodesOptionItems,
		OrgEmpLisState, state: {visible}
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
	const mobilenumberprefixSelector = getFieldDecorator('mobile_country_code', {initialValue: el.sm_mobile_number_phone_country_code ? el.sm_mobile_number_phone_country_code : '+1'})(
	  <Select className="cs-countryPrefix">
	  	{CountriesPhoneCodesOptionItems}
	  </Select>        
	);
	const phonenumberprefixSelector = getFieldDecorator('phone_country_code', {initialValue: el.sm_phone_number_country_code ? el.sm_phone_number_country_code : '+1'})(
	  <Select className="cs-countryPrefix">
	  	{CountriesPhoneCodesOptionItems}
	  </Select>        
	);
	const handleUpdate = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				console.log("values : ", values)
				EditOrgEmployeesService(values, el.sm_memb_id, OrgEmpLisState)
				closeModal();
			}
		});
	}
	return (
		<div>
			<Tooltip title="Edit Org Employees">
				<Icon className="cs-tableEditIcon" type="edit" theme="twoTone" onClick={OpenModal} />
			</Tooltip>        
			<Modal 
				className="cs-modalPlacement"
				title="Edit Org Employees"
				visible={visible}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>Cancel</Button>,
					<Button key="submit" type="primary" onClick={handleUpdate}>
						Update
					</Button>,
				]}
			>
				<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
					<Col lg={{ span: 12 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label>Salutation</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('salutation', {
								initialValue: ( el.sm_salutation === "" || el.sm_salutation === null ) ? undefined : el.sm_salutation ,
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
					<Col lg={{ span: 12 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>First Name</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('firstname', {
								initialValue: el.sm_firstname,
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
					<Col lg={{ span: 12 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label>Middle Name</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('middlename', {
								initialValue: el.sm_middlename,
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
					<Col lg={{ span: 12 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>Last Name</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('lastname', {
								initialValue: el.sm_lastname,
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
					<Col lg={{ span: 12 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>Mobile Number</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('mobile_number', {
								initialValue: el.sm_mobile_number,
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
					<Col lg={{ span: 12 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label>Phone Number</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('phone_number', {
								initialValue: el.sm_phone_number,
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
				</Row>	
			</Modal>			
		</div>
	);
};

const EditOrgEmpPresentationalForm = Form.create()(EditOrgEmpPresentational);

export default EditOrgEmpPresentationalForm;