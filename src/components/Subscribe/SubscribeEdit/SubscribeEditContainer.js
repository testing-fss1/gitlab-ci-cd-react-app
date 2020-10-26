import React,{useState} from 'react';
import {connect} from 'react-redux';
import EditSubscriberPresentational from './SubscribeEditPresentational';
import {EditSubscriber} from '../../../appRedux/actions/Subscribers';

const EditSubcriberContainer=(props)=>{

    const [state,setState]=useState({modalVisible:false})

    const editModalVisible = () => {
		setState({modalVisible: true});
        //this.props.orgSpecificPetitionerUserDetails(this.props.membId);
	}

	const editModalVisibleHide = () => {
		setState({modalVisible: false});
    }
    console.log('editsubcontainer',state)

    const {EditSubscriber,EditSubscriberStatus,EditSubscriberStatusDescription,el} =props;

    return(
        <EditSubscriberPresentational
            {...state}
            EditSubscriber={EditSubscriber}
            editModalVisible={editModalVisible}
            editModalVisibleHide={editModalVisibleHide}
            EditSubscriberStatus={EditSubscriberStatus}
            EditSubscriberStatusDescription={EditSubscriberStatusDescription}
            el={el}
        />
    )
};


const mapStateToProps = ({SubscribersReducer}) => {
	return{
		EditSubscriberStatusDescription: SubscribersReducer.EditSubscriber.EditSubscriberStatusDescription,
		EditSubscriberStatus: SubscribersReducer.EditSubscriber.AddSubscriberStatus
	}
};

export default connect(mapStateToProps,{EditSubscriber}) (EditSubcriberContainer);