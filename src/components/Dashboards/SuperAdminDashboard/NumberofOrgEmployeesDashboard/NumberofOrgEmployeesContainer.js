import React,{useState,useEffect} from "react";
import NumberofOrgEmployeesPresentational from "./NumberofOrgEmployeesPresentational";
import {OrgEmployeeListService} from "../../../../appRedux/actions/Dashboards/SuperAdminDashboardAction/OrgEmployeeDashboardAction";
import {connect}  from "react-redux";

const NumberofOrgEmployeesContainer = (props)=> {
	const {NumberofOrgEmployeesCardShow ,OrgEmployeeListService ,orgEmployeeCount} = props ;
    const [state, setState] = useState({
    	page_number: ''
    });

	useEffect(() => {
        OrgEmployeeListService({...state})
    },[]);
    
    return (
		<div>
			<NumberofOrgEmployeesPresentational cardColor="teal"  
			NumberofOrgEmployeesCardShow={NumberofOrgEmployeesCardShow}
               NumberofOrgEmployees ={orgEmployeeCount}
			/>
		</div>
	)	
}

const mapStateToProps = ({DashboardReducer}) => {
	return {	
	orgEmployeeCount : DashboardReducer.SuperAdminDashboardReducer.orgEmployeedashboardReducer.orgemployeeCount,
    }
};

export default connect(mapStateToProps,{OrgEmployeeListService})(NumberofOrgEmployeesContainer);