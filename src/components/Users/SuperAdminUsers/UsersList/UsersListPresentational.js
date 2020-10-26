import React from "react";
import {Select, Card} from "antd";
import '../../../../customizedStyles/style.css';
import CustomLoader from "../../../CustomLoaderView";
import EditSiteAdminContainer from '../EditSiteAdmin/EditSiteAdminContainer';
import ResendEmailContainer from '../../../ReusableComponents/CommonResendEmail/ResendEmailContainer';
import ResetPasswordContainer from '../../../ReusableComponents/CommonResetPassword/ResetPasswordContainer';

const Option = Select.Option;

const UsersListPresentational = (props) => {
	const {payload, loadingData} = props;
	console.log('Presntational Users List : ', props);
    return (
    	<Card className="gx-card" title="Site Admin List">
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
									<th colSpan="3"> Actions </th>
								</tr>
							</thead>
							{payload && payload.length > 0 && payload.map((el, index) =>
								<tbody key={index}>
									<tr>
										<td>{el.sm_fullname}</td>
										<td>{el.sm_email}</td>
										<td><EditSiteAdminContainer sm_memb_id={el.sm_memb_id} /></td>
										<td><ResetPasswordContainer sm_memb_id={el.sm_memb_id} sm_email={el.sm_email} /></td>
										<td><ResendEmailContainer sm_memb_id={el.sm_memb_id} sm_email={el.sm_email} /></td>						
									</tr>
								</tbody>
							)}
						</table>
					</div>
				</>
			}
		</Card>
    )
}

export default UsersListPresentational;