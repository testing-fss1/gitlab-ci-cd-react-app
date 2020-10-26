import React from 'react';
import { Input,  Row, Col, Icon} from "antd";
import {Link} from "react-router-dom";
import Loader from '../../../CustomLoaderView';


const GroupDetailsPresentational=(props)=>{
    const{GroupGetData,loadingData}=props;
    const {TextArea} = Input;
    console.log('*123456*',GroupGetData)
    
    return(
        <div>
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
                                <span><strong>Group Name :</strong>{GroupGetData&&GroupGetData.notification_group_name} </span>
                                                            
                            </Col>
                            <Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
                                <span><strong>Group Description :</strong>{GroupGetData&&GroupGetData.notification_group_description}  </span>
                            </Col>
                            <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <span><strong>Group Type :</strong>{GroupGetData&&GroupGetData.notification_group_type}</span>
                            </Col>
                            <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <span><strong>Group status :</strong>{GroupGetData&&GroupGetData.notification_group_subscriber_allowance_status}</span>
                            </Col>
                            <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
                                <span><strong>Notification Type :</strong>{GroupGetData&&GroupGetData.notification_type_name}</span>
                            </Col>
                        </Row> 
                    </div>
                    <div className ="cs-AlignRight">
                        <Link to = '/groups'><Icon type="rollback" />Back</Link>
                    </div>
                </>
            }
        </div>
    )

  
}

export default GroupDetailsPresentational;


// <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
// <Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
//     <h4><label>Group Name</label></h4>
//         <Input value={GroupGetData&&GroupGetData.notification_group_name}  disabled={true} />		                  
// </Col>
// <Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
//     <h4><label>Group Description</label></h4>
//             <TextArea value={GroupGetData&&GroupGetData.notification_group_description} autoSize disabled={true}/>		                  
// </Col>
// <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
//     <h4><label>Group Type</label></h4>
//             <Input value={GroupGetData&&GroupGetData.notification_group_type} disabled={true}/>
// </Col>
// <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
//     <h4><label>Group status</label></h4>
//     <Input value={GroupGetData&&GroupGetData.notification_group_subscriber_allowance_status}  disabled={true}/>
// </Col>
//     <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 24 }}>
//         <h4><label>Notification Type</label></h4>
//         <Input value={GroupGetData&&GroupGetData.notification_type_name} disabled={true}/>                       
//     </Col>
// </Row> 