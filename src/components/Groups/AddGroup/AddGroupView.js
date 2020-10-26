import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider,Switch} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, EmailMsg} from "../../../constants/ValidationMessages";
import "../../../customizedStyles/style.css";
import Sweetalert from "../../../components/ReusableComponents/CommonSweetAlert";



const Option = Select.Option;
const FormItem = Form.Item;
const {TextArea} = Input;

const AddGroupView =(props)=>{
	const {form:{getFieldDecorator},state2:{selectedValue}, handleClose,radioChecked,addGroup,Handle_Group_Status,handle_allowance_status,onConfirm,AddGroupStatusDescription,allowance_status,NotifiTypesListServiceDataList,SweetClose,SweetOpen,state: {sweet,loadingButton},AddGroupStatus,handleNotificationName} = props;
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
    console.log('AddGroupStatusDescription',AddGroupStatusDescription)
    const handleSubmit = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				addGroup(values, allowance_status)
				SweetOpen()
			}
		});
	};
	var NotificationName = NotifiTypesListServiceDataList && NotifiTypesListServiceDataList.data && NotifiTypesListServiceDataList.data.map(list => {
		return (list.is_active_status===1||list.is_active_status==='1' )&& <Option key={list.ornt_id} value={list.ornt_id}>{list.notification_type_name}</Option>
	});
	console.log('sssss',NotificationName)
    return(
        <Card title="Add Group" className="gx-card">
			<Divider /><br />
			<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Group Name</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('notification_group_name', {
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
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Group Description</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('notification_group_description', {
							rules: [{
								pattern: new RegExp("^[a-zA-Z0-9.,'-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
							},{
								required: true, message: MandatoryMsg,
							}],
						})(
							<TextArea placeholder="Enter Group Description" autoSize />		                  
						)}
					</FormItem>
				</Col>
                <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                    <h4><label><span className="cs-mandatoryColor">* </span>Group Type</label></h4>
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('notification_group_type', {
							 initialValue: selectedValue ,
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
				<Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                    <h4><label>Group status</label></h4>
                    <FormItem {...formItemLayout}>
                        {getFieldDecorator('notification_group_subscriber_allowance_status', {
							 rules: [{
								required: false, message: MandatoryMsg,
							}]
                        })(
							<Switch checkedChildren="Closed" unCheckedChildren="Open"   onChange={handle_allowance_status} />
                        )}
                    </FormItem>
                </Col>
                {selectedValue== "Notification Type Specific User Group"  &&
                    <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                        <h4><label><span className="cs-mandatoryColor">* </span>Notification Type</label></h4>
                        <FormItem {...formItemLayout}>
                            {getFieldDecorator('notification_type_name', {
								 rules: [{
									required: true, message: MandatoryMsg,
								}]
                                })(
									<Select
									showSearch
									style={{width: "100%"}}
									placeholder="Select a Notification type"
									onChange={handleNotificationName}
									>
										{NotificationName}
									</Select>
                            )}
                        </FormItem>
                    </Col>
                }
			</Row> 
			<Divider />
			<div className = "cs-AlignCenter">
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleClose}>Close</Button>
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" loading={loadingButton} onClick={handleSubmit}>Submit</Button>					
			</div>
			{sweet && AddGroupStatusDescription &&
				<Sweetalert
					visible={sweet}
					onConfirm={AddGroupStatus == "organisation-related-groups-inserted-successfully" ? handleClose : SweetClose}
					statusDescription={AddGroupStatusDescription}
				/>
			}	 
			
		</Card>
    )
};


const AddGroupViewForm = Form.create()(AddGroupView);

export default AddGroupViewForm;