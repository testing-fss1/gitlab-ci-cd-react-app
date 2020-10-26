import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import NumberOfOrgAdminsCardContainer from "./NumberOfOrgAdminsDashboard/NumberOfOrgAdminsCardContainer";
import NumberofOrgEmployeesCardContainer from "./NumberofOrgEmployeesDashboard/NumberofOrgEmployeesCardContainer";

const PresentationalDashboardTable = (props)=>{
	const {state : {NumberOfOrgAdminsCardVisible ,NumberofOrgEmployeesCardVisible },
		NumberOfOrgAdminshandleHide, NumberofOrgEmployeeshandleHide} = props
	return (
	    <div>
			 <div>
			 	{NumberOfOrgAdminsCardVisible && <NumberOfOrgAdminsCardContainer 
			 		NumberOfOrgAdminsCardVisible={NumberOfOrgAdminsCardVisible} 
			 		 NumberOfOrgAdminshandleHide={NumberOfOrgAdminshandleHide}/> } 
			 </div>
			 <div>
			 	{NumberofOrgEmployeesCardVisible && <NumberofOrgEmployeesCardContainer
			 	 NumberofOrgEmployeesCardVisible={NumberofOrgEmployeesCardVisible} 
			 	 NumberofOrgEmployeeshandleHide={NumberofOrgEmployeeshandleHide}/> } 
			 </div>
	    </div>
    )       
}
export default PresentationalDashboardTable ;