import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Icon, Divider} from "antd";
import {Link} from "react-router-dom";

import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, EmailMsg, Max50Msg, Min10Msg, Max150Msg} from "../../../../constants/ValidationMessages";
import "../../../../customizedStyles/style.css";
import Sweetalert from "../../../ReusableComponents/CommonSweetAlert";

const Option = Select.Option;
const FormItem = Form.Item;

const ChangeEmailIdPresentational = (props) => {
	const {form:{getFieldDecorator}, handleClose, CodeVerifyOpen, ChangeEmailRequestAddService, sm_memb_id, sm_email, ChangeEmailServiceDataStatus,
		ChangeEmailServiceDataStatusDes, SweetOpen, SweetClose, UniqueCodeVerifyService, UniqueCodeVerifyServiceDataStatus, UniqueCodeVerifyServiceDataStatusDes,
		BackToOrgEmpPage, state: {CodeVerification, sweet, BtnLoading}
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
				console.log("values : ", values)				
				ChangeEmailRequestAddService(values, sm_memb_id);
				SweetOpen();
			}
		});
	}
	const handleVerify = (values) => {
		props.form.validateFields((err, values) => {
			if (!err) {        
				console.log("values : ", values)
				UniqueCodeVerifyService(values, sm_memb_id, "email");
				SweetOpen()
			}
		});
	}
	return (
		<div>
			{!CodeVerification &&
				<Card title="Change Email Id" className="gx-card">
				<Divider /><br />
				<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
					<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>Current Email Id</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('current_email_id', {
								initialValue: sm_email,
								rules: [{
									type: 'email',  pattern: new RegExp("/[a-z0-9]+[_a-z0-9\.-][a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,20})/i"), message: EmailMsg
								},{
									required: true, message: MandatoryMsg,
								},{
									max: 150, message: Max150Msg,
								}],
							})(
								<Input type="email" placeholder="Current Email Id" disabled />
							)}
						</FormItem>
					</Col>
					<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<h4><label><span className="cs-mandatoryColor">* </span>Enter New Email Id</label></h4>
						<FormItem {...formItemLayout}>
							{getFieldDecorator('new_email_id', {
								rules: [{
									type: 'email',  pattern: new RegExp("/[a-z0-9]+[_a-z0-9\.-][a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,20})/i"), message: EmailMsg
								},{
									required: true, message: MandatoryMsg,
								},{
									max: 150, message: Max150Msg,
								}],
							})(
								<Input type="email" placeholder="Enter New Email Id"/>
							)}
						</FormItem>
					</Col>
				</Row> 
				<Divider />
				<div className = "cs-AlignCenter">
					<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleClose}>
						<Link to={`/org-employees`}>Back</Link>
					</Button>
					<Button loading={BtnLoading} className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleSubmit}>Submit</Button>					
				</div>				
				</Card>
			}
			{CodeVerification && 
				<Card title="Unique code verification" className="gx-card">
					<Divider /><br />
					<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
						<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
							<h4><label><span className="cs-mandatoryColor">* </span>Unique code verification</label></h4>
							<FormItem {...formItemLayout}>
								{getFieldDecorator('unique_code_verification', {
									rules: [{
						                required: true, message: MandatoryMsg,
					                },{
					                	pattern: new RegExp("^[0-9]*$"), message: NumbersMsg
					                }],
								})(
									<Input type="text" placeholder="Enter Unique code verification"/>
								)}
							</FormItem>
						</Col>
					</Row> 
					<Divider />
					<div className = "cs-AlignCenter">
						<Button loading={BtnLoading} className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleVerify}>
							Verify
						</Button>					
					</div>				
				</Card>
			}
			{sweet && ChangeEmailServiceDataStatusDes &&
				<Sweetalert
					visible={sweet}
					onConfirm={ChangeEmailServiceDataStatus == "user-change-email-requests-insert-successfully" ? CodeVerifyOpen : SweetClose}
					statusDescription={ChangeEmailServiceDataStatusDes}
				/>
			}
			{sweet && UniqueCodeVerifyServiceDataStatusDes &&
				<Sweetalert
					visible={sweet}
					onConfirm={UniqueCodeVerifyServiceDataStatus == "email-changed-successfully" ? BackToOrgEmpPage : SweetClose}
					statusDescription={UniqueCodeVerifyServiceDataStatusDes}
				/>
			}
		</div>
	);
};

const ChangeEmailIdPresentationalForm = Form.create()(ChangeEmailIdPresentational);

export default ChangeEmailIdPresentationalForm;