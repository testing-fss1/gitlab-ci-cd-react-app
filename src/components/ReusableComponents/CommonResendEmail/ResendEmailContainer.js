import React, {useState} from "react";
import {connect} from "react-redux";
import ResendEmailPresentational from "./ResendEmailPresentational";
import {ResendEmail, ResendActivationEmailServiceSuccess} from "../../../appRedux/actions/CommonServices";

function ResendEmailContainer(props) {
	const [stateData, setstateData] = useState({
		visible: false,
		sweet: false
	})
	const setModalVisible = (boolean) => {
		setstateData({visible: boolean});
	}
	const onConfirm = () => {
		setstateData({sweet: false});
		props.ResendActivationEmailServiceSuccess({status : "", status_description: ""});
	}
	const  handleOk = (user_id) => {
		props.ResendEmail(user_id);
		setstateData({visible: false, sweet: true})
	}
	const {sm_memb_id, sm_email, resendEmailStatusDescription} = props;
	return (
		<ResendEmailPresentational 
			setModalVisible={setModalVisible} 
			sm_memb_id={sm_memb_id} 
			state={stateData} 
			onConfirm={onConfirm} 
			sm_email={sm_email} 
			handleOk={handleOk} 
			resendEmailStatusDescription={resendEmailStatusDescription}
		/>
	)
}

const mapStateToProps = ({CommonServices}) => {
	console.log(CommonServices)
	return {
		resendEmailStatusDescription: CommonServices.ResendEmail.statusDescription,
		resendEmailStatus: CommonServices.ResendEmail.status,
	}
}

export default connect(mapStateToProps, {ResendEmail, ResendActivationEmailServiceSuccess})(ResendEmailContainer);