import React,{useState,useEffect}  from "react";
import NumberOfOrgAdminsPresentational from "./NumberOfOrgAdminsPresentational";
import {connect} from "react-redux";
import {OrgAdminListService} from "../../../../appRedux/actions/Dashboards/SuperAdminDashboardAction/OrgAdminDashboardAction";


const NumberOfOrgAdminsContainer = (props)=> {
    const {NumberOfOrgAdminsCardShow ,OrgAdminListService ,orgAdminCount} = props ;
    const [state, setState] = useState({
    	page_number: ''
    });

	useEffect(() => {
        OrgAdminListService({...state})
    });
    
      
    return (
		<div>
			<NumberOfOrgAdminsPresentational cardColor="cyan" 
			      NumberOfOrgAdminsCardShow={NumberOfOrgAdminsCardShow}
                  NumberOfOrgAdminCount ={orgAdminCount}
			       />
		</div>
	 )	
}

const mapStateToProps = ({DashboardReducer}) => {
	return {	
		orgAdminCount : DashboardReducer.SuperAdminDashboardReducer.orgAdmindashboardReducer.orgadminCount,
	}
};

export default connect(mapStateToProps, {OrgAdminListService})(NumberOfOrgAdminsContainer);

