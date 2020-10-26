import React,{useEffect,useState} from "react";
import SubscriberPresentational from "./SubscriberPresentational";
import {SubscriberListService} from "../../../../appRedux/actions/Dashboards/OrgAdminDashboardAction/SubscriberDashboardAction";
import {connect} from "react-redux";


const SubscriberContainer = (props)=> {
	const {SubscriberCardShow ,SubscriberListService ,subscriberCount}= props;
    const [state, setState] = useState({
    	page_number: ''
    });

	useEffect(() => {
        SubscriberListService({...state})
    },[]);
     
    return (
		<div>
			<SubscriberPresentational cardColor="teal"  SubscriberCardShow={SubscriberCardShow}
             NumberOfSubscriber ={subscriberCount}
			/>
		</div>
    )
}

const mapStateToProps = ({DashboardReducer}) => {	
	return {	
	    subscriberCount : DashboardReducer.OrgAdminDashboardReducer.subscriberDashboardReducer.subscriberCount,
    }
};

export default connect(mapStateToProps, {SubscriberListService})(SubscriberContainer);

