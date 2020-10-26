import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider,Tooltip,Modal} from "antd";
import "../../../../customizedStyles/style.css";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../../constants/ValidationMessages";

const Option = Select.Option;
const FormItem = Form.Item;

const EditSiteAdminPresentational = (props) => {
	const {form:{getFieldDecorator},editModalVisible,editModalVisibleHide,modalVisible,getAdminUserDetails,editSiteAdminUsers} = props;
    console.log('editSiteAdminUsers : ', editSiteAdminUsers);
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
	
	const handleOk = (e) => {
	    props.form.validateFieldsAndScroll((err, values) => {
		      if (!err) {
                console.log('Submit ok Values : ', values, props.sm_memb_id,);
                props.editSiteAdminUsers(values, props.sm_memb_id);
		      }
	    });
    };
	return (
        <>
            <Tooltip title="Edit Site Admin"> 
					<Icon className="cs-tableEditIcon" type="edit" theme="twoTone" onClick={editModalVisible}/>
			</Tooltip>
            <Modal
                className="cs-modalPlacement"
                visible={modalVisible}
                onCancel={() => editModalVisibleHide()}
                title="Edit Site Admin"
      
                footer={[
                  <Button key="back" onClick={() => editModalVisibleHide()}>
                    Cancel
                  </Button>,
                  <Button key="Update" type="primary" onClick={handleOk}>
                    Update
                  </Button>
                ]}
            >
                <Form>
                    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 10]}>
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>                            <h4><label>Salutation</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('salutation', {
                                    initialValue: getAdminUserDetails.data && getAdminUserDetails.data.sm_salutation ? getAdminUserDetails.data.sm_salutation : "",
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
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <h4><label><span className="cs-mandatoryColor">* </span>First Name</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('firstname', {
                                    initialValue: getAdminUserDetails.data && getAdminUserDetails.data.sm_firstname ? getAdminUserDetails.data.sm_firstname : "",
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
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <h4><label>Middle Name</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('middlename', {
                                    initialValue: getAdminUserDetails.data && getAdminUserDetails.data.sm_middlename ? getAdminUserDetails.data.sm_middlename : "",
                                    rules: [{
                                        pattern: new RegExp("^[a-zA-Z.',-\\s]*$"), message: AlphabetsSpaceAndSpecialChar,
                                    }],
                                })(
                                    <Input placeholder="Enter Middle Name"/>		                  
                                )}
                            </FormItem>
                        </Col>
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <h4><label><span className="cs-mandatoryColor">* </span>Last Name</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('lastname', {
                                    initialValue: getAdminUserDetails.data && getAdminUserDetails.data.sm_lastname ? getAdminUserDetails.data.sm_lastname : "",
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
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <h4><label><span className="cs-mandatoryColor">* </span>Email ID</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('email_id', {
                                    initialValue: getAdminUserDetails.data && getAdminUserDetails.data.sm_email ? getAdminUserDetails.data.sm_email : "",
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
                    </Row> 
                </Form>
            </Modal>
        </>
	);
};

const EditSiteAdminPresentationalForm = Form.create()(EditSiteAdminPresentational);

export default EditSiteAdminPresentationalForm;


