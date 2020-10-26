import React,{useState} from "react";
import {Card,Row,Col,Tooltip} from "antd";
import ChangeEmailId from "../ChangeEmailId";
import ChangePhoneNumber from "../ChangePhoneNumber";
import SubscribeEdit from "../SubscribeEdit";
import {Link} from "react-router-dom";
import CustomLoader from "../../../components/CustomLoaderView";
import CommonPagination from "../../ReusableComponents/CommonPagination";


const ProfilePresentational = ({SubscribersListServicedata,loadingData,page_number,handlePageChange,SubscribersListServiceCount})=>{
	console.log("SubscribersListServicedata",SubscribersListServicedata)

	return(
		<div>
			<Card className="gx-card" title="Profile">
				{
	            loadingData ?
	            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
	                <CustomLoader />
	          	</div>	          
				:
				<>
				
				<div className="cs-table" >
				<table className="cs-table">
					<thead>
						<tr>
							<th>Firsts Name</th>
							<th>Middle Name</th>
							<th>Last Name </th>
							<th>Email id</th>
							<th> Mobile Number </th>
							<th colSpan="3">Actions</th>
						</tr>
					</thead>
					<tbody>
					    {SubscribersListServicedata && SubscribersListServicedata.map((el,index)=>
						<tr key={index}>
							<td> { (el.sm_firstname === "" || el.sm_firstname === null  ) ? "NA" : el.sm_firstname} </td>
							<td> {(el.sm_middlename === "" || el.sm_middlename === null ) ? "NA" : el.sm_middlename} </td>
							<td> {(el.sm_lastname === "" || el.sm_lastname === null) ? "NA" :  el.sm_lastname}  </td>
							
							<td> {(el.sm_email === "" || el.sm_email === null) ? "NA" : el.sm_email}</td>
							<td> {(el.sm_mobile_number === "" || el.sm_mobile_number === null) ?  "NA" : el.sm_mobile_number}</td>
							<td> <ChangeEmailId  sm_email  = {el.sm_email}  sm_memb_id = {el.sm_memb_id} /> </td>
							<td> <ChangePhoneNumber  sm_mobile_number = {el.sm_mobile_number} sm_memb_id = {el.sm_memb_id}/> </td>
							<td><SubscribeEdit el={el}/></td>
						</tr>
						)}
					</tbody>
				</table>
				<br />						
						
					
					</div>
				</>
				}	
				
			</Card>


		</div>
		)
}


export default ProfilePresentational




/*
<td> {el.address_area === "" || el.address_area === null ? "NA" : el.address_area}</td>
							<td> {el.address_city === "" || el.address_city === null ? "NA" : el.address_city}</td>
							<td> {el.address_state === "" || el.address_state === null ? "NA" : el.address_state}</td>
							<td> {el.address_country === "" || el.address_country === null ? "NA" : el.address_country}</td>*/