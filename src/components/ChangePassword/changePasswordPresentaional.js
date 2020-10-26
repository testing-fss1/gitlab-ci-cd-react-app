import React from "react";
import { Button, Form, Input, Icon } from 'antd';
import "../../customizedStyles/style.css";
import Sweetalert from "../../components/ReusableComponents/CommonSweetAlert";
import { MandatoryMsg, Max20Msg, Min6Msg } from "../../constants/ValidationMessages";

const FormItem = Form.Item;

function ChangePasswordPresentaional(props) {
  const handleSubmit = e => {
		e.preventDefault();
		props.form.validateFields((err, values) => {
			if (!err) {
				props.psw(values);
			}
		});
	};
		
  const {form:{getFieldDecorator}, editChangePswStatusDescription, editChangePswStatus, state: {sweet, LoadingButton}, onConfirm} = props;

  const formItemLayout = {
    labelCol: {
      xs: {span: 50},
      sm: {span: 50},
    },
    wrapperCol: {
      xs: {span: 20},
      sm: {span: 24},
    },
  };
  const UserName = JSON.parse(localStorage.getItem('user_identifier'));
  return (
    <div style={{marginTop: "50px"}}>
      <div className="gx-login-container">
        <div className="gx-login-content">
          <div className="gx-login-header gx-text-center">
            <h1 className="gx-login-title">Change Password</h1>
          </div>
          <div>UserName : {UserName}</div>
          <br />
          <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">
            <FormItem>
              {getFieldDecorator('current_password', {
                rules: [
                  { min: 6, message: Min6Msg},
                  { max: 20, message: Max20Msg },
                  { required: true, message: MandatoryMsg }
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                  placeholder="Current Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('new_password', {
                rules: [
                  { min: 6, message: Min6Msg},
                  { max: 20, message: Max20Msg },
                  { required: true, message: MandatoryMsg }
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                  placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('confirm_new_password', {
                rules: [
                  { min: 6, message: Min6Msg},
                  { max: 20, message: Max20Msg },
                  {required: true, message: MandatoryMsg }
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                        placeholder="Confirm Password" />
              )}
            </FormItem>
            <FormItem className="gx-text-center">
              <Button type="primary" htmlType="submit" loading={LoadingButton}>
                Change Password
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
      {
        sweet && editChangePswStatusDescription &&
        <Sweetalert 
          visible={sweet}
          statusDescription={
            editChangePswStatus == "password-changed-successfully"?
            `${editChangePswStatusDescription}.      
            Re-directing to login page,
            please sign-in again.` :
            editChangePswStatusDescription
          } 
          onConfirm={onConfirm}
        />
      }
    </div>
  )
	
}

const WrappedNormalLoginForm = Form.create()(ChangePasswordPresentaional);

export default WrappedNormalLoginForm;