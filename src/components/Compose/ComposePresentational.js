import React, { useState } from "react";
import {Card, Row, Col, Button} from "antd";
import SMSCard from "./SMSCard";
import EMailCard from "./EMailCard";
import VoiceMailCard from "./VoiceMailCard";
import "../../customizedStyles/compose.css";
import IntlMessages from "util/IntlMessages";
import ComposeHistoryContainer from "./ComposeHistory";
import CustomLoader from "../../components/CustomLoaderView";

const ComposePresentational = (props) => {
	const {GroupsListDataContainer, NotifiTypesListServiceDataList, handleFunctionData, ComposeSMSAction, ComposeEMailAction, ComposeVoiceMailAction, ComposeSMSStatus, ComposeEMailStatus, ComposeVoiceMailStatus, loadingData,onConfirm,state,setstate} = props;

	const [cardShow, setCardShow] = useState({one : true, two : false});

	const GroupshandleHide = () => {
		setCardShow({one : false, two : true});
	}

	const GroupshandleHideBack = () => { 
		setCardShow({one : true, two : false}); 
	}

	return (
		<>
			{cardShow.one &&
				<div>
					<div style = {{textAlign : "right"}}>
						<Button type="primary" onClick={GroupshandleHide}>History</Button>
					</div>			
					<div>
						<Card className = "gx-card" title = "Compose">
							<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 30]}>
								<Col xl={{ span: 8 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
									<div className="main-card-one">
										<div className="card-heading-one">SMS</div>
										<div className="card-content-one">
											<SMSCard
												GroupsListDataContainer = {GroupsListDataContainer}
												NotifiTypesListServiceDataList = {NotifiTypesListServiceDataList}
												handleFunctionData = {handleFunctionData} 
											    onConfirm={onConfirm}
											    state={state}
											    setstate={setstate}
												ComposeSMSAction = {ComposeSMSAction}
												ComposeSMSStatus={ComposeSMSStatus}
											/>
										</div>
									</div>
								</Col>
								<Col xl={{ span: 8 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
									<div className="main-card-two">
										<div className="card-heading-two">E-Mail</div>
										<div className="card-content-two">
											<EMailCard
												GroupsListDataContainer = {GroupsListDataContainer}
												NotifiTypesListServiceDataList = {NotifiTypesListServiceDataList}
												handleFunctionData = {handleFunctionData}
												setstate={setstate}
												onConfirm={onConfirm}
												state={state} 
												ComposeEMailAction = {ComposeEMailAction}
												ComposeEMailStatus ={ComposeEMailStatus}
											/>
										</div>
									</div>
								</Col>
								<Col xl={{ span: 8 }} lg={{ span: 12 }} md={{ span: 12}} sm={{ span: 12 }} xs={{ span: 24 }}>
									<div className="main-card-three">
										<div className="card-heading-three">Voice Mail</div>
										<div className="card-content-three">
											<VoiceMailCard
												GroupsListDataContainer = {GroupsListDataContainer}
												NotifiTypesListServiceDataList = {NotifiTypesListServiceDataList}
												handleFunctionData = {handleFunctionData}
												setstate={setstate}
												onConfirm={onConfirm}
												state={state} 
												ComposeVoiceMailAction = {ComposeVoiceMailAction}
												ComposeVoiceMailStatus ={ComposeVoiceMailStatus}
											/>
										</div>
									</div>
								</Col>
							</Row>
					</Card>
					</div>
				</div>
			}
			{cardShow.two && 
				<>
					<div style = {{textAlign : "right"}}>
						<Button type="primary" onClick={GroupshandleHideBack}>Back</Button>
					</div>
					<ComposeHistoryContainer />
				</>
			}
		</>
	);
};

export default ComposePresentational;
