import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import ManageSubscribersPresentational from './ManageSubscribersPresentational';
import {SubscribeListService} from '../../../../appRedux/actions/CommonServices/SubscribeListActions';
import {RemoveSubscriberFromGroupService,RemoveSubscriberFromGroupServiceSuccess}  from '../../../../appRedux/actions/Groups';
import {Checkbox} from "antd";

const ManageSubscribersContainer=(props)=>{
    const {orng_id,SubscribeListService,SubscribeListData,SubscribeListtotal_count,RemoveSubscriberFromGroupService,loadingData,RemoveSubscriberfromGroupStatusDescription,RemoveSubscriberfromGroupStatus}=props;
    const [checkedItems, setCheckedItems] = useState([])
    const [stateData, setstateData] = useState({
		sweet: false,
		loadingButton: false
	})

    console.log('checkedItems',checkedItems)

    const [page_number , setPageNumber] = useState(1)
    const [number_of_records,setnumber_of_records]=useState(50)
    const [status,setstatus]=useState(1)

    function handlePageChange(pageNumber){
      console.log("handlePageChange",pageNumber)
      setPageNumber(pageNumber)
    }  

    useEffect(() => {
		SubscribeListService(orng_id,page_number,number_of_records,status);
    },[page_number])
   
    const handleSubmit = () => {    
        RemoveSubscriberFromGroupService(checkedItems,orng_id)
        setstateData({...stateData, sweet: true, loadingButton: true });

    }
    
    const onConfirm = () => {
      RemoveSubscriberFromGroupServiceSuccess({});
      SubscribeListService(orng_id,page_number,number_of_records,status);
      setstateData({...stateData, sweet: false, loadingButton: false });
      setCheckedItems([])
	}

   
    const handleChange = (el, e) => {
		if(e.target.checked) {
			return setCheckedItems([...checkedItems, el.sm_memb_id])
		}
		else {
			console.log("filterunchecked:", checkedItems.filter(n=>n != el.sm_memb_id));
			return setCheckedItems(checkedItems.filter(n=>n != el.sm_memb_id))
		}
	}
    const ActivesubscribersListData = SubscribeListData.map((el,index) => {
		console.log("SubscribeListData map :",el)  	
		return <div key={el.sm_memb_id+index}><Checkbox  onChange={(e) =>handleChange(el, e)}>{el.sm_fullname}</Checkbox></div>
	});

    return(
        <ManageSubscribersPresentational
        state = { stateData}
        ActivesubscribersListData={ActivesubscribersListData}
        handleSubmit={handleSubmit}
        loadingData={loadingData}
        onConfirm={onConfirm}
        handlePageChange={handlePageChange}
        page_number = {page_number}
        number_of_records={number_of_records}
        RemoveSubscriberfromGroupStatusDescription={RemoveSubscriberfromGroupStatusDescription}
        RemoveSubscriberfromGroupStatus={RemoveSubscriberfromGroupStatus}
        SubscribeListtotal_count={SubscribeListtotal_count}
        />
    )
};

const mapStateToProps = ({CommonServices, commonData,GroupsReducer}) => {
  return{
      SubscribeListData : CommonServices.SubscribeListReducers.SubscribeListData,
      SubscribeListtotal_count : CommonServices.SubscribeListReducers.SubscribeListtotal_count,
      SubscribeListDataStatus : CommonServices.SubscribeListReducers.SubscribeListDataStatus,
      SubscribeListDataStatusDescription : CommonServices.SubscribeListReducers.SubscribeListDataStatusDescription,
      RemoveSubscriberfromGroupStatus:GroupsReducer.RemoveSubscriberfromGroup.RemoveSubscriberfromGroupStatus,
      RemoveSubscriberfromGroupStatusDescription:GroupsReducer.RemoveSubscriberfromGroup.RemoveSubscriberfromGroupStatusDescription, 
      loadingData: commonData.loading
  }
};


export default connect (mapStateToProps,{SubscribeListService,RemoveSubscriberFromGroupService})(ManageSubscribersContainer);