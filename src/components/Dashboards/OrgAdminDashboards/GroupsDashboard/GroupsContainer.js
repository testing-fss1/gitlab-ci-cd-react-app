import React,{useState, useEffect} from "react";
import GroupsPresentational from "./GroupsPresentational";
import {connect} from "react-redux";
import {groupDashboardService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/GroupDashboardAction";

const GroupsContainer = (props)=> {
	const {GroupsCardShow ,groupDashboardService ,groupCount} = props ;
	const [state, setState] = useState({
    	page_number: ''
    });

	useEffect(() => {
        groupDashboardService({...state})
    },[]);
     
    return (
		<div>
			<GroupsPresentational cardColor="teal"  GroupsCardShow ={GroupsCardShow}
             NumberofGroups = {groupCount}
			/>
		</div>
	)
}

const mapStateToProps = ({DashboardReducer}) =>{
	return {
        groupCount : DashboardReducer.OrgAdminDashboardReducer.groupDashboardReducer.groupCount
	}
}

export default connect(mapStateToProps,{groupDashboardService})(GroupsContainer);
