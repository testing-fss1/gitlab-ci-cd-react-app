import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import NumberOfOrgAdminsCardContainer from "./NumberOfOrgAdminsDashboard/NumberOfOrgAdminsCardContainer";
import NumberofOrgEmployeesCardContainer from "./NumberofOrgEmployeesDashboard/NumberofOrgEmployeesCardContainer";
import NumberofSiteAdminsCardContainer from "./NumberOfSiteAdminsDashboard/NumberofSiteAdminsCardContainer";


const PresentationalDashboardTable = (props)=>{
	const {state : {NumberOfOrgAdminsCardVisible ,NumberofOrgEmployeesCardVisible ,NumberofSiteAdminsCardVisible},
		NumberOfOrgAdminshandleHide, NumberofOrgEmployeeshandleHide ,NumberofSiteAdminshandleHide} = props
	return (
	    <div>
			 <div>
			 	{   NumberOfOrgAdminsCardVisible && <NumberOfOrgAdminsCardContainer 
			 		NumberOfOrgAdminsCardVisible={NumberOfOrgAdminsCardVisible} 
			 		NumberOfOrgAdminshandleHide={NumberOfOrgAdminshandleHide}/> } 
			 </div>
			 <div>
			 	{NumberofOrgEmployeesCardVisible && <NumberofOrgEmployeesCardContainer
			 	 NumberofOrgEmployeesCardVisible={NumberofOrgEmployeesCardVisible} 
			 	 NumberofOrgEmployeeshandleHide={NumberofOrgEmployeeshandleHide}/> } 
			 </div>
			 <div>
			 	{NumberofSiteAdminsCardVisible && <NumberofSiteAdminsCardContainer
			 	 NumberofSiteAdminsCardVisible={NumberofSiteAdminsCardVisible} 
			 	 NumberofSiteAdminshandleHide={NumberofSiteAdminshandleHide}/> } 
			 </div>
	    </div>
    )       
}
export default PresentationalDashboardTable ;