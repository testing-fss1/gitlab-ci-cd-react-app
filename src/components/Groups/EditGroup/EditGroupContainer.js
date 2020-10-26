import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import EditGroupPresentational from './EditGroupPresentational';
import {EditGroup} from '../../../appRedux/actions/Groups'; 

const EditGroupContainer=(props)=>{
    const {EditGroup,EditGroupStatusDescription,EditGroupStatus,el,NotifiTypesListServiceDataList,page_number,number_of_records}=props;
    const [state,setState]=useState({modalVisible:false})

    const editModalVisible = () => {
		setState({modalVisible: true});
        //this.props.orgSpecificPetitionerUserDetails(this.props.membId);
	}

	const editModalVisibleHide = () => {
		setState({modalVisible: false});
    }


    const [selectedValue,SetselectedValue]=useState({selectedValue:''})
    useEffect(() => {
        if(el.notification_group_type == "Notification Type Specific User Group") {
            SetselectedValue({selectedValue:'Notification Type Specific User Group'})
        } else {
            SetselectedValue({selectedValue:'Generic User Group'})
        }
    }, [el.notification_group_type])


    

    const radioChecked=(e)=>{
        SetselectedValue({selectedValue:e.target.value})
    }
    console.log('radioChecked container',selectedValue)
 

    const [allowance_status,Set_allowance_status] = useState('Closed')
    useEffect(() => {
        if(el.notification_group_subscriber_allowance_status == 'Open') {
            Set_allowance_status('Open')
        } else {
            Set_allowance_status('Closed')
        }
    }, [el.notification_group_subscriber_allowance_status])
    const handle_allowance_status = (e) => {
        console.log(e)
        if(e == true) {
            Set_allowance_status('Open')
        } else {
            Set_allowance_status('Closed')
        }
    }    

    return(
        <EditGroupPresentational
            {...state}
            editModalVisible={editModalVisible}
            editModalVisibleHide={editModalVisibleHide}
            radioChecked={radioChecked}
            selectedValueState={selectedValue.selectedValue}
            EditGroup={EditGroup}
            el={el}
            handle_allowance_status={handle_allowance_status}
            allowance_status={allowance_status}
            NotifiTypesListServiceDataList={NotifiTypesListServiceDataList}
            page_number = {page_number}
            number_of_records={number_of_records}
        />
    )
};

const mapStateToProps = ({GroupsReducer,NotificationTypes}) => {
	return{
		EditGroupStatusDescription: GroupsReducer.EditGroup.EditGroupStatusDescription,
        EditGroupStatus: GroupsReducer.EditGroup.EditGroupStatus,
        NotifiTypesListServiceDataList: NotificationTypes && NotificationTypes.NotifiTypesListServiceReducer && NotificationTypes.NotifiTypesListServiceReducer.NotifiTypesListServiceDataList,
	}
};

export default connect (mapStateToProps,{EditGroup}) (EditGroupContainer);