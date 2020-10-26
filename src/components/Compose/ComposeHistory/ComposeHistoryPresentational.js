import React from "react";
import {Card} from "antd";

function ComposeHistoryPresentational (props) {
	const {ComposeHistoryReducerList} = props;
	const History = ComposeHistoryReducerList.data
	console.log('History.length', History)
	return (
		<>
			<Card className="gx-card" title="History">
				{History && History.map((el, index) =>
					<Card>
						<div key={el.ormnr_id}> 
							<div>
								<span style={{fontWeight : "500", lineHeight : "1.6"}}>Notification Group Name : </span>
								{el.notification_group_name}
							</div>
							<div>
								<span style={{fontWeight : "500", lineHeight : "1.6"}}>Notification Group Type : </span>
								{el.notification_group_type}
							</div>
							<div>
								<span style={{fontWeight : "500", lineHeight : "1.6"}}>Notification Type Name : </span>
								{el.notification_type_name}
							</div>
							<div>
								<span style={{fontWeight : "500", lineHeight : "1.6"}}>Notification Method : </span>
								{el.notification_method}
							</div>
							<div>
								<span style={{fontWeight : "500", lineHeight : "1.6"}}>Added Date & Time : </span>
								{el.added_datetime}
							</div>
							<div>
								<span style={{fontWeight : "500"}}>Message : </span>
								{el.message}
							</div>
						</div>
					</Card>
				)}
				{History && History.length<=0 &&
					<div className="cs-records">                                                      
					<h3><i>-- No History Found --</i></h3>                 
					</div>
            	}
			</Card>
		</>
	  )
}

export default ComposeHistoryPresentational;