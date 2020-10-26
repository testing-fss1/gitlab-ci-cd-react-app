import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import NumberOfOrgAdminsContainer from "./NumberOfOrgAdminsDashboard/NumberOfOrgAdminsContainer";
import NumberofOrgEmployeesContainer from "./NumberofOrgEmployeesDashboard/NumberofOrgEmployeesContainer";


const PresentationalDashboard = (props)=>{
	const {NumberOfOrgAdminsCardShow ,NumberofOrgEmployeesCardShow} = props ;
	return (
		<div> {
				<Card className="gx-card" title="Dashboard">
					<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 30]}>
						<Col xl={{ span: 6 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
							<NumberOfOrgAdminsContainer NumberOfOrgAdminsCardShow ={NumberOfOrgAdminsCardShow} />
						</Col>
						<Col xl={{ span: 6 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
							<NumberofOrgEmployeesContainer NumberofOrgEmployeesCardShow={NumberofOrgEmployeesCardShow}/>
						</Col>
					</Row>
				</Card>
               }
        </div>
    )       
}
export default PresentationalDashboard ;