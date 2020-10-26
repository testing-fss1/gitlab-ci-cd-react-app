import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {message} from "antd";
import {useHistory, useLocation} from "react-router-dom";
import {userSignIn, userSignInFailed} from "../../appRedux/actions/Auth";
import SigninPresentational from "./SigninPresentational";

function SigninContainer(props) {
  
  const history = useHistory();

  const [stateData, setstateData] = useState({
    sweet : false,
    alert : false,
    LoadingButton : false,
    errorMessage : ''
  })

  useEffect(() => {
    if (props.dataFailed.status_description && props.dataFailed.status_description !== stateData.errorMessage) {

      setstateData({...stateData, errorMessage: props.dataFailed.status_description, LoadingButton : false});     

      message.error(props.dataFailed.status_description);
    
      setTimeout(() => {
        props.userSignInFailed({});
        setstateData({...stateData, errorMessage: '', LoadingButton : false})
      }, 3000);
    }

  }, [props.dataFailed.status_description])

  useEffect(() => {
    if (props.token !== null) {
      history.push('/');
      setstateData({...stateData, LoadingButton: false});
    }
  }, [props.token, history])

	const handleLogin = (e) => {
	  props.userSignIn(e);
    props.userSignInFailed({});
	  setstateData({
      ...stateData,
      LoadingButton:true,
      errorMessage:''
    });
  };
	const handleSweet = () => {
    setstateData({...stateData, sweet:true, alert:false});
  }
  const handleAlert = () => {
    setstateData({...stateData, sweet:false, alert:true});
  }
  const onConfirm = () => {
    setstateData({...stateData, sweet: false, alert:false});
  }

  return(
    <SigninPresentational 
      handleLogin={(e) => handleLogin(e)} 
      state={stateData}
      handleSweet={handleSweet}
      handleAlert={handleAlert}
      onConfirm={onConfirm}
    />
  )
}

const mapStateToProps = ({auth}) => {
	const {token, dataFailed} = auth;
	return {token, dataFailed}
};

export default connect(mapStateToProps, {userSignIn, userSignInFailed})(SigninContainer);