import React,{useState} from "react";
import {Card, Row, Col,Table,Select,Input,Button} from "antd";
import CustomLoader from "../../../components/CustomLoaderView";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";
import CommonPagination from "../../ReusableComponents/CommonPagination";


const Option = Select.Option;



const HomePresentational = ({GroupsListData,handleClick,loadingData,sweet,onConfirm,SubscriberChangeStatus,handlePageChange,page_number,GroupsListCount})=>{
	console.log("GroupsListData",handlePageChange,page_number,GroupsListCount)
	return(
			<div>
				<Card className="gx-card" title="Groups List">
				{
	            loadingData ?
	            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
	                <CustomLoader />
	          	</div>	          
				:
				<>
					
					<div >
					<table className="cs-table">
						<thead>
							<tr>
								<th>Group Name</th>
								<th>Group Description</th>
								<th> Status </th>
								<th  > Actions </th>
							</tr>
						</thead>
						<tbody>
							{GroupsListData && GroupsListData.map((el,index)=>
						<tr key={index}>
							<td>{el.notification_group_name}</td>
							<td>{el.notification_group_description}</td>
							<td>{el.subscriber_group_mapped_status === "1" ? "Subscribe" : "Un Subscribe" }</td>
							<td> <Button type="primary" onClick={()=>handleClick(el.subscriber_group_mapped_status,el.orng_id)}> {el.subscriber_group_mapped_status === "1" ? "Un Subscribe" : "Subscribe" } </Button> </td>


						</tr>  

					)}
						</tbody>
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

				

			</div>
		)
}

export default HomePresentational