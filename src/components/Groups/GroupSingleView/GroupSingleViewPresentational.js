import React from 'react';
import {Card, Tabs} from "antd";
import GroupsDetails from './GroupDetails';
import ManageSubscribers from './ManageSubscribers';
const TabPane = Tabs.TabPane;

const GroupSingleViewPresntational=(props)=>{

  const{GroupGetData,orng_id}=props;

  console.log("****GroupGetDataPresentational****",GroupGetData)


    return (
        <div> 
          <Card className="gx-card" title="Group Single View">
            <Tabs
              defaultActiveKey="1"
              tabPosition={'top'}
              type='card'
            >
              <TabPane tab={<span><i className="icon icon-contacts"/>  Group Details  </span>} key="1"><GroupsDetails GroupGetData={GroupGetData}/></TabPane>
              <TabPane tab={<span><i className="icon icon-trash" /> Remove Subscribers </span>} key="2"><ManageSubscribers orng_id={orng_id}/></TabPane>
            </Tabs>
          </Card>
        </div>
      );
}

export default GroupSingleViewPresntational;