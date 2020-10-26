import React,{useState} from "react";
import {Card, Row, Col} from "antd";
import EmployeesContainer from "./EmployeesDashboard/EmployeesContainer";
import SubscriberContainer from "./SubscriberDashboard/SubscriberContainer";
import GroupsContainer from "./GroupsDashboard/GroupsContainer";
import NotificationContainer from "./NotificationDashboard/NotificationContainer";


const PresentationalDashboard = (props)=>{
const {EmployeesCardShow ,SubscriberCardShow ,GroupsCardShow ,NotificationCardShow} = props ;
	return (
		<div>{
			<Card className="gx-card" title="Dashboard">
				<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 30]}>
				   <Col xl={{ span: 6 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
						<EmployeesContainer  EmployeesCardShow={EmployeesCardShow}/>
					</Col>
					<Col xl={{ span: 6 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
						<SubscriberContainer SubscriberCardShow ={SubscriberCardShow} />
					</Col>
					<Col xl={{ span: 6 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
						<GroupsContainer GroupsCardShow={GroupsCardShow} />
					</Col>
					<Col xl={{ span: 6 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
						<NotificationContainer NotificationCardShow={NotificationCardShow}/>
					</Col>
				</Row>
			</Card>
            }
        </div>
    )       
}
export default PresentationalDashboard ;