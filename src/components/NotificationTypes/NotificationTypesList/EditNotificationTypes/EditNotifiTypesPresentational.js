import React,{useState} from "react";
import {Input, Icon, Row, Col, Form, Button, Tooltip, Modal} from "antd";
import { SketchPicker } from 'react-color';

import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, AlphabetsAndNumbersWithSpecialChar, Max50Msg} from "../../../../constants/ValidationMessages";
import "../../../../customizedStyles/style.css";

const FormItem = Form.Item;

const EditNotifiTypesPresentational = (props) => {	

	const {form:{getFieldDecorator}, handleClose, OpenModal, handleCancel, closeModal, handleChangeComplete, NotifiTypesListState,
		el, state: {visible, background}, EditNotifiTypesService
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
	const handleUpdate = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				console.log("values : ", values, el.ornt_id)
				EditNotifiTypesService(values, el.ornt_id, NotifiTypesListState)
				closeModal();
			}
		});
	}

	
	return (
		<div>
			<Tooltip title="Edit Notification Types">
				<Icon className="cs-tableEditIcon" type="edit" theme="twoTone" onClick={OpenModal} />
			</Tooltip>        
			<Modal 
				className="cs-modalPlacement"
				title="Edit Notification Types"
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
					<Col lg={{ span: 24 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>Notification Type Name</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('notificationtypename', {
								initialValue: el && el.notification_type_name,
								rules: [{
									pattern: new RegExp("^[a-zA-Z.',-\\s]*$"), message: AlphabetsSpaceAndSpecialChar,
								},{
									required: true, message: MandatoryMsg,
								},{
					                max : 50, message: Max50Msg
					            }],
							})(
								<Input placeholder="Enter Notification Type Name"/>		                  
							)}
						</FormItem>
					</Col>
					<Col lg={{ span: 24 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>Notification Type Description</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('notificationtypedescription', {
								initialValue: el && el.notification_type_description,
								rules: [{
									pattern: new RegExp("^[a-zA-Z0-9.',-\\s]*$"), message: AlphabetsAndNumbersWithSpecialChar,
								},{
									required: true, message: MandatoryMsg,
								}],
							})(
								<Input placeholder="Enter Notification Type Description"/>		                  
							)}
						</FormItem>
					</Col>
					<Col lg={{ span: 24 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>Notification Type Color Code</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('notificationtypecolorcode', {
								initialValue: el && el.notification_type_colour_code,
								rules: [{
									required: true, message: MandatoryMsg,
								}],
							})(
								<SketchPicker
							        color={background}
							        onChangeComplete={handleChangeComplete}
							    />		                  
							)}
						</FormItem>
					</Col>
				</Row>
			</Modal> 			
		</div>
	);
};

const EditNotifiTypesPresentationalForm = Form.create()(EditNotifiTypesPresentational);

export default EditNotifiTypesPresentationalForm;