import React from "react";
import {Button, Form, Input} from "antd";
import IntlMessages from "util/IntlMessages";
import { Min6Msg, Max20Msg } from "../../constants/ValidationMessages";

const FormItem = Form.Item;

function SigninPresentational(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.handleLogin(values);
      }
    });
  };

  const {
    form: {getFieldDecorator}, 
    state: {LoadingButton, sweet, alert}, 
    handleSweet, 
    handleAlert, 
    onConfirm
  } = props;

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">
            </div>
            <div className="gx-app-logo">
              <img alt="example" height="90" src={require("assets/images/cs-loginPageIcon.png")}/>
              <img alt="example" src={require("assets/images/cs-loginPageLogo.png")}/>
            </div>
            <div className="gx-app-logo-wid" style={{marginTop : "30px"}}>
              <h3 style={{marginLeft : "15px", color : "#ffffff"}}><IntlMessages id="app.userAuth.signIn"/></h3>
              <p style={{marginLeft : "15px"}}>By Signing In, you can avail full features of our services.</p>
            </div>
          </div>
          <div className="gx-app-login-content">
            <Form onSubmit={handleSubmit} className="gx-signin-form gx-form-row0">

              <FormItem>
                {getFieldDecorator('userIdentifier', {
                  rules: [{
                    required: true, message: 'email is required'
                  }],
                })(
                  <Input placeholder="user name"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Password is required'},
                  { min: 6, message: Min6Msg},
                  { max: 20, message: Max20Msg }],
                })(
                  <Input type="password" placeholder="Password"/>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" loading={LoadingButton} className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signIn"/>
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}


function myFunction(props) {
  var txt;
  var r = window.confirm("Contact 'Admin' for Username/Reset password");
  if (r == true) {
    props.onConfirm();
  } else {
    props.onConfirm();
  }
}

const WrappedNormalLoginForm = Form.create()(SigninPresentational);

export default WrappedNormalLoginForm;