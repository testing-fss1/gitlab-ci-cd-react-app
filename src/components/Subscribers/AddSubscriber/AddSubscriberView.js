import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg,Min10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../constants/ValidationMessages";
import "../../../customizedStyles/style.css";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";



const Option = Select.Option;
const FormItem = Form.Item;
const {TextArea} = Input;

const AddSubscriberView = (props) => {
	const {form:{getFieldDecorator}, handleClose,addSubscriber,CountriesPhoneCodesOptionItems,GroupsListDataContainer,AddSubscriberStatus,AddSubscriberStatusDescription,SweetClose,SweetOpen, state: {sweet,loadingButton},optionItems} = props;
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
	const GroupName = GroupsListDataContainer && GroupsListDataContainer.data && GroupsListDataContainer.data.map(list => {
		return (list.is_active_status===1||list.is_active_status==='1' )&& <Option key={list.orng_id} value={list.orng_id}>{list.notification_group_name}</Option>
	});
	console.log('GroupName',GroupName)

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
	const handleSubmit = e => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				addSubscriber(values);
				SweetOpen()
			}
		});
	};
	return (
		<Card title="Add Subscriber" className="gx-card">
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
							}],
						})(
							<Input placeholder="Enter Last Name"/>		                  
						)}
					</FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Address</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_ref_name', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Address line 1 </label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_line1', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Address line 2 </label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_line2', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>City /town /village</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_city', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>State/province/region</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_state', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Country</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_country', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Select 
								showSearch
								placeholder="Select Country"
								filterOption={(input, option) =>
								option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
								className="cs-fullWidth"
							>
								{optionItems}
							</Select>		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Zipcode/postal code </label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_zipcode_pincode', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Mobile Number</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('mobile_number', {
							rules: [{
								max: 10, message: Max10Msg,
						    },{
								min: 10, message: Min10Msg,
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
							}],
						})(
							<Input type="email" placeholder="Enter Email ID"/>
						)}
					</FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Groups</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('orng_id', {
						})(
							<Select
								mode="multiple"
								showSearch
								style={{width: "100%"}}
								placeholder="Select a Group List"
							>
								{GroupName}
							</Select>                  
						)}
					</FormItem>
				</Col> 
			</Row> 
			<Divider />
			<div className = "cs-AlignCenter">
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleClose}>Close</Button>
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" loading={loadingButton} onClick={handleSubmit}>Submit</Button>					
			</div>	
			{sweet && AddSubscriberStatusDescription &&
				<Sweetalert
					visible={sweet}
					onConfirm={AddSubscriberStatus == "user-insert-successful" ? handleClose : SweetClose}
					statusDescription={AddSubscriberStatusDescription}
				/>
			}					
		</Card>
	);
};

const AddSubscriberViewForm = Form.create()(AddSubscriberView);

export default AddSubscriberViewForm;


