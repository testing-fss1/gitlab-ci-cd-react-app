import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import EmployeesCardContainer from "./EmployeesDashboard/EmployeesCardContainer";
import SubscriberCardContainer from "./SubscriberDashboard/SubscriberCardContainer";
import GroupsCardContainer from "./GroupsDashboard/GroupsCardContainer";
import NotificationCardContainer from "./NotificationDashboard/NotificationCardContainer";

const PresentationalDashboardTable = (props)=>{
	const {state : {EmployeesCardVisible,SubscriberCardVisible ,GroupsCardVisible ,NotificationCardVisible },
		SubscriberhandleHide ,EmployeeshandleHide  ,GroupshandleHide, NotificationhandleHide} = props;
	return (
	    <div>
			<div>
			  	{EmployeesCardVisible && <EmployeesCardContainer EmployeesCardVisible={EmployeesCardVisible}  EmployeeshandleHide={EmployeeshandleHide}/>}
			</div> 
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