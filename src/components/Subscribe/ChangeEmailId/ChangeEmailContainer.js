import React,{useState} from "react";
import ChangeEmailPresentational from "./ChangeEmailPresentational";
import {ChangeEmailRequestAddService,ChangeEmailRequestAddServiceSuccess,UniqueCodeVerifyServiceSuccess,UniqueCodeVerifyService,SubscribersListService}from "../../../appRedux/actions";
import {GroupsListService} from "../../../appRedux/actions";
import {connect} from "react-redux";

const ChangeEmailContainer = (props)=>{

	const {sm_email,sm_memb_id,ChangeEmailServiceDataStatusDes,
	 ChangeEmailServiceDataStatus,UniqueCodeVerifyServiceDataStatus,UniqueCodeVerifyServiceDataStatusDes,SubscribersListService} = props;


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
		props.ChangeEmailRequestAddService(values,props.sm_memb_id)
		
		setModalVerify(true)

		setState({...state, sweet: true})
	}

	/*const CodeVerifyOpen = () => {
		console.log("venky")
		setState({...state, CodeVerification: true, sweet: false})
		props.ChangeEmailRequestAddServiceSuccess({})
		props.UniqueCodeVerifyServiceSuccess({})
	}*/
	/*const SweetOpen = () => {
		setState({...state, sweet: true})
	}
	const SweetClose = () => {
		console.log("venkatesh")
		setModalVerify(true)
		setState({...state, sweet: false, CodeVerification: true})
		props.ChangeEmailRequestAddServiceSuccess({})
		props.UniqueCodeVerifyServiceSuccess({})
	}*/

	function handleSubmit1(values){
		console.log("values",values)
		props.UniqueCodeVerifyService(values,props.sm_memb_id,"email")
		props.ChangeEmailRequestAddServiceSuccess({})
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
		props.UniqueCodeVerifyServiceSuccess({})
		props.ChangeEmailRequestAddServiceSuccess({})
		props.SubscribersListService()

	}
	
	return(
		<div>
			<ChangeEmailPresentational
				state = {state} 
				handleCancel = {handleCancel}
				handleSubmit = {handleSubmit}
				showModal = {showModal}
				modal = {modal}
				sm_email = {sm_email}
				ChangeEmailServiceDataStatusDes = {ChangeEmailServiceDataStatusDes}
				UniqueCodeVerifyServiceDataStatusDes = {UniqueCodeVerifyServiceDataStatusDes}
				UniqueCodeVerifyServiceDataStatus = {UniqueCodeVerifyServiceDataStatus}
				ChangeEmailServiceDataStatus = {ChangeEmailServiceDataStatus}
				handleSubmit1 = {handleSubmit1}
				onConfirm = {onConfirm}
				CancelVerify = {CancelVerify}
				modalVerify = {modalVerify}
				onConfirm1 = {onConfirm1}
				/>
		</div>

		)
}

const mapStateToProps=({OrgEmployees})=>{
	return{

		ChangeEmailServiceDataStatus: OrgEmployees && OrgEmployees.ChangeEmailRequestAddServiceReducer && OrgEmployees.ChangeEmailRequestAddServiceReducer.ChangeEmailServiceDataStatus,
		ChangeEmailServiceDataStatusDes: OrgEmployees && OrgEmployees.ChangeEmailRequestAddServiceReducer && OrgEmployees.ChangeEmailRequestAddServiceReducer.ChangeEmailServiceDataStatusDes, 
		UniqueCodeVerifyServiceDataStatus: OrgEmployees && OrgEmployees.UniqueCodeVerifyServiceReducer && OrgEmployees.UniqueCodeVerifyServiceReducer.UniqueCodeVerifyServiceDataStatus,
		UniqueCodeVerifyServiceDataStatusDes: OrgEmployees && OrgEmployees.UniqueCodeVerifyServiceReducer && OrgEmployees.UniqueCodeVerifyServiceReducer.UniqueCodeVerifyServiceDataStatusDes,	
	

	}
}

export default connect(mapStateToProps,{ChangeEmailRequestAddService,ChangeEmailRequestAddServiceSuccess,UniqueCodeVerifyServiceSuccess,UniqueCodeVerifyService,GroupsListService,SubscribersListService})(ChangeEmailContainer);




