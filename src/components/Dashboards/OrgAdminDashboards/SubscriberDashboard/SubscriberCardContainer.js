import React,{useState,useEffect} from "react";
import SubscriberCardPresentational from "./SubscriberCardPresentational";
import {connect} from "react-redux";
import {SubscriberListService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/SubscriberDashboardAction";

const SubscriberCardContainer =(props) => {
const {SubscriberCardVisible,SubscriberhandleHide,subscriberdashboardData,subscriberdashboardCount
 ,SubscriberListService} = props ;

const [page_number , setPageNumber] = useState()
   
   useEffect(()=>{
    SubscriberListService(page_number);
  },[page_number]);

     const handlePageChange= (pageNumber)=>{
    console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)
  }
	return (
		<div>
			{ SubscriberCardVisible &&
			   <SubscriberCardPresentational SubscriberhandleHide={SubscriberhandleHide} 
                 subscriberdashboardListData = {subscriberdashboardData} subscriberdashboardCount={subscriberdashboardCount}
			    page_number={page_number}  handlePageChange={handlePageChange}
			   />
			}
		</div>
	)
}

const mapStateToProps = ({DashboardReducer})=>{
	return{
    subscriberdashboardCount : DashboardReducer.OrgAdminDashboardReducer.subscriberDashboardReducer.subscriberCount,
    subscriberdashboardData : DashboardReducer.OrgAdminDashboardReducer.subscriberDashboardReducer.subscriberListData,
	}
}

export default connect(mapStateToProps,{SubscriberListService})(SubscriberCardContainer)

