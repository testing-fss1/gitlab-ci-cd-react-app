import React,{useState,useEffect} from "react";
import EmployeesPresentational from "./EmployeesPresentational";
import {connect} from "react-redux";
import {OrgEmployeesListService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/OrgEmployeesDashboardAction";

const EmployeesContainer = (props)=> {
	const {EmployeesCardShow ,OrgEmployeesListService,orgEmployeeCount}= props;
    const [state, setState] = useState({
    	page_number: ''
    });

	useEffect(() => {
        OrgEmployeesListService({...state})
    },[]);
  
    return (
		<div>
			<EmployeesPresentational cardColor="cyan" EmployeesCardShow={EmployeesCardShow} 
			NumberofOrgEmployees = {orgEmployeeCount}
			/>
		</div>
	)	
}

const mapStateToProps = ({DashboardReducer}) => {	
	return {	
	orgEmployeeCount : DashboardReducer.OrgAdminDashboardReducer.orgEmployeeDashboardReducer.orgemployeeCount,
    }
};

export default connect(mapStateToProps, {OrgEmployeesListService})(EmployeesContainer);

