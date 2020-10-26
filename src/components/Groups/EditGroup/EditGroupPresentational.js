import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider,Tooltip,Modal, Switch} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../constants/ValidationMessages";
import "../../../customizedStyles/style.css";


const Option = Select.Option;
const FormItem = Form.Item;
const {TextArea} = Input;

const EditGroupPresentational = (props) => {
	const {form:{getFieldDecorator},editModalVisible,editModalVisibleHide,modalVisible,selectedValueState,radioChecked,EditGroup,el,
        handle_allowance_status, allowance_status,NotifiTypesListServiceDataList,page_number,number_of_records
    } = props;
    console.log('selectedValue',selectedValueState)
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
    const NotificationName = NotifiTypesListServiceDataList && NotifiTypesListServiceDataList.data && NotifiTypesListServiceDataList.data.map(list => {
		return (list.is_active_status===1||list.is_active_status==='1' )&& <Option key={list.ornt_id} value={list.notification_type_name}>{list.notification_type_name}</Option>
	});
	const mobilenumberprefixSelector = getFieldDecorator('mobile_country_code', {initialValue: '+1'})(
	  <Select className="cs-countryPrefix">
	  	<Option key={1} value={+91}>{"+91"}</Option>
	  </Select>        
	);
	
	const handleOk = (values) => {
	    props.form.validateFieldsAndScroll((err, values) => {
		      if (!err) {
                EditGroup(values,el.orng_id,allowance_status,page_number,number_of_records);
                editModalVisibleHide();
		      }
	    });
    };
	return (
        <>
            <Tooltip title="Edit Group"> 
					<Icon className="cs-tableEditIcon" type="edit" theme="twoTone" onClick={editModalVisible}/>
			</Tooltip>
            <Modal
                className="cs-modalPlacement"
                visible={modalVisible}
                onOk={() => this.handleOk()}
                onCancel={() => editModalVisibleHide()}
                title="Edit Group"
                width="40%"
      
                footer={[
                  <Button key="back" onClick={() => editModalVisibleHide()}>
                    Cancel
                  </Button>,
                  <Button key="Update" type="primary" onClick={() => handleOk()}>
                    Update
                  </Button>
                ]}
            >
                <Form>
                        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>                 
                            <h4><label><span className="cs-mandatoryColor">* </span>Group Name</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('notification_group_name', {
                                    initialValue:el.notification_group_name,
                                    rules: [{
                                        pattern: new RegExp("^[a-zA-Z.',-\\s]*$"), message: AlphabetsSpaceAndSpecialChar,
                                    },{
                                        required: true, message: MandatoryMsg,
                                    }],
                                })(
                                    <Input placeholder="Enter Group Name"/>		                  
                                )}
                            </FormItem>
                        </Col>
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>                 
                            <h4><label><span className="cs-mandatoryColor">* </span>Group Description</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('notification_group_description', {
                                    initialValue:el.notification_group_description,
                                    rules: [{
                                        pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
                                    },{
                                        required: true, message: MandatoryMsg,
                                    }],
                                })(
                                    <TextArea placeholder="Enter Address" autoSize />		                  
                                )}
                            </FormItem>
                        </Col>
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>                
                            <h4><label><span className="cs-mandatoryColor">* </span>Group Type</label></h4>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('notification_group_type', {
                                    initialValue: el.notification_group_type ,
                                    rules: [{
                                        required: true, message: MandatoryMsg,
                                    }]
                                })(
                                    <Radio.Group onChange={radioChecked}>
                                        <Radio  value={"Generic User Group"}>Generic User Group</Radio>
                                        <Radio  value={"Notification Type Specific User Group"}>Notification Type Specific User Group</Radio>
                                    </Radio.Group>
                                )}
                            </FormItem>
                        </Col>
                        <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>   
                                <h4><label>Subscriber Allowance Status</label></h4>
                                <FormItem {...formItemLayout}>
                                    <Switch defaultChecked={allowance_status == "Open" ? true : false} checkedChildren="Open" unCheckedChildren="Closed" onChange={handle_allowance_status} />
                                </FormItem>
                            </Col>
                            {selectedValueState=== "Notification Type Specific User Group"  &&
                            <Col lg={{ span: 12}} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>  
                                <h4><label><span className="cs-mandatoryColor">* </span>Notification Type</label></h4>
                                <FormItem {...formItemLayout}>
                                    {getFieldDecorator('notification_type_name', {
                                        initialValue: el.notification_type_name ,
                                            rules: [{
                                            required: true, message: MandatoryMsg,
                                        }]
                                        })(
                                            <Select
                                            showSearch
                                            style={{width: "100%"}}
                                            placeholder="Select a Notification type"
                                            >
                                                {NotificationName}
                                            </Select>
                                        )}
                                </FormItem>
                            </Col>
                        }   
                    </Row>
                </Form>
            </Modal>
        </>
	);
};

const EditGroupPresentationalForm = Form.create()(EditGroupPresentational);

export default EditGroupPresentationalForm;

/* <Select placeholder="Select Salutation" className="cs-fullWidth">
                                                <Option value="open">Open</Option>
                                                <Option value="closed">Closed</Option>
                                            </Select> */
