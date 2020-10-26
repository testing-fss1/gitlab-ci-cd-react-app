import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider,Tooltip,Modal} from "antd";
import "../../../../customizedStyles/style.css";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../../constants/ValidationMessages";
//import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../../constants/ValidationMessages";
import CustomLoader from "../../../CustomLoaderView";

const Option = Select.Option;
const FormItem = Form.Item;

const EditSiteAdminPresentational = (props) => {
	const {form:{getFieldDecorator}, editModalVisible,loadingData, editModalVisibleHide, modalVisible, CountriesPhoneCodesOptionItems, CountriesListServiceDataList, optionItems, editOrgAdminUsers, orgAdminUserDetailsGet} = props;
    console.log('Props in Presentational : ', orgAdminUserDetailsGet);
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
	const mobilenumberprefixSelector = getFieldDecorator('sm_mobile_number_phone_country_code', {initialValue: '+1'})(
        <Select className="cs-countryPrefix">
            {CountriesPhoneCodesOptionItems}
        </Select>        
    );
    const phonenumberprefixSelector = getFieldDecorator('sm_phone_number_country_code', {initialValue: '+1'})(
        <Select className="cs-countryPrefix">
            {CountriesPhoneCodesOptionItems}
        </Select>        
    );
	
	const handleOk = (e) => {
	    props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Submited Values In Presentational : ", values, props.sm_memb_id, props.org_id);
                props.editOrgAdminUsers(values, props.sm_memb_id, props.org_id);
            }
	    });
    };
	return (
    <div>
        {
            loadingData ?
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CustomLoader />
            </div>	          
            :
            <>
                    <Tooltip title="Edit Org Admin"> 
                            <Icon className="cs-tableEditIcon" type="edit" theme="twoTone" onClick={editModalVisible}/>
                    </Tooltip>
                <Modal
                        className="cs-modalPlacement"
                        visible={modalVisible}
                        onCancel={() => editModalVisibleHide()}
                        title="Edit Org Admin"
            
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>Salutation</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('salutation', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.sm_salutation ? orgAdminUserDetailsGet.sm_salutation : "",
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label><span className="cs-mandatoryColor">* </span>First Name</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('firstname', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.sm_firstname ? orgAdminUserDetailsGet.sm_firstname : "",
                                        rules: [{
                                            pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
                                        },{
                                            required: true,
                                        },{
                                            max : 50
                                        }],
                                    })(
                                        <Input placeholder="Enter First Name"/>                       
                                    )}
                                </FormItem>
                            </Col>
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>Middle Name</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('middlename', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.sm_middlename ? orgAdminUserDetailsGet.sm_middlename : "",
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label><span className="cs-mandatoryColor">* </span>Last Name</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('lastname', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.sm_lastname ? orgAdminUserDetailsGet.sm_lastname : "",
                                        rules: [{
                                            pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
                                        },{
                                            required: true,
                                        },{
                                            max : 50
                                        }],
                                    })(
                                        <Input placeholder="Enter Last Name"/>                        
                                    )}
                                </FormItem>
                            </Col>
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label><span className="cs-mandatoryColor">* </span>Organization Name</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('organization_name', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.org_name ? orgAdminUserDetailsGet.org_name : "",
                                        rules: [{
                                            pattern: new RegExp("^[a-zA-Z.',-\\s]*$"),
                                        },{
                                            required: true,
                                        },{
                                            max : 50
                                        }],
                                    })(
                                        <Input placeholder="Enter Organization Name"/>                        
                                    )}
                                </FormItem>
                            </Col>
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label><span className="cs-mandatoryColor">* </span>Mobile Number</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('mobile_number', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.sm_mobile_number ? orgAdminUserDetailsGet.sm_mobile_number : "",
                                            rules: [{
                                                max: 10,
                                            },{
                                            min: 10,
                                            },{
                                            required: true,
                                        }, {pattern: new RegExp("^[0-9]*$"),}],
                                    })(
                                        <Input addonBefore={mobilenumberprefixSelector} placeholder="Enter Mobile Number"/>
                                    )}
                                </FormItem>
                            </Col>              
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>Phone Number</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('phone_number', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.sm_phone_number ? orgAdminUserDetailsGet.sm_phone_number : "",
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
                            {/* <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label><span className="cs-mandatoryColor">* </span>Email</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('email_id', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.sm_email ? orgAdminUserDetailsGet.sm_email : "",
                                        rules: [{
                                            type: 'email',  pattern: new RegExp("/[a-z0-9]+[_a-z0-9\.-][a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,20})/i") },{required:true,
                                        },{
                                            max: 150,
                                        }],
                                    })(
                                        <Input type="text" placeholder="Enter Email"/>
                                    )}
                                </FormItem>
                            </Col> */}
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>Address Line1</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('address-line1', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.billing_address_line1 ? orgAdminUserDetailsGet.billing_address_line1 : "",
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>Address Line2</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('address-line2', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.billing_address_line2 ? orgAdminUserDetailsGet.billing_address_line2 : "",
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>City /town /village</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('city_town_village', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.billing_address_city ? orgAdminUserDetailsGet.billing_address_city : "",
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>State/province/region </label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('state_province_region', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.billing_address_state ? orgAdminUserDetailsGet.billing_address_state : "",
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h4><label>Zipcode/postal code</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('zipcode_postalcode', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.billing_address_zipcode ? orgAdminUserDetailsGet.billing_address_zipcode : "",
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
                            <Col lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <h5><label>Country</label></h5>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('billing_address_country', {
                                        initialValue: orgAdminUserDetailsGet && orgAdminUserDetailsGet.billing_address_country === null ? undefined : orgAdminUserDetailsGet.billing_address_country,
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
                    </Form>
                </Modal>
            </>
        }
    </div>
	);
};

const EditSiteAdminPresentationalForm = Form.create()(EditSiteAdminPresentational);

export default EditSiteAdminPresentationalForm;


