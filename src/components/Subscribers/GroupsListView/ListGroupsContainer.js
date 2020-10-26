import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { Checkbox } from "antd";
import {useHistory} from "react-router-dom";
import ListGroupsPresentational from './ListGroupsPresentational'
import {GroupsListServices, GroupMappedAddService, GroupMappedAddServiceSuccess} from "../../../appRedux/actions/Subscribers"


const ListGroupsContainer=(props)=>{
  const history = useHistory();
  const {GroupsListServices,handleGroupsListView,loadingData, ListGroupCount, GroupMappedAddService,GroupMappedAddServiceData, ListGroupsServiceData:{data:groupsListDataMap}, sm_memb_id, page_number, number_of_records} = props;
  console.log("sm_memb_id:",props);
  const [stateData, setstateData] = useState({
    number_of_records : 100,
    sweet: false,
    loadingButton: false,
    page_number :1,
  })

  const [checkedItems, setCheckedItems] = useState([])
  console.log("checkedItems:",checkedItems);
  useEffect(() => {
    GroupsListServices({...stateData,sm_memb_id});
    //GroupMappedAddService();
  },[])
  useEffect(() => {
    console.log("groupsListDataMap:",groupsListDataMap && groupsListDataMap.data.filter(el=>el.subscriber_group_mapped_status==1));
    let data1=groupsListDataMap ? groupsListDataMap.data.filter(el=>el.subscriber_group_mapped_status==1) : []
    console.log("GrouplistDataaaaaaaaaaaa:",data1.length>0 && data1.map(abc=>abc.orng_id))
    data1.length>0 && setCheckedItems(data1.map(abc=>abc.orng_id))
    //groupsListDataMap.filter(el=>el.subscriber_group_mapped_status==1)
  }, [groupsListDataMap])

  const handleSubmit = () => {    
		setstateData({...stateData, sweet: true, loadingButton: true });
    GroupMappedAddService({checkedItems, ...stateData , sm_memb_id});
    console.log("handleSubmit clicked")
  }
  const onConfirm = () => {
		if (GroupMappedAddServiceData.status == "org-rel-notification-group-mapped-subscribers-info-insertion-success") {
      //history.push('/subscribers');
      handleGroupsListView();
			GroupMappedAddServiceSuccess({ status: "", status_description: "" });
			return setstateData({...stateData, sweet: false, loadingButton: false });
    }
    GroupMappedAddServiceSuccess({ status: "", status_description: "" });
		return setstateData({...stateData, sweet: false, loadingButton: false });
  }
  const handlePageChange = (pageNumber) => {
  	setstateData({...stateData, page_number:pageNumber});
  }	
  const handleChange = (el, e) => {
    console.log("handleChange:",el);
    console.log("handlechangesssssssssssssss:",e.target.checked)
    if(e.target.checked) {
      return setCheckedItems([...checkedItems, el.orng_id])
    }
    else {
      console.log("filterunchecked:", checkedItems.filter(n=>n != el.orng_id));
      return setCheckedItems(checkedItems.filter(n=>n != el.orng_id))
    }
  }
  console.log("groupsListDataMap:",groupsListDataMap)
  const groupsListDataService = groupsListDataMap && groupsListDataMap.data.map((el,index) => {
    return <div  key={el.notification_group_name+index}> 
      {
        el.is_active_status==1 ? 
        <Checkbox 
        defaultChecked={el.subscriber_group_mapped_status==1 ? true : false} 
        onChange={(e) =>handleChange(el,e)}
      >
        {el.notification_group_name}
      </Checkbox> 
      :
      <Checkbox 
        defaultChecked={el.subscriber_group_mapped_status==1 ? true : false} 
        disabled 
      >
        {el.notification_group_name}
      </Checkbox>
      }
    </div>
   });

    return(
        <ListGroupsPresentational
            handleGroupsListView = { handleGroupsListView }
            handleSubmit = { handleSubmit }
            groupsListDataService = { groupsListDataService }
            GroupMappedAddServiceData = { GroupMappedAddServiceData }
            onConfirm ={ onConfirm }
            state = { stateData}
            loadingData={loadingData}
            ListGroupCount = { ListGroupCount }
            page_number = { page_number }
            number_of_records= { number_of_records}
            handlePageChange = { handlePageChange }
        />
    )
};

const mapStateToProps = ({SubscribersReducer, commonData}) => {
  console.log("SubscribersReducer:",SubscribersReducer)
	return{
    ListGroupsServiceData : SubscribersReducer.ListGroupsService.ListGroupsServiceData,
    loadingData: commonData.loading,
    GroupMappedAddServiceData : SubscribersReducer.GroupMappedAddService.GroupMappedAddServiceData,
    ListGroupCount : SubscribersReducer.ListGroupsService.ListGroupsServiceData.data && SubscribersReducer.ListGroupsService.ListGroupsServiceData.data.total_count
	}
};

export default connect(mapStateToProps,{GroupsListServices, GroupMappedAddService, GroupMappedAddServiceSuccess}) (ListGroupsContainer);