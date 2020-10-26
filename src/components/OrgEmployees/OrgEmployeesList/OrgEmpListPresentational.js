import React from "react";
import {Select, Card, Tooltip, Icon} from "antd";
import {Link} from "react-router-dom";
import EditOrgEmployees from "./EditOrgEmployees";
import CustomLoader from "../../CustomLoaderView";
import ResetPasswordContainer from "../../ReusableComponents/CommonResetPassword";
import ResendEmailContainer from "../../ReusableComponents/CommonResendEmail";
import CommonPagination from "../../ReusableComponents/CommonPagination";


const Option = Select.Option;

const OrgEmpListPresentational = (props) => {
	const {OrgEmpListServiceDataList, OrgEmpListServiceDataStatusDes, loadingData, handleChange, pageChange, OrgEmpListServiceDataList_total_count,
		state
	} = props;
    return (
    	<Card className="gx-card" title="Org Employees List">
    		{
	            loadingData ?
	            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
	                <CustomLoader />
	          	</div>	          
	            :
	           	<>
			  		<div className="cs-table">
						<table className="cs-table" >
							<thead>
								<tr>
									<th> Full Name </th>
									<th> Email Id </th>
									<th colSpan="2"> Status </th>
									<th colSpan="4"> Actions </th>
								</tr>
							</thead>
							{OrgEmpListServiceDataList && OrgEmpListServiceDataList.length > 0 && OrgEmpListServiceDataList.map((el, index) => 
								<tbody key={index}>
									<tr>
										<td>{el.sm_fullname}</td>
										<td>{el.sm_email}</td>
										<td>{el.sm_user_status == 0 ? "In-active" : el.sm_user_status == 1 ? "Active" : "Suspend"}</td>
										<td>
											{el.sm_user_status == 0 ? "Yet to be activate" : el.sm_user_status == 1 ?
												<Select placeholder="Select" className="cs-fullWidth" onChange={(value)=>handleChange(value, el.sm_memb_id)}>
													<Option key={2}>Suspend</Option>
												</Select> 
												:
												<Select placeholder="Select" className="cs-fullWidth" onChange={(value)=>handleChange(value, el.sm_memb_id)}>
													<Option key={1}>Active</Option>
												</Select>
											}
										</td>
										<td>
											<EditOrgEmployees el={el} OrgEmpLisState={state}/>
										</td>
										<td>
											<ResetPasswordContainer sm_email={el.sm_email} sm_memb_id={el.sm_memb_id}/>
										</td>
										<td>
											{el.sm_user_status == 0 ? 
												<ResendEmailContainer sm_email={el.sm_email} sm_memb_id={el.sm_memb_id}/>
												:
												"NA"
											}
										</td>
										<td>
											<Tooltip title="Change Email Id">
												<Link to={`/change-email-id/user-id/${el.sm_memb_id}/email-id/${el.sm_email}`}>													
													<i className="icon icon-shuffle cs-tableEditIcon"/>
												</Link>
											</Tooltip>
										</td>						
									</tr>
								</tbody>
							)}
						</table>
						<br />						
						
						{OrgEmpListServiceDataList_total_count > 0  && 
			              <CommonPagination page_number={state.page_number} totalRecordsCount={OrgEmpListServiceDataList_total_count} handlePageChange={pageChange} />
			            }
			            {OrgEmpListServiceDataList_total_count === 0 && 
			              <div className="cs-records">                                                      
			                <h3><i>{OrgEmpListServiceDataStatusDes}</i></h3>                 
			              </div>
			            }
					</div>
				</>
			}
		</Card>
    )
}

export default OrgEmpListPresentational;
