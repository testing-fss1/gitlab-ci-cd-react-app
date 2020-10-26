import React from "react";
import { Tooltip, Popover } from "antd";
import NotificationListPresentational from "./NotificationListPresentational";

function NotificationIconPresentational(props) {
	const {SubscriberListData, user, totalDataCount } = props;
	console.log("venkatesh",SubscriberListData)
	return (
		<Tooltip title="Notification">
			<Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" 
				content={<NotificationListPresentational 
					SubscriberListData={SubscriberListData}
					user={user}
				/>} trigger="click">
				{(totalDataCount != 0 && totalDataCount <= 9) &&
					<span className="gx-pointer gx-status-pos gx-d-block">
						<img alt="" src={require("assets/images/bellWithNotification.png")}/>
						<div className="gx-status gx-status-rtl gx-small" style={{color : "#fa8c15", fontSize : "12px", marginTop : "1px", marginRight : "1px", fontWeight : "400", height : "14px", width : "14px" , borderRadius : "50%", backgroundColor : "#ffffff", textAlign : "center", paddingTop: "1px"}}>{totalDataCount}</div>
					</span>
				}
				{totalDataCount > 9 && 
					<span className="gx-pointer gx-status-pos gx-d-block">
						<img alt="" src={require("assets/images/bellWithNotification.png")}/>
						<div className="gx-status gx-status-rtl gx-small" style={{color : "#fa8c15", fontSize : "12px", marginTop : "1px", marginRight : "1px", fontWeight : "400", height : "14px", width : "14px" , borderRadius : "50%", backgroundColor : "#ffffff", textAlign : "center", paddingTop: "1px"}}>9+</div>
					</span>
				}
				{totalDataCount == 0 && 
					<span className="gx-pointer gx-status-pos gx-d-block">
						<img alt="" src={require("assets/images/bellWithoutNotification.png")}/>
					</span>
				}
			</Popover>
		</Tooltip>
	);
};

export default NotificationIconPresentational;
