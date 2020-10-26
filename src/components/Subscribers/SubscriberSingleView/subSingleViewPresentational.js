import React from "react";
import {Button,Card ,Icon} from "antd";
import CommonPagination from "../../ReusableComponents/CommonPagination";
import {Link} from "react-router-dom";

const  SubscriberSingleViewPresentational = ({SubscriberlistData,AdminUserDetails,handleUnsubscribe,
  SubscriberChangedata ,SubscriberlistCount ,handlePageChange ,page_number })=>{
  
 const allsubscriberslist = SubscriberlistData && SubscriberlistData.map((el, index)=>(el.subscriber_group_mapped_status))
 const subscriberlist = allsubscriberslist && allsubscriberslist.filter(number => number == "1"); 

const activeSubscribersCount = subscriberlist && subscriberlist.length ;

 
  return(
    <div>
    <Card className="gx-card" title=" Subscriber Single View">
      <div className="cs-table">
        <table className="cs-table">
          <thead>
            <tr>
              <th>Group name</th>
              <th>Group description</th>
               <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
            SubscriberlistData && SubscriberlistData.map((el, index) => 
             (el.subscriber_group_mapped_status==1 )&&
              <tr  key={index}>
              <td>{(el.notification_group_name==null||el.notification_group_name=="")?'NA':el.notification_group_name}</td>
              <td>{(el.notification_group_description==null||el.notification_group_description=="")?'NA':el.notification_group_description}</td>
              <td>
                {(el.subscriber_group_mapped_status== "1" ) ?  "Subscribed":"Un Subscribed"}
             </td>
            </tr>
            )
					}
          </tbody>
        </table>
      </div> <br />
      {SubscriberlistCount > 0  && activeSubscribersCount > 0 &&
              <CommonPagination page_number={page_number} totalRecordsCount={SubscriberlistCount} handlePageChange={handlePageChange}/>
            }
            {SubscriberlistCount === 0 && 
              <div className="cs-records">                                                      
                <h3><i>-- No records found --</i></h3>                 
              </div>
            } 
            {activeSubscribersCount === 0 && 
              <div className="cs-records">                                                      
                <h3><i>-- No subscribed Groups found   --</i></h3>                 
              </div>
            }

             <div className ="cs-AlignRight">
                <Link to = '/subscribers'><Icon type="rollback" />Back</Link>
              </div> 
    </Card>
  </div>
  )
}

export default SubscriberSingleViewPresentational ; 


