import React,{useState}from "react";
import ChangePhoneNumberPresentational from "./ChangePhoneNumberPresentational";
import {ChangeMobileRequestAddService,ChangeMobileRequestAddServiceSuccess,UniqueMobileCodeVerifyServiceSuccess,UniqueMobileCodeVerifyService,SubscribersListService}from "../../../appRedux/actions";
import {connect} from "react-redux";


const ChangePhoneNumberContainer = (props)=>{

const {ChangeMobileRequestAddService,ChangeMobileRequestAddServiceSuccess,UniqueMobileCodeVerifyServiceSuccess,
		UniqueMobileCodeVerifyService,ChangeMobileServiceDataStatus,ChangeMobileServiceDataStatusDes,sm_mobile_number,
		UniqueCodeVerifyServiceDataStatus,UniqueCodeVerifyServiceDataStatusDes,SubscribersListService} = props

	const [modal,setModal] = useState(false);
	const [modalVerify,setModalVerify] = useState(false);

	const[state, setState] = useState({
		CodeVerification: false,
		sweet: false,
		sweet1 : false
	})

	function handleCancel(){
		setModal(false)
	}

	function showModal(){
		setModal(true)
	}

	function handleSubmit(values){
		console.log("values",values)
		props.ChangeMobileRequestAddService(values,props.sm_memb_id)
		
		setModalVerify(true)

		setState({...state, sweet: true})
	}

	function handleSubmit1(values){
		console.log("values",values)
		props.UniqueMobileCodeVerifyService(values,props.sm_memb_id,"phone_number")
		props.ChangeMobileRequestAddServiceSuccess({})
		setState({...state, sweet1 : true })
	}

	function CancelVerify(){
		setModalVerify(false)

	}

	function onConfirm(){
		console.log("hello world")
		setState({...state, sweet: false, CodeVerification: true})
		setModal(false)
	}

	function onConfirm1(){
		setState({...state, sweet1: false, CodeVerification: false})
		props.UniqueMobileCodeVerifyServiceSuccess({})
		props.ChangeMobileRequestAddServiceSuccess({})
		props.SubscribersListService()

	}
	


	return(
		<div>
			<ChangePhoneNumberPresentational
				state = {state} 
				handleCancel = {handleCancel}
				handleSubmit = {handleSubmit}
				showModal = {showModal}
				modal = {modal}
				ChangeMobileServiceDataStatusDes = {ChangeMobileServiceDataStatusDes}
				UniqueCodeVerifyServiceDataStatusDes = {UniqueCodeVerifyServiceDataStatusDes}
				UniqueCodeVerifyServiceDataStatus = {UniqueCodeVerifyServiceDataStatus}
				ChangeMobileServiceDataStatus = {ChangeMobileServiceDataStatus}
				handleSubmit1 = {handleSubmit1}
				onConfirm = {onConfirm}
				CancelVerify = {CancelVerify}
				modalVerify = {modalVerify}
				onConfirm1 = {onConfirm1}
				sm_mobile_number = {sm_mobile_number}

			/>
		</div>

		)
}

const mapStateToProps=({CommonServices})=>{
	return{

		ChangeMobileServiceDataStatus : CommonServices && CommonServices.ChangeMobileNumber && CommonServices.ChangeMobileNumber.ChangeMobileNumberReducer && CommonServices.ChangeMobileNumber.ChangeMobileNumberReducer.ChangeMobileServiceDataStatus ,
		ChangeMobileServiceDataStatusDes :CommonServices && CommonServices.ChangeMobileNumber && CommonServices.ChangeMobileNumber.ChangeMobileNumberReducer && CommonServices.ChangeMobileNumber.ChangeMobileNumberReducer.ChangeMobileServiceDataStatusDes ,
		UniqueCodeVerifyServiceDataStatus: CommonServices && CommonServices.ChangeMobileNumber && CommonServices.ChangeMobileNumber.UniqueCodeReducer && CommonServices.ChangeMobileNumber.UniqueCodeReducer.UniqueCodeVerifyServiceDataStatus,
		UniqueCodeVerifyServiceDataStatusDes: CommonServices && CommonServices.ChangeMobileNumber && CommonServices.ChangeMobileNumber.UniqueCodeReducer && CommonServices.ChangeMobileNumber.UniqueCodeReducer.UniqueCodeVerifyServiceDataStatusDes,	
	

	}
}

export default connect(mapStateToProps,{ChangeMobileRequestAddService,ChangeMobileRequestAddServiceSuccess,UniqueMobileCodeVerifyService,UniqueMobileCodeVerifyServiceSuccess,SubscribersListService})(ChangePhoneNumberContainer);
