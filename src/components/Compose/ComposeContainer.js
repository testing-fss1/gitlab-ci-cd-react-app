import React, {useEffect, useState} from "react";
import { Card } from "antd";
import {connect} from "react-redux";
import ComposePresentational from "./ComposePresentational";
import {NotifiTypesListService, NotifiTypesStatusChange} from "appRedux/actions/NotificationTypes";
import {GroupsListService} from 'appRedux/actions/Groups';
import {ComposeSMSAction, ComposeEMailAction, ComposeVoiceMailAction} from 'appRedux/actions/ComposeAction';
import {useHistory} from "react-router-dom";

function ComposeContainer(props){
	const history = useHistory();
	const {NotifiTypesListService, NotifiTypesListServiceDataList, NotifiTypesStatusChange, ComposeSMSStatus, loadingData, GroupsListDataContainer, GroupsListService, ComposeSMSAction, ComposeEMailAction, ComposeVoiceMailAction,ComposeEMailStatus, ComposeVoiceMailStatus} = props;

	const [valuesToSend, setValuesToSend] = useState();
	

	useEffect(() => {
		GroupsListService();
		NotifiTypesListService({});
	}, [])

	const handleFunctionData = (data) => {
		console.log("data", data);
		setValuesToSend(data)
	}

			
	const [state, setstate] = useState({
		sweet : false,
	})

	const onConfirm = () => {
		setstate({sweet : false});
		history.push('/compose');	
	}
	
	 console.log("state",state);

	console.log("NotifiTypesListServiceDataList", NotifiTypesListServiceDataList)
	console.log("GroupsListDataContainer", GroupsListDataContainer)
	return (
		<div>
			<ComposePresentational 
				GroupsListDataContainer = {GroupsListDataContainer}
				NotifiTypesListServiceDataList = {NotifiTypesListServiceDataList}
				handleFunctionData = {handleFunctionData} setstate={setstate}
				loadingData={loadingData} onConfirm={onConfirm} state={state}
				ComposeSMSAction = {ComposeSMSAction}
				ComposeEMailAction = {ComposeEMailAction}
				ComposeVoiceMailAction = {ComposeVoiceMailAction}
				ComposeSMSStatus={ComposeSMSStatus}
				ComposeEMailStatus={ComposeEMailStatus}
				ComposeVoiceMailStatus = {ComposeVoiceMailStatus}
			/>
		</div>
	)
}

const mapStateToProps = ({NotificationTypes, GroupsReducer, commonData,ComposeReducer}) => {
	console.log("ComposeReducer",ComposeReducer.ComposeVoiceMailReducer.ComposeVoiceMailStatus);
	return {
		NotifiTypesListServiceDataList: NotificationTypes && NotificationTypes.NotifiTypesListServiceReducer && NotificationTypes.NotifiTypesListServiceReducer.NotifiTypesListServiceDataList,
		GroupsListDataContainer : GroupsReducer && GroupsReducer.GroupsListService && GroupsReducer.GroupsListService.GroupsListData.data,
		loadingData: commonData.loading, 
		ComposeSMSStatus : ComposeReducer.ComposeSMSReducer.ComposeStatus,
		ComposeEMailStatus : ComposeReducer.ComposeEMAILReducer.ComposeEMailStatus,
		ComposeVoiceMailStatus : ComposeReducer.ComposeVoiceMailReducer.ComposeVoiceMailStatus,
	}
}

export default connect(mapStateToProps, {ComposeSMSAction, ComposeEMailAction, ComposeVoiceMailAction, GroupsListService, NotifiTypesListService, NotifiTypesStatusChange})(ComposeContainer);