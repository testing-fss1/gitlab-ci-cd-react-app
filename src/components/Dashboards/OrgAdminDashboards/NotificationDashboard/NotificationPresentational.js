import React from "react";
import Widget from "components/Widget/index";
import {Button, Icon} from "antd";
import "../../../../customizedStyles/style.css"
import CountUp from 'react-countup';

const NotificationPresentational = ({cardColor, icon, title, subTitle, iconColor,NotificationCardShow,NotificationCount }) => {
  return (
    <Widget styleName={`gx-card-full gx-p-3 gx-bg-${cardColor} gx-text-white`}>
      <div className="gx-media gx-align-items-center gx-flex-nowrap">
        <div className="gx-mr-2 gx-mr-xxl-3">
          <img alt="" src={require("assets/images/dashboard.png")}/>
        </div>
        <div className="gx-media-body">
          <div className="cs-dashboardCount">
            <span className="gx-fs-xxl gx-mb-1 gx-text-white"><CountUp end={NotificationCount} duration={5}/><span style={{fontSize: "15px"}}> Available</span></span>
            <p className="gx-mb-0">Notification Types</p>
          </div>
        </div>
        <Button className="cs-dashboardViewButton" size="small" onClick={NotificationCardShow}>View</Button>
      </div>
    </Widget>
  );
};

export default NotificationPresentational;