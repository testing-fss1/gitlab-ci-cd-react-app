import React, { useState, useEffect } from "react";
import { Button, Select, Row, Col, Radio, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Sweetalert from "../../components/ReusableComponents/CommonSweetAlert";

const FormItem = Form.Item;
const { Option } = Select;

const radioStyle = {
	display: 'block',
	height: '25px',
	lineHeight: '25px',
	width: '100%',
};

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

function onChange(value) {
	console.log(`selected ${value}`);
}

function SMSCard (props) {
	const {form: {getFieldDecorator}, styleName, headerStyle, footerStyle, GroupsListDataContainer, NotifiTypesListServiceDataList, handleFunctionData, ComposeSMSAction, ComposeSMSStatus, loadingData, state :{sweet}, onConfirm, setstate } = props

	const [checkedValue, setCheckedValue] = useState();
	const [selectedValue, setSelectedValue] = useState();
	const [finalComparedValue, setFinalComparedValue] = useState("");
	const [finalComparedValueNotifiTypeId, setFinalComparedValueNotifiTypeId] = useState("");

	const radioOnChange = e => {
		console.log('radio checked', e.target.value);
		setCheckedValue(e.target.value);
	};

	useEffect(() => {
		handleFunctionData(checkedValue)
	},[checkedValue]);

	const GroupName = GroupsListDataContainer && GroupsListDataContainer.data && GroupsListDataContainer.data.map(list => {
		return <Option key={list.orng_id} value={list.orng_id}>{list.notification_group_name}</Option>
	});

	const GroupNameTwo = GroupsListDataContainer && GroupsListDataContainer.data && GroupsListDataContainer.data

	const NotificationName = NotifiTypesListServiceDataList && NotifiTypesListServiceDataList.data && NotifiTypesListServiceDataList.data.map(list => {
		return <Option key={list.ornt_id} value={list.ornt_id}>{list.notification_type_name}</Option>
	});

	function GroupSelected(value) {
		console.log(`selected ${value}`);
		console.log('GroupNameTwo', GroupNameTwo);
		setSelectedValue(value);

		let comparedValue = GroupNameTwo.filter(el => 
			el.orng_id == value
		)

		console.log('comparedValue', comparedValue);
		console.log('comparedValue', comparedValue[0].notification_type_name);

		setFinalComparedValue(comparedValue[0].notification_type_name);
		setFinalComparedValueNotifiTypeId(comparedValue[0].ornt_id);
	}

	const SMSSubmit = (values) => {
		setstate({sweet : true});
		props.form.validateFields((err, values) => {
			if (!err) {
				console.log("values : ", values)
				ComposeSMSAction(values, checkedValue, finalComparedValueNotifiTypeId)
			}
		});
	}

	console.log("ComposeSMSStatus", ComposeSMSStatus)
	return (
		<div>
			<FormItem
				{...formItemLayout}
			>
				{getFieldDecorator('compose_group', {
					rules: [{
						required: true,
						message: "Please Select a Group"
					}]
				})(
					<Radio.Group onChange={radioOnChange}>
						<Radio className="gx-radio-wrapper" style={radioStyle} value={"Generic User Group"}>Generic User Group</Radio>
						<Radio className="gx-radio-wrapper" style={radioStyle} value={"Notification Type Specific User Group"}>Notification Type Specific User Group</Radio>
					</Radio.Group>
				)}
			</FormItem>
			<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 30]}>
				<Col lg={{ span: 24 }} md={{ span: 24}} sm={{ span: 24 }} xs={{ span: 24 }}>
					{checkedValue == "Generic User Group" && 
						<div>
							<h5><label>Group</label><span className="cs-mandatoryColor">*</span></h5>
							<FormItem
								{...formItemLayout}
							>
								{getFieldDecorator('notification_group_id', {
									rules: [{
										required: true,
										message: "This Field is Required"
									}]
								})(
									<Select
										mode="multiple"
										showSearch
										style={{width: "100%"}}
										placeholder="Select a Group List"
										onChange={onChange}
									>
										{GroupName}
									</Select>
								)}
							</FormItem>
							<h5><label>Notification Type</label><span className="cs-mandatoryColor">*</span></h5>
							<FormItem
								{...formItemLayout}
							>
								{getFieldDecorator('notification_type_id', {
									rules: [{
										required: true,
										message: "This Field is Required"
									}]
								})(
									<Select
										showSearch
										style={{width: "100%"}}
										placeholder="Select a Notification type"
										onChange={onChange}
									>
										{NotificationName}
									</Select>
								)}
							</FormItem>
							<h5><label>Your Message</label><span className="cs-mandatoryColor">*</span></h5>
							<FormItem
								{...formItemLayout}
							>
								{getFieldDecorator('SMS_message', {
									rules: [{
										required: true,
										message: "This Field is Required"
									}]
								})(
									<TextArea
										style={{width: "100%"}}
										placeholder="SMS Content Here"
										autoSize={{ minRows: 4, maxRows: 4 }}
									/>
								)}
							</FormItem>
						</div>
					}
					{checkedValue == "Notification Type Specific User Group" && 
						<div>
							<h5><label>Group</label><span className="cs-mandatoryColor">*</span></h5>
							<FormItem
								{...formItemLayout}
							>
								{getFieldDecorator('notification_group_id_2', {
									rules: [{
										required: true,
										message: "This Field is Required"
									}]
								})(
									<Select
										showSearch
										style={{width: "100%"}}
										placeholder="Select a Group List"
										onChange={GroupSelected}
									>
										{GroupName}
									</Select>
								)}
							</FormItem>
							{selectedValue && 
								<div>
									<h5><label>Notification Type : </label></h5>
									{finalComparedValue}
								</div>
							} <br />
							<h5><label>Your Message</label><span className="cs-mandatoryColor">*</span></h5>
							<FormItem
								{...formItemLayout}
							>
								{getFieldDecorator('SMS_message_2', {
									rules: [{
										required: true,
										message: "This Field is Required"
									}]
								})(
									<TextArea
										style={{width: "100%"}}
										placeholder="SMS Content Here"
										autoSize={{ minRows: 4, maxRows: 4 }}
									/>
								)}
							</FormItem>
						</div>
					}
				</Col>
			</Row>
			<div style = {{textAlign: "center"}}>
				<Button type="primary" onClick = {SMSSubmit}>Submit</Button>
			</div>
			{
				sweet && ComposeSMSStatus && ComposeSMSStatus =="notification-compose-info-insertion-success" &&
				<Sweetalert 
					visible={sweet}
					statusDescription={"Message Sent Successfully"} 
					onConfirm={()=>onConfirm()}
				/>
			}
		</div>
	)
};

export default Form.create()(SMSCard);