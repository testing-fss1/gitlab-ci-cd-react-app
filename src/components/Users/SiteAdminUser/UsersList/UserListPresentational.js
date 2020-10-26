import React from "react";
import {Select, Card, Tooltip, Icon} from "antd";
import {Link} from "react-router-dom";
import '../../../../customizedStyles/style.css';
import CustomLoader from "../../../CustomLoaderView";
import EditOrgAdminContainer from '../EditOrgAdmin/EditOrgAdminContainer';
import ResendEmailContainer from '../../../ReusableComponents/CommonResendEmail/ResendEmailContainer';
import ResetPasswordContainer from '../../../ReusableComponents/CommonResetPassword/ResetPasswordContainer';
import ChangeEmailIdContainer from '../../../OrgEmployees/OrgEmployeesList/ChangeEmailId/ChangeEmailIdContainer';

const Option = Select.Option;

const UserListPresentational = (props) => {
	const {orgAdminPayload, handleChange, loadingData, orgAdminPayloadStatusDes} = props;
	console.log("loadingData:", loadingData)
    return (
    	<Card className="gx-card" title="Org Admin List">
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
									<th> Organization name </th>
									<th> Email id </th>
									<th colSpan="2"> Status </th>
									<th colSpan="4"> Actions </th>	
								</tr>
							</thead>
							{orgAdminPayload && orgAdminPayload.length > 0 && orgAdminPayload.map((el, index) =>
								<tbody key={index}>
									<tr>
										<td>{el.sm_fullname}</td>
										<td>{el.org_name}</td>
										<td>{el.sm_email}</td>
										<td>{el.sm_user_status == 0 ? "In-active" : el.sm_user_status == 1 ? "Active" : "Suspend"}</td>
										<td>
											{el.sm_user_status == 0 ? "Yet to be activate" : el.sm_user_status == 1 ?
												<Select placeholder="Select"  style= {{width : 100}} className="cs-fullWidth" onChange={(value)=>handleChange(value, el.sm_memb_id)}>
													<Option key={2}>Suspend</Option>
												</Select> 
												:
												<Select placeholder="Select"  style= {{width : 100}} className="cs-fullWidth" onChange={(value)=>handleChange(value, el.sm_memb_id)}>
													<Option key={1}>Active</Option>
												</Select>
											}
										</td>
										<td><EditOrgAdminContainer sm_memb_id={el.sm_memb_id} org_id={el.org_id}/></td>
										<td><ResetPasswordContainer sm_memb_id={el.sm_memb_id} sm_email={el.sm_email} /></td>
										<td>{el.sm_user_status != 0 ? "NA" :
												<ResendEmailContainer sm_memb_id={el.sm_memb_id} sm_email={el.sm_email} />
											} 
										</td>
										<td>
											<Tooltip title="Change Email Id">
												<Link to={`/change-email-id/user-id/${el.sm_memb_id}/email-id/${el.sm_email}`}>
													<Icon className="cs-tableEditIcon" type="edit" theme="twoTone" />
												</Link>
											</Tooltip>
										</td>						
									</tr>
								</tbody>
							)}
						</table>
							<br />
							{orgAdminPayload && orgAdminPayload.length == '0' &&
									<div className="cs-records">{orgAdminPayloadStatusDes}</div>
							}
					</div>
				</>
			}
		</Card>
    )
}

export default UserListPresentational;