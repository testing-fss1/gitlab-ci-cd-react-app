import React from "react";
import {Avatar} from "antd";
import CustomScrollbars from "util/CustomScrollbars";
import Auxiliary from "util/Auxiliary";


const NotificationItem = ({SubscriberListData}) => {
	const { added_datetime,message,notification_group_name,notification_group_type,notification_method,notification_type_name } = SubscriberListData;
	
	return (
		<li className="gx-media">
			<div className="gx-media-body gx-align-self-center">
				<p className="gx-fs-sm gx-mb-0"> message :  {message ? message : "NA"} <br/>
												 notification_group_name :  {notification_group_name ? notification_group_name : "NA"} <br/>
												
												 notification_method:  {notification_method ? notification_method : "NA"} <br/>
												 notification_type_name : {notification_type_name ? notification_type_name : "NA"} </p>
				<span className="gx-meta-date"><small>added_datetime : {added_datetime ? added_datetime : "NA"}</small></span>
			</div>
		</li>
	);
};

function NotificationListPresentational (props) {
	const {SubscriberListData, user} = props;
	
	return (
		<Auxiliary>
			<div className="gx-popover-header">
				<h3 className="gx-mb-0">Notifications</h3>
			</div>
			<CustomScrollbars className="gx-popover-scroll">
				<ul className="gx-sub-popover">
					{user === "Subscriber" && 
						<>
							{SubscriberListData  && SubscriberListData.map((SubscriberListData, index) => <NotificationItem key={index} SubscriberListData={SubscriberListData }/>)}
							{(SubscriberListData == undefined || SubscriberListData.length == "0") && "No Notifications Yet"}
						
						</>
					}
					
				</ul>
			</CustomScrollbars>
		</Auxiliary>
	)
};

export default NotificationListPresentational;




/*<p className="gx-fs-sm gx-mb-0"><b>{event_ref_name}</b></p>
				<p className="gx-fs-sm gx-mb-0">{event_description} by {activity_by_sm_memb_name}({activity_by_user_privilege_summary})</p>*/
