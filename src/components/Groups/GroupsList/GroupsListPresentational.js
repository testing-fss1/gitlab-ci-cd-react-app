import React from "react";
import {Select, Card,Tooltip, Icon} from "antd";
import EditGroup from '../EditGroup';
import CustomLoader from "../../../components/CustomLoaderView";
import {Link} from "react-router-dom";
import CommonPagination from "../../ReusableComponents/CommonPagination";


const Option = Select.Option;

const GroupsListPresentational = (props) => {
	const {notification_group_name,GroupsListStatusDescription,GroupsListData,handlegroupstatus,loadingData,handleGroupsListView,handlePageChange,page_number,GroupsListCount,number_of_records}=props;
	console.log('GroupsListStatusDescription',GroupsListStatusDescription)
    return (
    	<Card className="gx-card" title="Groups List">
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
									<th> Group Name </th>
									<th>Group Type  </th>
									<th>Notification Type</th>
									<th>Subscriber allowance status</th>
									<th colSpan="2">Group Status </th>
									<th colSpan="2"> Actions </th>
								</tr>
							</thead>
							{GroupsListData && GroupsListData.map((el,index) =>
							<tbody  key={index}>
								<tr>
									<td>
									<Link to={`GroupSingleView/orngid/${el.orng_id}`}>
											{el.notification_group_name}
									</Link>
									</td>
									<td>{el.notification_group_type}</td>
									<td>{(el.notification_type_name==''||el.notification_type_name==null)?'NA':el.notification_type_name}</td>
									<td>{el.notification_group_subscriber_allowance_status}</td>
									<td>
									{el.is_active_status==1 && <span style={{color : "#23c450"}}>Enabled</span>}
									{el.is_active_status==0 && <span style={{color : "red"}}>Disabled</span>}
									</td>
									<td>
									{el.is_active_status==1 && <Tooltip title="Status">
										<Select placeholder="Select" style={{ width: 100 }} onChange={handlegroupstatus} >
										<Option value={JSON.stringify({ is_active_status:"0", orng_id : el.orng_id})}>Disable</Option>
										</Select>
									</Tooltip>
									}
									{el.is_active_status==0 && <Tooltip title="Status">
										<Select placeholder="Select" style={{ width: 100 }} onChange={handlegroupstatus} >
										<Option value={JSON.stringify({ is_active_status:"1", orng_id : el.orng_id})}>Enable</Option>
										</Select>
									</Tooltip>
									}
									</td>
									<td>{<EditGroup el={el} page_number = {page_number} number_of_records={number_of_records}/>}</td>
									<td>
										<Tooltip title="Add Subscribers"> 
										<span style={{color : "#038fde"}}><Icon className="cs-tableEditIcon" type="solution" onClick={()=>handleGroupsListView(el.orng_id)} /></span>
										</Tooltip>
									</td>						
								</tr>
							</tbody>
							)}
						</table>
						<br />		
						{GroupsListCount > 0  && 
							<CommonPagination page_number={page_number} totalRecordsCount={GroupsListCount} handlePageChange={handlePageChange}/>
						}
						{GroupsListCount === 0 && 
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

export default GroupsListPresentational;
