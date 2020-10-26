import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import PresentationalDashboard from "./PresentationalDashboard";
import PresentationalDashboardTableShow from "./PresentationalDashboardTableShow";


const OrgEmployeesDashboard =()=>{
	    const [state, setState] = useState({
			cardInvisible : true,
			SubscriberCardVisible : false,
			GroupsCardVisible : false,
			NotificationCardVisible : false,
		})
	
	   const SubscriberCardShow = () => {
		setState({...state, SubscriberCardVisible : true, cardInvisible : false})
	   }
    
       const SubscriberCardHide = () => {
		setState({...state, SubscriberCardVisible : false, cardInvisible : true})
	   }
	   const GroupsCardShow = () => {
		setState({...state, GroupsCardVisible : true, cardInvisible : false})
	   }
    
       const GroupsCardHide = () => {
		setState({...state, GroupsCardVisible : false, cardInvisible : true})
	   }
	   const NotificationCardShow = () => {
		setState({...state, NotificationCardVisible : true, cardInvisible : false})
	   }
    
       const NotificationCardHide = () => {
		setState({...state, NotificationCardVisible : false, cardInvisible : true})
	   }
     
        const {cardInvisible } = state;
		return (
			<div> 
			{
				cardInvisible   ? 
				   <PresentationalDashboard  
				   SubscriberCardShow={SubscriberCardShow} state={state}
				   GroupsCardShow={GroupsCardShow} NotificationCardShow={NotificationCardShow}/> 
	            :
			    <div>
					<PresentationalDashboardTableShow  
					 SubscriberhandleHide={SubscriberCardHide} 
					 GroupshandleHide={GroupsCardHide}
				     NotificationhandleHide={NotificationCardHide}
				     state={state} /> 
		         </div>
            }
			</div>	
		)	
}
export default OrgEmployeesDashboard;




