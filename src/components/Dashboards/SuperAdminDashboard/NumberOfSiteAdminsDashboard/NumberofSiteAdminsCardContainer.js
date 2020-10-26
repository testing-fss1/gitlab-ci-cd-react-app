import React,{useState,useEffect} from "react";
import NumberofSiteAdminsCardPresentational from "./NumberofSiteAdminsCardPresentational";
import {connect} from "react-redux";
import {SiteAdminListService} from "../../../../appRedux/actions/Dashboards/SuperAdminDashboardAction/SiteAdminDashboardAction";


const  NumberofSiteAdminsCardContainer =(props) => {
	const {NumberofSiteAdminsCardVisible,NumberofSiteAdminshandleHide ,siteadmintabledata,siteAdminCount ,SiteAdminListService} = props ;
	  const [page_number , setPageNumber] = useState()
   
   useEffect(()=>{
    SiteAdminListService(page_number);
  },[page_number]);

     const handlePageChange= (pageNumber)=>{
    console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)
  }


	return (
		<div>
			{
			   <NumberofSiteAdminsCardPresentational 
			   NumberofSiteAdminshandleHide={NumberofSiteAdminshandleHide} 
			   SiteAdminTableData = {siteadmintabledata} NumberofSiteAdmin = {siteAdminCount}
			   page_number={page_number} handlePageChange={handlePageChange}
			   />
			}
		</div>
	)
}


const mapStateToProps = ({DashboardReducer}) => {
  return {
  	siteAdminCount : DashboardReducer.SuperAdminDashboardReducer.siteAdmindashboardReducer.siteadminCount,
  	siteadmintabledata : DashboardReducer.SuperAdminDashboardReducer.siteAdmindashboardReducer.siteadmindata
}
}
export default connect(mapStateToProps, {SiteAdminListService})(NumberofSiteAdminsCardContainer);
