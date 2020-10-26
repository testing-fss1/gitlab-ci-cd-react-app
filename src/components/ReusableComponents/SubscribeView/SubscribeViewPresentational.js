import React from "react";
import {Card, Row, Col, Form, Button, Divider} from "antd";
import "../../../customizedStyles/style.css";
import Sweetalert from "../CommonSweetAlert";
import Loader from '../../CustomLoaderView';


const SubscribeViewPresentational = (props) => {
	console.log('PROPS IN SUBSCRIBE VIEW PRESENATIONAL: ', props);
	
	const {state:{sweet, loadingButton}, handleSubscribeView, onConfirm, handleSubmit, subscribeListDataValue, loadingData, SubscribeUpdateListDataStatusDescription} = props;
	
	return (
		<div style={{marginTop: "50px"}}>
			{
				loadingData ?
		
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div><Loader /></div>
				</div>
		
				:
				<>
					<Card title="GROUPS LIST" className="gx-card">
						<Divider /><br />
						<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
							<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
								{subscribeListDataValue}				                     
							</Col>  
						</Row> 
						<Divider />
						<div className = "cs-AlignCenter">
							<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleSubscribeView}>Close</Button>
							<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" loading={loadingButton} onClick={handleSubmit}>Submit</Button>					
						</div>				
					</Card>
					{
						sweet && SubscribeUpdateListDataStatusDescription.length>0 &&
						<Sweetalert visible={sweet} btnTxt="OK" statusDescription={SubscribeUpdateListDataStatusDescription} onConfirm={onConfirm} />
					}
				</>
			}
		</div>
	);
};

const ListGroupsPresentationalForm = Form.create()(SubscribeViewPresentational);

export default ListGroupsPresentationalForm;


