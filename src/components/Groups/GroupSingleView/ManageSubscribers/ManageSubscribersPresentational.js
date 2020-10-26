import React from 'react';
import { Input,  Row, Col, Icon,Card,Button,Divider} from "antd";
import {Link} from "react-router-dom";
import Sweetalert from "../../../ReusableComponents/CommonSweetAlert";
import Loader from '../../../CustomLoaderView';
import CommonPagination from "../../../ReusableComponents/CommonPagination";



const ManageSubscribersPresentational=(props)=>{
    const {state:{sweet, loadingButton},ActivesubscribersListData,handleSubmit,loadingData,RemoveSubscriberfromGroupStatusDescription,onConfirm,RemoveSubscriberfromGroupStatus,page_number,handlePageChange,SubscribeListtotal_count}=props;
    return(
		<div >
			{
				loadingData ?
		
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div><Loader /></div>
				</div>
		
				:
				<>
				<div>
					<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
						<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
						<div className="cs-records">                                                      
							<span><i>Hint :</i> Check the check box to remove subscriber</span>                 
						</div><br/>
							{ActivesubscribersListData}				                     
						</Col>  
					</Row> 
					{SubscribeListtotal_count === 0 && 
					<div className="cs-records">                                                      
						<h3><i>-- No records found --</i></h3>                 
					</div>
					}
					<Divider />
					{SubscribeListtotal_count>0 &&
					<div className = "cs-AlignCenter">
						<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" loading={loadingButton} onClick={handleSubmit}>Submit</Button>					
					</div>	
					}			
					<div className ="cs-AlignRight">
							<Link to = '/groups'><Icon type="rollback" />Back</Link>
					</div>
				</div>
				<br />		
					{SubscribeListtotal_count > 0  && 
						<CommonPagination page_number={page_number} totalRecordsCount={SubscribeListtotal_count} handlePageChange={handlePageChange}/>
					}
					{
						sweet && RemoveSubscriberfromGroupStatusDescription &&
						<Sweetalert visible={sweet} btnTxt="OK" statusDescription={RemoveSubscriberfromGroupStatusDescription} onConfirm={RemoveSubscriberfromGroupStatus=='subscribers-removed' ? onConfirm : onConfirm} />
					}
				</>
			}
	</div>
    )
};

export default ManageSubscribersPresentational;