import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import OrgEmpListPresentational from "./OrgEmpListPresentational";
import {OrgEmpListService} from "../../../appRedux/actions/OrgEmployees";
import {UserStatusChange} from "../../../appRedux/actions/CommonServices";

const OrgEmpListContainer = (props) => {
	const {OrgEmpListService, OrgEmpListServiceDataList, OrgEmpListServiceDataStatusDes, loadingData, UserStatusChange, UserStatusChangeServiceStatus,OrgEmpListServiceDataList_total_count} = props;

	const [state, setState] = useState({
		page_number: 1,
		number_of_records: 10,
	})

	useEffect(()=>{
		OrgEmpListService({...state});
	}, [])

	useEffect(()=>{
		if(UserStatusChangeServiceStatus == "user-status-change-successful") {
			OrgEmpListService({...state});
		}
	}, [UserStatusChangeServiceStatus])

	const handleChange = (value, sm_memb_id) => {
		UserStatusChange(value, sm_memb_id);
	}

    const pageChange = (pageNumber) => {    	
    	setState({...state, page_number: pageNumber})    	
		OrgEmpListService({...state});
    }

    return (
	    <OrgEmpListPresentational OrgEmpListServiceDataList={OrgEmpListServiceDataList} 
	    	OrgEmpListServiceDataStatusDes={OrgEmpListServiceDataStatusDes}
	    	loadingData={loadingData} 
	    	handleChange={handleChange}
	        pageChange = {pageChange}
	        OrgEmpListServiceDataList_total_count = {OrgEmpListServiceDataList_total_count}
	        state = {state}
		/>
    );
};

const mapStateToProps = ({OrgEmployees, commonData, CommonServices}) => {
	return {
		OrgEmpListServiceDataList: OrgEmployees && OrgEmployees.OrgEmpListServiceReducer && OrgEmployees.OrgEmpListServiceReducer.OrgEmpListServiceDataList,
		OrgEmpListServiceDataStatusDes: OrgEmployees && OrgEmployees.OrgEmpListServiceReducer && OrgEmployees.OrgEmpListServiceReducer.OrgEmpListServiceDataStatusDes,
		loadingData: commonData.loading,
		UserStatusChangeServiceStatus: CommonServices && CommonServices.UserStatusChangeReducer && CommonServices.UserStatusChangeReducer.UserStatusChangeServiceStatus,
		OrgEmpListServiceDataList_total_count: OrgEmployees && OrgEmployees.OrgEmpListServiceReducer && OrgEmployees.OrgEmpListServiceReducer.OrgEmpListServiceDataList_total_count,
	}
}

export default connect(mapStateToProps, {OrgEmpListService, UserStatusChange})(OrgEmpListContainer);
