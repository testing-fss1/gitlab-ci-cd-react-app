import React from "react";
import "../../customizedStyles/style.css";
import { Button, Form, Input, Card } from 'antd';
import { Redirect, Link } from "react-router-dom";
import Sweetalert from "../../components/ReusableComponents/CommonSweetAlert";
import { MandatoryMsg, Max20Msg, Min6Msg } from "../../constants/ValidationMessages";
import IntlMessages from "util/IntlMessages";
import Loader from '../../components/CustomLoaderView';

const FormItem = Form.Item;

function ActivationPagePresentational(props) {
	console.log('PROPS IN ACTIVATION PAGE PRESENTATIONAL: ', props);

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.rsw(values);
      }
    });
  };

  const {
    form:{getFieldDecorator}, 
    activationStatus,
    activationStatusDescription, 
    onConfirm, 
    state: { sweet, loadingButton }, 
    registerPswStatusDescription,
    handleLoginPage,
    loadingData
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

  return (
    <div style={{marginTop: "50px"}}>
      {
        loadingData ?

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div><Loader /></div>
        </div>

        :

        <>
          { 
            activationStatus == "password-request-code-valid" ?           
            <div className="gx-login-container">
              <div className="gx-login-content">

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img alt="example" height="90" src={require("assets/images/cs-loginPageIcon.png")}/>
                <img alt="example" src={require("assets/images/cs-loginPageLogo.png")}/>
              </div>
                <div className="gx-mb-4">
                  <h2> {props.path.includes('activate') ? "Activate Account" : "Reset Password"} </h2>
                  <p><IntlMessages id="appModule.enterPasswordReset"/></p>
                </div>


                <Form onSubmit={handleSubmit} className="gx-login-form gx-form-row0">

                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{
                        min: 6, message: Min6Msg,
                      },{
                        max: 20, message: Max20Msg,
                      }, {
                        required: true, message: MandatoryMsg,
                      }],
                    })(
                      <Input type="password" placeholder="New Password"/>
                    )}
                  </FormItem>

                  <FormItem>
                    {getFieldDecorator('password_confirmation', {
                      rules: [{
                        min: 6, message: Min6Msg,
                      },{
                        max: 20, message: Max20Msg,
                      },{
                        required: true, message: MandatoryMsg,
                      }],
                    })(
                      <Input placeholder="Retype New Password" type="password"/>
                    )}
                  </FormItem>

                  <FormItem>
                    <Button type="primary" htmlType="submit" loading={loadingButton}>
                      {props.path.includes('activate') ? "Activate" : "Reset"}
                    </Button>
                  </FormItem>
                  
                </Form>

              </div>
            </div>
            
            : 

            <div className="cs-AlignCenter">
              <Card>
                {activationStatusDescription}
                <br />
                  <Link to="/signin" onClick={handleLoginPage}>Click here to re-direct to login page</Link>
              </Card>
            </div>

          }
        </>
      }
      {
        sweet && registerPswStatusDescription.length>0 &&
        <Sweetalert visible={sweet} btnTxt="OK" statusDescription={registerPswStatusDescription} onConfirm={onConfirm} />
      }
    </div>
  )
}

const WrappedNormalLoginForm = Form.create()(ActivationPagePresentational);

export default WrappedNormalLoginForm;