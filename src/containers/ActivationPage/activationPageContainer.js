import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import ActivationPagePresentational from "./activationPagePresentational";
import { activationStatusCheck, registerPsw, activationStatusSuccess, registerPswSuccess } from "../../appRedux/actions/Password/activationStatusCheck";
import { setInitUrl } from "appRedux/actions/Auth";

function ActivationPageContainer(props) {
	console.log('PROPS IN ACTIVATION PAGE CONTAINER: ', props);
	
  
	const location = useLocation();
	const history = useHistory();

	const [stateData, setstateData] = useState({
		sweet : false,
		loadingButton: false
	})

	useEffect(() => {
	  if (props.token !== null) {
		history.push('/');
	  }
	}, [props.token, history])

	useEffect(() => {
		let activationCode = props.match.params.activationCode;
		console.log('props.match.params.activationCode: ', activationCode);
		
		props.activationStatusCheck(activationCode);
	}, [])

	const activationPage = (data) => {
		let activationCode = props.match.params.activationCode;
		props.registerPsw({data, activationCode});
		setstateData({...stateData, sweet: true, loadingButton: true });
	}

	const onConfirm = () => {
		if (props.registerPswStatus == "password-request-successfully-utilized") {
			history.push('/');
			props.setInitUrl('');
			props.activationStatusSuccess({ status: "", status_description: "" });
			props.registerPswSuccess({ status: "", status_description: "" });
			return setstateData({...stateData, sweet: false, loadingButton: false });
		}
		props.registerPswSuccess({ status: "", status_description: "" });
		return setstateData({...stateData, sweet: false, loadingButton: false });
	}

	const handleLoginPage = () => {
		history.push('/');
		props.setInitUrl('');
	}

	const { activationStatus, activationStatusDescription, registerPswStatusDescription, match: { path }, loadingData } = props;

	return(
		<div>
			<ActivationPagePresentational 
				state = {stateData}
				onConfirm = {onConfirm}
				rsw = {(data)=>activationPage(data)}
				activationStatus = {activationStatus}
				activationStatusDescription = {activationStatusDescription}
				registerPswStatusDescription = {registerPswStatusDescription}
				path={path}
				handleLoginPage={handleLoginPage}
				loadingData={loadingData}
			/> 
		</div>
	)
}

const mapStateToProps = ({ ChangePasswordReducer, commonData, auth }) => {
	return{
		token: auth.token,
		activationStatus: ChangePasswordReducer.ActivationCheck.activationStatus,
		activationStatusDescription: ChangePasswordReducer.ActivationCheck.activationStatusDescription,
		registerPswStatusDescription: ChangePasswordReducer.ActivationCheck.registerPswStatusDescription,
		registerPswStatus: ChangePasswordReducer.ActivationCheck.registerPswStatus,
		loadingData: commonData.loading
	}
};

export default connect(mapStateToProps, { activationStatusCheck, registerPsw, activationStatusSuccess, registerPswSuccess, setInitUrl })(ActivationPageContainer);