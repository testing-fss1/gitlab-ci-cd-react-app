import React,{useEffect,useState}  from "react";
import NotificationPresentational from "./NotificationPresentational";
import {connect} from "react-redux"
import {NotificationService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/NotificationDashboardAction";

const NotificationContainer = (props)=> {
	const {NotificationCardShow,NotificationService,NotificationCount }= props;

    const [state, setState] = useState({
    	page_number: ''
    });

	useEffect(() => {
        NotificationService({...state})
    },[]);
     
    return (
		<div>
			<NotificationPresentational cardColor="cyan" NotificationCardShow={NotificationCardShow}
              NotificationCount ={NotificationCount}
			/>
		</div>
    )
}

const mapStateToProps = ({DashboardReducer})=>{
	return {
        NotificationCount : DashboardReducer.OrgAdminDashboardReducer.notificationDashboardReducer.notificationCount,
	}
}

export default connect(mapStateToProps,{NotificationService})(NotificationContainer);
