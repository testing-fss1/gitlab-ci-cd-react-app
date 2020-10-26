import React,{useState,useEffect} from "react";
import NumberOfOrgAdminsCardPresentational from "./NumberOfOrgAdminsCardPresentational"
import {connect} from "react-redux";
import {OrgAdminListService} from "../../../../appRedux/actions/Dashboards/SuperAdminDashboardAction/OrgAdminDashboardAction";

const NumberOfOrgAdminsCardContainer =(props) => {
 const {NumberOfOrgAdminsCardVisible,NumberOfOrgAdminshandleHide,orgAdminCount,orgadmintabledata,OrgAdminListService} = props ;
    const [page_number , setPageNumber] = useState()
   
   useEffect(()=>{
    OrgAdminListService(page_number);
  },[page_number]);

     const handlePageChange= (pageNumber)=>{
    console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)
  }


  console.log("kilo",page_number);
  
    return (
		<div>
			{NumberOfOrgAdminsCardVisible &&
			   <NumberOfOrgAdminsCardPresentational OrgAdminTableData = {orgadmintabledata}
			    NumberOfOrgAdminshandleHide={NumberOfOrgAdminshandleHide}  page_number={page_number}
			    orgAdminCount={orgAdminCount} handlePageChange={handlePageChange}/>
			}
		</div>
	)
}

const mapStateToProps = ({DashboardReducer}) => {
  return {
  	orgAdminCount : DashboardReducer.SuperAdminDashboardReducer.orgAdmindashboardReducer.orgadminCount,
  	orgadmintabledata : DashboardReducer.SuperAdminDashboardReducer.orgAdmindashboardReducer.orgadmindata
  }
}
export default connect(mapStateToProps, {OrgAdminListService})(NumberOfOrgAdminsCardContainer);
