import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import SubscriberCardContainer from "./SubscriberDashboard/SubscriberCardContainer";
import GroupsCardContainer from "./GroupsDashboard/GroupsCardContainer";
import NotificationCardContainer from "./NotificationDashboard/NotificationCardContainer";

const PresentationalDashboardTable = (props)=>{
	const {state : {SubscriberCardVisible ,GroupsCardVisible ,NotificationCardVisible },
		SubscriberhandleHide,GroupshandleHide, NotificationhandleHide} = props
	return (
	    <div>
			 <div>
			 	{SubscriberCardVisible && <SubscriberCardContainer SubscriberCardVisible={SubscriberCardVisible}  SubscriberhandleHide={SubscriberhandleHide}/> } 
			 </div>
			 <div>
			 	{GroupsCardVisible && <GroupsCardContainer GroupsCardVisible={GroupsCardVisible}  GroupshandleHide={GroupshandleHide}/> } 
			 </div>
			 <div>
			 	{NotificationCardVisible && <NotificationCardContainer NotificationCardVisible={NotificationCardVisible}  NotificationhandleHide={NotificationhandleHide}/> } 
			 </div>
	    </div>
    )       
}
export default PresentationalDashboardTable ;