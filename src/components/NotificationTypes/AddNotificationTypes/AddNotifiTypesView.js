import React from "react";
import {Input, Card, Row, Col, Form, Button, Divider} from "antd";
import { SketchPicker } from 'react-color';

import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, AlphabetsAndNumbersWithSpecialChar, Max50Msg} from "../../../constants/ValidationMessages";
import "../../../customizedStyles/style.css";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";

const FormItem = Form.Item;

const AddNotifiTypesView = (props) => {
	console.log("Props in AddNotifiTypesView : ", props)
	const {form: {getFieldDecorator}, handleClose, AddNotifiTypesServiceDataStatus, AddNotifiTypesServiceDataStatusDes, handleChangeComplete, 
		AddNotifiTypesService, SweetClose, SweetOpen, state: {background, sweet, BtnLoading}
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
	const handleSubmit = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				console.log("values : ", values);
				AddNotifiTypesService(values);
				SweetOpen()
			}
		});
	}
	return (
		<Card title="Add Notification Types" className="gx-card">
			<Divider /><br />
			<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Notification Type Name</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('notificationtypename', {
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
				<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Notification Type Description</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('notificationtypedescription', {
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
				<Col lg={{ span: 12 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
					<h4><label><span className="cs-mandatoryColor">* </span>Notification Type Color Code</label></h4>
					<FormItem {...formItemLayout}>
						{getFieldDecorator('notificationtypecolorcode', {
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
			<Divider />
			<div className = "cs-AlignCenter">
				<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleClose}>Close</Button>
				<Button loading={BtnLoading} className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleSubmit}>Submit</Button>					
			</div>	
			{sweet && AddNotifiTypesServiceDataStatusDes &&
				<Sweetalert
					visible={sweet}
					onConfirm={AddNotifiTypesServiceDataStatus == "org-rel-notification-types-info-insertion-success" ? handleClose : SweetClose}
					statusDescription={AddNotifiTypesServiceDataStatusDes}
				/>
			}			
		</Card>
	);
};

const AddNotifiTypesViewForm = Form.create()(AddNotifiTypesView);

export default AddNotifiTypesViewForm;