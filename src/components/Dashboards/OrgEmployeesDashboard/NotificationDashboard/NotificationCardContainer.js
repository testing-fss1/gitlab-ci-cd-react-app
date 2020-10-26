import React,{useEffect,useState} from "react";
import NotificationCardPresentational from "./NotificationCardPresentational"
import {connect} from "react-redux";
import {NotificationService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/NotificationDashboardAction";

const NotificationCardContainer =(props) => {
	const {NotificationCardVisible,NotificationhandleHide,NotificationdashboardData,NotificationCount,NotificationService} = props ;
	
	const [page_number , setPageNumber] = useState()
	   
	   useEffect(()=>{
	    NotificationService(page_number);
	  },[page_number]);

	     const handlePageChange= (pageNumber)=>{
	    console.log("handlePageChange",pageNumber)
	    setPageNumber(pageNumber)
	  }
	return (
		<div>
			{NotificationCardVisible &&
			   <NotificationCardPresentational  NotificationhandleHide={NotificationhandleHide}
               NotificationdashboardData={NotificationdashboardData} NotificationCount={NotificationCount}
               handlePageChange={handlePageChange} page_number={page_number}
			   />
			}
		</div>
	)	
}

const mapStateToProps = ({DashboardReducer})=>{
	return{
    NotificationCount : DashboardReducer.OrgAdminDashboardReducer.notificationDashboardReducer.notificationCount,
    NotificationdashboardData : DashboardReducer.OrgAdminDashboardReducer.notificationDashboardReducer.notificationListData,
	}
}

export default connect(mapStateToProps,{NotificationService})(NotificationCardContainer)




