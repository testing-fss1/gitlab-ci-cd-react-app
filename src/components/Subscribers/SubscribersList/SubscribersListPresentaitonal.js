import React from "react";
import {Select, Card,Tooltip,Icon} from "antd";
import EditSubcriberContainer from '../EditSubscriber/EditSubscriberContainer'
import {Link} from "react-router-dom";
import ListGroupsContainer from '../GroupsListView/ListGroupsContainer';
import ResendEmailContainer from "../../ReusableComponents/CommonResendEmail";
import CustomLoader from "../../../components/CustomLoaderView";
import CommonPagination from "../../ReusableComponents/CommonPagination";



const Option = Select.Option;


const SubscibersListPresentational = (props) => {
	const {handleSubscribersListView,SubscribersListServicedata,SubscribersListServiceStatusDescription,handleChange,loadingData,SubscribersListTotalCount,handlePageChange,page_number,number_of_records}=props;
	console.log('SubscribersListServiceStatusDescription',SubscribersListServiceStatusDescription)
    return (
    	<Card className="gx-card" title="Subscribers List">
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
									<th>Email Id  </th>
									<th>Mobile Number</th>
									<th colSpan="2"> Status </th>
									<th colSpan="3"> Actions </th>
								</tr>
							</thead>
							{SubscribersListServicedata && SubscribersListServicedata.map((el, index) => 
							<tbody key={index}>
								<tr>
									<td><Link to={`/org-id/${el.org_id}/user-id/${el.sm_memb_id}/subscribers/list`}>
                                       {(el.sm_fullname == null || el.sm_fullname == "") ? 'NA' :el.sm_fullname}
                                        </Link>
									</td>
									<td>{el.sm_email}</td>
									<td>{el.sm_mobile_number}</td>
									<td>{el.sm_user_status == 0 ? "In-active" : el.sm_user_status == 1 ? "Active" : "Suspended"}</td>
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
									<td><EditSubcriberContainer el={el} page_number={page_number} number_of_records={number_of_records}/></td>
									<td> <Tooltip title="Add/Manage Groups"> 
										<span style={{color : "#038fde"}}><Icon  className="cs-tableEditIcon" type="solution" onClick={()=>handleSubscribersListView(el.sm_memb_id)} /></span>
										</Tooltip> </td>
									<td>{(el.sm_user_status!=1||el.sm_user_status!=2) && <ResendEmailContainer sm_email={el.sm_email} sm_memb_id={el.sm_memb_id}/>}</td>						
								</tr>
							</tbody>
							)}
						</table>
							<br />	
							{SubscribersListTotalCount > 0  && 
								<CommonPagination page_number={page_number} totalRecordsCount={SubscribersListTotalCount} handlePageChange={handlePageChange}/>
							}
							{SubscribersListTotalCount === 0 && 
							<div className="cs-records">                                                      
								<h3><i>-- No records found --</i></h3>                 
							</div>
							}						
					</div>
					</>
				}
		</Card>
	
    )
}

export default SubscibersListPresentational;
