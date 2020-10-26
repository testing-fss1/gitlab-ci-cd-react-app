import React,{useState,useEffect} from "react";
import NumberofOrgEmployeesCardPresentational from "./NumberofOrgEmployeesCardPresentational";
import {connect} from "react-redux";
import {OrgEmployeeListService} from "../../../../appRedux/actions/Dashboards/SuperAdminDashboardAction/OrgEmployeeDashboardAction";

 const  NumberofOrgEmployeesCardContainer =(props) => {
	const {NumberofOrgEmployeesCardVisible,NumberofOrgEmployeeshandleHide ,orgEmployeetabledata,orgEmployeeCount,OrgEmployeeListService} =props ;

const [page_number , setPageNumber] = useState()
   
   useEffect(()=>{
    OrgEmployeeListService(page_number);
  },[page_number]);

     const handlePageChange= (pageNumber)=>{
    console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)
  }

	return (
		<div>
			{
			   <NumberofOrgEmployeesCardPresentational 
			   NumberofOrgEmployeeshandleHide={NumberofOrgEmployeeshandleHide} 
			   orgEmployeeDashboardtabledata = {orgEmployeetabledata} orgEmployeeCount={orgEmployeeCount}
			   page_number ={page_number} handlePageChange={handlePageChange}
			   />
			}
		</div>
	)
}

const mapStateToProps = ({DashboardReducer}) => {
  return {
  	orgEmployeeCount : DashboardReducer.SuperAdminDashboardReducer.orgEmployeedashboardReducer.orgemployeeCount,
  	orgEmployeetabledata : DashboardReducer.SuperAdminDashboardReducer.orgEmployeedashboardReducer.orgemployeeData,
  }
}

export default connect(mapStateToProps, {OrgEmployeeListService})(NumberofOrgEmployeesCardContainer);

