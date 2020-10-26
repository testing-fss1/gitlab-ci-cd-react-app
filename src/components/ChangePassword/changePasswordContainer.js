import React, { useState } from "react";
import {connect} from "react-redux";
import {changePsw, changePasswordResponce} from "../../appRedux/actions/Password";
import {userSignOut} from "appRedux/actions/Auth";
import ChangePasswordPresentaional from "./changePasswordPresentaional";

function ChangePasswordContainer(props) {
	const [stateData, setstateData] = useState({
		sweet : false,
		LoadingButton : false
	})

	const changePassword = (data) => {
		props.changePsw(data);
		setstateData({sweet: true, LoadingButton:true});
	}

	const onConfirm = (status) => {
		let changedData = {dataStatusDiscription: '', dataStatus: ''}
		setstateData({sweet : false, LoadingButton : false});
		if(editChangePswStatus == "password-changed-successfully") {
			props.userSignOut(1);
			props.changePasswordResponce(changedData);
		}
		props.changePasswordResponce(changedData);
	}
	const {editChangePswStatusDescription, editChangePswStatus} = props

	return(
		<ChangePasswordPresentaional
			state = {stateData}
			psw = {(data)=>changePassword(data)}
			onConfirm = {onConfirm}
			editChangePswStatusDescription = {editChangePswStatusDescription}
			editChangePswStatus = {editChangePswStatus}
		/>
	)
}

const mapStateToProps = ({ChangePasswordReducer}) => {
	return{
		editChangePswStatusDescription: ChangePasswordReducer.ChangePassword.editChangePswStatusDescription,
		editChangePswStatus: ChangePasswordReducer.ChangePassword.editChangePswStatus
	}
};

export default connect(mapStateToProps, {changePsw, userSignOut, changePasswordResponce})(ChangePasswordContainer);
