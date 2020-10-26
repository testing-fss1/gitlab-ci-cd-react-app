import React from "react";
import {Select, Card, Icon} from "antd";

import EditNotificationTypes from "./EditNotificationTypes";
import CustomLoader from "../../CustomLoaderView";
import CommonPagination from "../../ReusableComponents/CommonPagination";

const Option = Select.Option;

const NotifiTypesListPresentational = (props) => {
	const {NotifiTypesListServiceDataList, handleChange, loadingData, NotifiTypesListServiceDataStatusDes, handlePageChange, page_number, 
		NotifiTypesListServiceDataCount, state
	} = props;
    return (
    	<Card className="gx-card" title="Notification Types List">
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
									<th> Notification Type Name </th>
									<th> Notification type Colour Code </th>
									<th colSpan="2"> Status </th>
									<th colSpan="1"> Actions </th>
								</tr>
							</thead>
							{NotifiTypesListServiceDataList && NotifiTypesListServiceDataList.map((el, index) => 
								<tbody key={index}>
									<tr>
										<td>{el.notification_type_name}</td>
										<td style={{"color": el.notification_type_colour_code}}><Icon type="tablet" theme="filled" /> - {el.notification_type_colour_code}</td>
										<td>{el.is_active_status == 1 ? <span style={{color : "#23c450"}}>Enabled</span> : <span style={{color : "red"}}>Disabled</span> }</td>
										<td>
											{el.is_active_status == 1 ? 
												<Select placeholder="Select" className="cs-fullWidth" onChange={(value)=>handleChange(value, el.ornt_id)}>
													<Option key={0}>Disable</Option>
												</Select>
												:
												<Select placeholder="Select" className="cs-fullWidth" onChange={(value)=>handleChange(value, el.ornt_id)}>
													<Option key={1}>Enabled</Option>
												</Select>
											}
										</td>
										<td>
											<EditNotificationTypes el={el} NotifiTypesListState={state} />
										</td>						
									</tr>
								</tbody>
							)}
						</table>
						<br />	
						{NotifiTypesListServiceDataCount > 0  && 
              				<CommonPagination page_number={state.page_number} totalRecordsCount={NotifiTypesListServiceDataCount} handlePageChange={handlePageChange}/>
            			}
			            {NotifiTypesListServiceDataCount === 0 && 
			              <div className="cs-records">                                                      
			                <h3><i>{NotifiTypesListServiceDataStatusDes}</i></h3>                 
			              </div>
			            }
					</div>
				</>
			}
		</Card>
    )
}

export default NotifiTypesListPresentational;
