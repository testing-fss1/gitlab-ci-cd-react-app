import React from "react";
import {Card, Button, Row, Col} from "antd";
import CommonPagination from "../../../ReusableComponents/CommonPagination";

const  NumberOfOrgAdminsCardPresentational =(props)=> {		
	const {NumberOfOrgAdminshandleHide,OrgAdminTableData,orgAdminCount,handlePageChange,page_number} = props ;
	return (
		<div>  
			<div>
				<Card className="gx-card" title="Available Org Admins">
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
			                  OrgAdminTableData && OrgAdminTableData.map((el, index) => 
			                	<tr key={index}>
									<td>{(el.sm_fullname==null || el.sm_fullname =="") ? "NA" : el.sm_fullname }</td>
									<td>{(el.sm_username == null || el.sm_username == "") ? "NA" : el.sm_username}</td>
									<td>
					                    {el.sm_user_status==0 && <span className="cs-inactiveColor">In-Active</span>}
					                    {el.sm_user_status==1 && <span className="cs-activeColor">Active</span>}
					                    {el.sm_user_status==2 && <span className="cs-suspendColor">Suspended</span>}
					                    {el.sm_user_status==3 && <span className="cs-bannedColor">Banned</span>}
				                    </td>
								</tr>)
								}
						    </tbody>
						</table>
					</div> <br />
					 {orgAdminCount > 0  && 
              <CommonPagination page_number={page_number} totalRecordsCount={orgAdminCount} handlePageChange={handlePageChange}/>
            }
					{orgAdminCount == 0 && 
							<div className="cs-records">                                                      
							<h3><i>-- No records found --</i></h3>                 
							</div>
						}
					<div className="cs-AlignRight cs-paginationCloseAlign"> 
						<Button type="primary"  className ="cs-btnHoverZoom" onClick={NumberOfOrgAdminshandleHide}>Close</Button>
					</div>
				</Card>
			</div>
	    </div>
	)
	
}

export default NumberOfOrgAdminsCardPresentational;