import React from "react";
import {Card, Row, Col, Select, Input, Form, Button, Divider} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../../constants/ValidationMessages";
import Sweetalert from "../../../../components/ReusableComponents/CommonSweetAlert";

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

const AddOrgAdminiew = (props) => {
	const { form: { getFieldDecorator ,validateFields }, handleClose, CountriesPhoneCodesOptionItems, CountriesListServiceDataList, optionItems 
    ,addOrgAdminUsers ,AddOrgAdminstatus,onConfirm ,sweetstate:{sweet},setstate} = props;
	console.log('Props in Presentational : ', props);
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
		setstate({sweet:true})
		validateFields((err, values) => {
			if (!err) {        
				  addOrgAdminUsers(values);
				console.log('addOrgAdminUsers : ', values);
			}
		});
	}
	return(
		<Card title="Add Org Admin" className="gx-card">
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
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
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
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
		                    },{
				                 max : 50,
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
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
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
					<h4><label><span className="cs-mandatoryColor">* </span>Organization Name</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('organization_name', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
		                    },{
		                        required: true, message: MandatoryMsg,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter Organization Name"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
				    <h4><label><span className="cs-mandatoryColor">* </span>Mobile Number</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('mobile_number', {
								rules: [{
									max: 10,
								},{
                				min: 10,
                				},{
		                        required: true, message: MandatoryMsg,
		                       }, {pattern: new RegExp("^[0-9]*$"),}],
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
								max: 10,
							},{
							 min: 10,
							},
							 {pattern: new RegExp("^[0-9]*$")}],
						})(
							<Input addonBefore={phonenumberprefixSelector} placeholder="Enter Phone Number"/>
						)}
				    </FormItem>
			    </Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Email</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('email_id', {
	                    	rules: [{
								type: 'email',  pattern: new RegExp("/[a-z0-9]+[_a-z0-9\.-][a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,20})/i") },
								{
									required:true, message: MandatoryMsg,
							},{
								max: 150,
							}],
	                    })(
			                <Input type="text" placeholder="Enter Email"/>
		                )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Address Line1</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('billing_address_line1', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z0-9.',-\\s]*$"),
		                    },{
		                        required: false,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter Address Line1"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Address Line2</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('billing_address_line2', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z0-9.',-\\s]*$"),
		                    },{
		                        required: false,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter Address Line2"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>City /town /village</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('billing_address_city', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
		                    },{
		                        required: false,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter City /town /village"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>State/province/region </label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('billing_address_state', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
		                    },{
		                        required: false,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter State/province/region "/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Zipcode/postal code</label></h4>
					<FormItem {...formItemLayout}>
	                    {getFieldDecorator('billing_address_zipcode', {
		                    rules: [{
		                    	pattern: new RegExp("^[a-zA-Z0-9.',-\\s]*$"),
		                    },{
		                        required: false,
		                    },{
				                 max : 50
				             }],
	                    })(
							<Input placeholder="Enter Zipcode/postal code"/>		                  
	                    )}
	                </FormItem>
				</Col>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h5><label>Country</label></h5>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('billing_address_country', {
							initialValue: CountriesListServiceDataList && CountriesListServiceDataList,
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
			</Row>
			<Divider />
			<div className ="cs-AlignCenter">
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleClose} >Close</Button>
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleSubmit} >Submit</Button>					
			</div>
			 {
				sweet && AddOrgAdminstatus &&  
				<Sweetalert 
					visible={sweet}
					statusDescription={AddOrgAdminstatus} 
					onConfirm={()=>onConfirm()}
				/>
			}
        </Card>
	)
}

const AddSiteAdminPresentationalForm = Form.create()(AddOrgAdminiew);

export default AddSiteAdminPresentationalForm;