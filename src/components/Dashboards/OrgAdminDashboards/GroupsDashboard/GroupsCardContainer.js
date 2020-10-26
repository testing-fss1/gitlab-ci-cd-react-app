import React,{useState,useEffect} from "react";
import GroupsCardPresentational from "./GroupsCardPresentational"
import {connect} from "react-redux";
import {groupDashboardService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/GroupDashboardAction";

const GroupsCardContainer =(props) => {
	const {GroupshandleHide ,GroupsCardVisible,groupdashboardData,groupdashboardCount,groupDashboardService} = props ;

	const [page_number , setPageNumber] = useState()
   
   useEffect(()=>{
    groupDashboardService(page_number);
  },[page_number]);

     const handlePageChange= (pageNumber)=>{
    console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)
  }
	return (
		<div>
			{ GroupsCardVisible &&
			   <GroupsCardPresentational GroupshandleHide={GroupshandleHide}
                groupDashboardListData = {groupdashboardData} groupdashboardCount={groupdashboardCount}
                page_number={page_number} handlePageChange={handlePageChange}
			   />
			}
		</div>
	)
}

const mapStateToProps = ({DashboardReducer})=>{
	return{
    groupdashboardCount : DashboardReducer.OrgAdminDashboardReducer.groupDashboardReducer.groupCount ,
    groupdashboardData : DashboardReducer.OrgAdminDashboardReducer.groupDashboardReducer.groupListData
	}
}
export default connect(mapStateToProps,{groupDashboardService})(GroupsCardContainer)

