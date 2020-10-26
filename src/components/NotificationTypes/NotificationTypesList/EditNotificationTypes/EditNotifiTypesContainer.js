import React, {useState, useEffect,useSelector} from "react";
import {connect} from "react-redux";
import EditNotifiTypesPresentational  from "./EditNotifiTypesPresentational";
import {EditNotifiTypesService} from "../../../../appRedux/actions/NotificationTypes";

const EditNotifiTypesContainer = (props) => {

	const {EditNotifiTypesService, el, NotifiTypesListState} = props;
	const[state, setState] = useState({
		visible: false,
		background: '#fff'
	})

	const OpenModal = () => {
		setState({...state, visible: true})
	} 
	const handleCancel = () => {
		setState({...state, visible: false})
	}
	const closeModal = () => {
		setState({...state, visible: false})
	}
	const handleChangeComplete = (color) => {
	    setState({...state, background: color.hex });
	}
	useEffect(() => {
		setState({...state, background: el.notification_type_colour_code})
	}, [el.notification_type_colour_code])
	
	return (		
		<EditNotifiTypesPresentational state={state} OpenModal={OpenModal} handleCancel={handleCancel} closeModal={closeModal} 
			handleChangeComplete={handleChangeComplete} NotifiTypesListState={NotifiTypesListState} el={el} 
			EditNotifiTypesService={EditNotifiTypesService}
		/>
	);
};

export default connect(null, {EditNotifiTypesService})(EditNotifiTypesContainer);
