import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import PresentationalDashboard from "./PresentationalDashboard";
import PresentationalDashboardTableShow from "./PresentationalDashboardTableShow";


const SiteAdminDashboard =()=>{
	    const [state, setState] = useState({
			cardInvisible : true,
			NumberOfOrgAdminsCardVisible : false,
			NumberofOrgEmployeesCardVisible : false,
		})
	
	   const NumberOfOrgAdminsCardShow = () => {
		setState({...state, NumberOfOrgAdminsCardVisible : true, cardInvisible : false})
	   }
    
       const NumberOfOrgAdminsCardHide = () => {
		setState({...state, NumberOfOrgAdminsCardVisible : false, cardInvisible : true})
	   }
	   const NumberofOrgEmployeesCardShow = () => {
		setState({...state, NumberofOrgEmployeesCardVisible : true, cardInvisible : false})
	   }
    
       const NumberofOrgEmployeesCardHide = () => {
		setState({...state, NumberofOrgEmployeesCardVisible : false, cardInvisible : true})
	   }
     
        const {cardInvisible } = state;
		return (
			<div> 
			{
				cardInvisible   ? 
				   <PresentationalDashboard  
				   NumberOfOrgAdminsCardShow={NumberOfOrgAdminsCardShow} state={state}
				    NumberofOrgEmployeesCardShow={NumberofOrgEmployeesCardShow}/> 
	            :
			    <div>
					<PresentationalDashboardTableShow  
					 NumberOfOrgAdminshandleHide={NumberOfOrgAdminsCardHide} 
				     NumberofOrgEmployeeshandleHide={NumberofOrgEmployeesCardHide}
				     state={state} /> 
		         </div>
            }
			</div>	
		)	
}
export default SiteAdminDashboard;




