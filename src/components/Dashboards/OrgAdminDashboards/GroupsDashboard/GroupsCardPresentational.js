import React from "react";
import {Card, Button, Row, Col} from "antd";
import CommonPagination from "../../../ReusableComponents/CommonPagination";

const GroupsCardPresentational =(props)=>{
const {GroupshandleHide,groupDashboardListData,groupdashboardCount ,handlePageChange ,page_number} =props	;
	return (
		<div>  
			<div>
				<Card className="gx-card" title="Available Groups">
					<div className="cs-table">
						<table className="cs-table">
							<thead>
								<tr>
									<th>Full Name</th>
									<th>User Name</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
							{
			                  groupDashboardListData && groupDashboardListData.map((el, index) => 
			                	<tr key={index}>
									<td>{(el.notification_group_name==null || el.notification_group_name =="") ? "NA" : el.notification_group_name }</td>
									<td>{(el.sm_username == null || el.sm_username == "") ? "NA" : el.sm_username}</td>
									<td>
					                    {el.is_active_status==0 && <span className="cs-inactiveColor">In-Active</span>}
					                    {el.is_active_status==1 && <span className="cs-activeColor">Active</span>}
					                    {el.is_active_status==2 && <span className="cs-suspendColor">Suspended</span>}
					                    {el.is_active_status==3 && <span className="cs-bannedColor">Banned</span>}
				                    </td>
								</tr>)
								}	
							</tbody>
						</table>
					</div> <br />
					{groupdashboardCount > 0  && 
              <CommonPagination page_number={page_number} totalRecordsCount={groupdashboardCount} handlePageChange={handlePageChange}/>
            }
					{groupdashboardCount == 0 && 
						<div className="cs-records">                                                      
						<h3><i>-- No records found --</i></h3>                 
						</div>
					}
					<div className="cs-AlignRight cs-paginationCloseAlign"> 
						<Button type="primary"  className ="cs-btnHoverZoom" onClick={GroupshandleHide}>Close</Button>
					</div>
				</Card>
			</div>
	    </div>
	)
}

export default GroupsCardPresentational;