import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import AddGroupPresentational from './AddGroupPresentational';
import AddGroupView from './AddGroupView';
import GroupsList from '../GroupsList';
import {addGroup,addGroupSucess} from '../../../appRedux/actions/Groups';
import SubscribeView from "../../ReusableComponents/SubscribeView";
import {NotifiTypesListService} from '../../../appRedux/actions/NotificationTypes';

const AddGroupContainer=(props)=>{
    const {addGroup,AddGroupStatus,AddGroupStatusDescription,NotifiTypesListServiceDataList,NotifiTypesListService,addGroupSucess}=props;
    useEffect(() => {
		NotifiTypesListService('');
	}, [])
    const [state,setState]=useState({
        AddGroupButton : true , 
        AddGroupForm:false, 
        SubscribePageView : false, 
        groupsListView : true,
        subscribeId : '',
        sweet: false ,
        loadingButton: false
    });

    const handleAddGroup=()=>{
        setState({...state, AddGroupButton : false , AddGroupForm:true})
    }
    const handleClose=()=>{
        setState({...state, AddGroupButton : true , AddGroupForm:false,loadingButton: false})
        addGroupSucess({})
        Set_allowance_status('Open')
    }
    
    const [selectedValue,SetselectedValue]=useState({selectedValue:''})
    
    const radioChecked = (e) => {
        console.log('saikrishna',e)
        SetselectedValue({ selectedValue: e.target.value });
        
    };

    const [allowance_status,Set_allowance_status] = useState('Open')
    console.log('Toggle',allowance_status)

    const handle_allowance_status=(e)=>{
        if(e == true) {
            Set_allowance_status('Closed')
        } else {
            Set_allowance_status('Open')
        }
    }
    const SweetOpen = () => {
		setState({...state, sweet: true,loadingButton: true})
	}
	const SweetClose = () => {
		setState({...state, sweet: false,loadingButton: false})
		addGroupSucess({})
    }
	const handleSubscribeView = () => {
		setState({...state, SubscribePageView : false, groupsListView : true })
	}
	const handleGroupsListView = (subscribeId) => {
        console.log('subscribeId IN handleGroupsListView: ', subscribeId);
        
		setState({...state, groupsListView : false, SubscribePageView :  true, subscribeId: subscribeId})
	}
   
    const {AddGroupButton,AddGroupForm, SubscribePageView, groupsListView, subscribeId} =state;
    
    return(
        <div>
            {AddGroupButton && 
				<>
					{groupsListView && 
                        <div>
                            <AddGroupPresentational handleClick={handleAddGroup}/> 
                            <GroupsList handleGroupsListView = {(subscribeId) => handleGroupsListView(subscribeId)} />
                        </div>
					} 
					{SubscribePageView &&
						<SubscribeView handleSubscribeView={handleSubscribeView} subscribeId={subscribeId} /> 
					}
				</>
            }
            {AddGroupForm && 
                <AddGroupView 
                    {...state}
                    addGroup={addGroup}
                    state2={selectedValue}
                    handleClose={handleClose}
                    radioChecked={radioChecked}
                    selectedValue={selectedValue}
                    AddGroupStatusDescription={AddGroupStatusDescription}
                    AddGroupStatus={AddGroupStatus}
                    handle_allowance_status={handle_allowance_status}
                    allowance_status={allowance_status}
                    NotifiTypesListServiceDataList={NotifiTypesListServiceDataList}
                    state={state} SweetClose={SweetClose} SweetOpen={SweetOpen}
                />
            }
        </div>
    )
};

const mapStateToProps = ({GroupsReducer,NotificationTypes}) => {
	return{
		AddGroupStatusDescription: GroupsReducer.AddGroup.AddGroupStatusDescription,
        AddGroupStatus: GroupsReducer.AddGroup.AddGroupStatus,
        NotifiTypesListServiceDataList: NotificationTypes && NotificationTypes.NotifiTypesListServiceReducer && NotificationTypes.NotifiTypesListServiceReducer.NotifiTypesListServiceDataList,
	}
};

export default connect(mapStateToProps,{addGroup,NotifiTypesListService,addGroupSucess}) (AddGroupContainer)


