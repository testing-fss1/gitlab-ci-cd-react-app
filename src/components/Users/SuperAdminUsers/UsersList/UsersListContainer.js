import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import UsersListPresentational from "./UsersListPresentational";
import {SiteAdminUsersList} from "../../../../appRedux/actions/SuperAdmin/SiteAdminUsersList";
//import {UserStatusChange} from "../../../../appRedux/actions/CommonServices/UserStatusChange";

const UsersListContainer = (props) => {
	const {SiteAdminUsersList, payload, loadingData} = props;
	console.log('User List In Container : ', props);
	const [state, setState] = useState({
    	page_number: '',
    	number_of_records: '',
    });
	useEffect(()=>{
		SiteAdminUsersList({...state});
	}, [])
	console.log('payload : ', payload);
	return (
    	<UsersListPresentational 
			payload={payload}
    		loadingData={loadingData} 
    	/>
  	);
};

const mapStateToProps = ({SiteAdminReducer, commonData}) => {
	return {
		payload: SiteAdminReducer.SiteAdminUsersListReducer.payload.data,
		loadingData: commonData.loading,
	}
}

export default connect(mapStateToProps, {SiteAdminUsersList})(UsersListContainer);