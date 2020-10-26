import React, {useState} from "react";
import {connect} from "react-redux";

import AddNotifiTypesPresentational  from "./AddNotifiTypesPresentational";
import AddNotifiTypesView from "./AddNotifiTypesView";
import NotificationTypesList from "../NotificationTypesList";
import {AddNotifiTypesService, AddNotifiTypesServiceSuccess} from "../../../appRedux/actions/NotificationTypes";

const AddNotifiTypesContainer = (props) => {
	const {AddNotifiTypesService, AddNotifiTypesServiceDataStatus, AddNotifiTypesServiceDataStatusDes, AddNotifiTypesServiceSuccess} = props;
	const [state, setState] = useState({
		NotifiTypesButton : true, 
		NotifiTypesForm : false, 
		background: '#fff',
		sweet: false,
		BtnLoading: false,
	})
	const handleNotifiTypes = () => {
		setState({...state, NotifiTypesButton : false, NotifiTypesForm : true})
	}
	const handleClose = () => {
		setState({...state, NotifiTypesButton : true, NotifiTypesForm : false, BtnLoading: false})
		AddNotifiTypesServiceSuccess({})
	}
	const handleChangeComplete = (color) => {
	    setState({...state, background: color.hex });
	}
	const SweetOpen = () => {
		setState({...state, sweet: true, BtnLoading: true})
	}
	const SweetClose = () => {
		setState({...state, sweet: false, BtnLoading: false})
		AddNotifiTypesServiceSuccess({})
	}
	return (
		<div>
			{state.NotifiTypesButton && <div>
				<AddNotifiTypesPresentational handleClick={handleNotifiTypes} />
				<NotificationTypesList />
			</div>}
			{state.NotifiTypesForm && <AddNotifiTypesView handleClose={handleClose} state={state} handleChangeComplete={handleChangeComplete}
				AddNotifiTypesService={AddNotifiTypesService} AddNotifiTypesServiceDataStatusDes={AddNotifiTypesServiceDataStatusDes}
				AddNotifiTypesServiceDataStatus={AddNotifiTypesServiceDataStatus} SweetOpen={SweetOpen} SweetClose={SweetClose}
			/>}
		</div>
	);
};

const mapStateToProps = ({NotificationTypes}) => {
	return {
		AddNotifiTypesServiceDataStatus: NotificationTypes.AddNotifiTypesServiceReducer.AddNotifiTypesServiceDataStatus,
		AddNotifiTypesServiceDataStatusDes: NotificationTypes.AddNotifiTypesServiceReducer.AddNotifiTypesServiceDataStatusDes,
	}
}

export default connect(mapStateToProps, {AddNotifiTypesService, AddNotifiTypesServiceSuccess})(AddNotifiTypesContainer);
