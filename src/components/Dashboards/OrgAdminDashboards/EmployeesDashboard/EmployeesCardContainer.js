import React,{useState,useEffect} from "react";
import EmployeesCardPresentational from "./EmployeesCardPresentational"
import {connect} from "react-redux" ;
import {OrgEmployeesListService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/OrgEmployeesDashboardAction";

const EmployeesCardContainer =(props) => {
	const  {EmployeesCardVisible, EmployeeshandleHide,orgEmployeetabledata,orgEmployeeCount,OrgEmployeesListService} = props ;

	const [page_number , setPageNumber] = useState()
   
   useEffect(()=>{
    OrgEmployeesListService(page_number);
  },[page_number]);

    const handlePageChange= (pageNumber)=>{
    console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)
  }
	return (
		<div>
			{EmployeesCardVisible &&
			   <EmployeesCardPresentational  EmployeeshandleHide={EmployeeshandleHide}
			   orgEmployeeTableListdata={orgEmployeetabledata} orgEmployeeCount={orgEmployeeCount}
 			   page_number={page_number} handlePageChange={handlePageChange} />
			}
		</div>
	)
}

const mapStateToProps = ({DashboardReducer}) => {
  return {
  	orgEmployeeCount : DashboardReducer.OrgAdminDashboardReducer.orgEmployeeDashboardReducer.orgemployeeCount,
  	orgEmployeetabledata : DashboardReducer.OrgAdminDashboardReducer.orgEmployeeDashboardReducer.orgemployeeListdata,
  }
}
export default connect(mapStateToProps, {OrgEmployeesListService})(EmployeesCardContainer);
