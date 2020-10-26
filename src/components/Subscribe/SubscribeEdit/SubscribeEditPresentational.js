import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider,Tooltip,Modal} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../constants/ValidationMessages";
import "../../../customizedStyles/style.css";


const Option = Select.Option;
const FormItem = Form.Item;

const EditSubscriberPresentational = (props) => {
	const {form:{getFieldDecorator},editModalVisible,editModalVisibleHide,modalVisible,EditSubscriber,el} = props;
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
	  	<Option key={1} value={+91}>{"+91"}</Option>
	  </Select>        
    );
    const phonenumberprefixSelector = getFieldDecorator('phone_country_code', {initialValue: '+1'})(
        <Select className="cs-countryPrefix">
            <Option key={1} value={+91}>{"+91"}</Option>
        </Select>        
      );
	
	const handleOk = (values) => {
	    props.form.validateFieldsAndScroll((err, values) => {
		      if (!err) {
				EditSubscriber(values,el.sm_memb_id);
				editModalVisibleHide();
		      }
	    });
    };
	return (
        <>
            <Tooltip title="Edit Subscriber"> 
					<Icon className="cs-tableEditIcon" type="edit" theme="twoTone" onClick={editModalVisible}/>
			</Tooltip>
            <Modal
                className="cs-modalPlacement"
                visible={modalVisible}
                onOk={() => handleOk()}
                onCancel={() => editModalVisibleHide()}
                title="Edit Subscriber"
                width="80%"
      
                footer={[
                  <Button key="back" onClick={() => editModalVisibleHide()}>
                    Cancel
                  </Button>,
                  <Button key="Update" type="primary" onClick={() => handleOk()}>
                    Update
                  </Button>
                ]}
            >
			<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Salutation</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('salutation', {
							initialValue: ( el.sm_salutation === "" || el.sm_salutation === null ) ? undefined : el.sm_salutation,
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
							initialValue: el.sm_firstname,
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
							initialValue: el.sm_middlename,
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
							initialValue: el.sm_lastname,
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
							initialValue: el.address_ref_name,
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
							initialValue: el.address_line1,
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
							initialValue: el.address_line2,
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
							initialValue: el.address_city,
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
							initialValue: el.address_state,
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Address Country</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_country', {
							initialValue: el.address_country,
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label>Zipcode/postal code </label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('address_zipcode_pincode', {
							initialValue: el.address_zipcode_pincode,
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							}],
						})(
							<Input placeholder="Enter Address"  />		                  
						)}
					</FormItem>
				</Col> 
				
			</Row> 
            </Modal>
        </>
	);
};

const EditSubscriberPresentationalForm = Form.create()(EditSubscriberPresentational);

export default EditSubscriberPresentationalForm;


