import React, {useState} from "react";
import {connect} from "react-redux";
import ResetPasswordPresentational from "./ResetPasswordPresentational";
import {ResetPassword, ResetPasswordServiceSuccess} from "../../../appRedux/actions/CommonServices";

function ResetPasswordContainer(props) {
	const [stateData, setstateData] = useState({
		visible: false,
		sweet: false
	})

	const setModalVisible = (boolean) => {
		setstateData({visible: boolean})
	}
	const onConfirm = () => {
		setstateData({sweet: false});
		props.ResetPasswordServiceSuccess({status : "", status_description: ""});
	}
	const handleOk = (user_id) => {
		props.ResetPassword(user_id);
		setstateData({visible: false, sweet: true})
	}

	const {sm_memb_id, sm_email, resetPasswordStatusDescription} = props;

	return (
		<ResetPasswordPresentational 
			state={stateData} 
			setModalVisible={setModalVisible} 
			sm_memb_id={sm_memb_id} 
			onConfirm={onConfirm} 
			sm_email={sm_email} 
			handleOk={handleOk} 
			resetPasswordStatusDescription={resetPasswordStatusDescription}
		/>
	)
}

const mapStateToProps = ({CommonServices}) => {
	return {
		resetPasswordStatusDescription: CommonServices.ResetPassword.statusDescription,
		resetPasswordStatus: CommonServices.ResetPassword.status,
	}
}

export default connect(mapStateToProps, {ResetPassword, ResetPasswordServiceSuccess})(ResetPasswordContainer);