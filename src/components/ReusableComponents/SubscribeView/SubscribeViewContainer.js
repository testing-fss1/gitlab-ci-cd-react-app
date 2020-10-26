import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Checkbox} from "antd";
import SubscribeViewPresentational from './SubscribeViewPresentational'
import {
	SubscribeListService, 
	SubscribeListUpdateService,
	SubscribeListUpdateServiceSuccess
} from "../../../appRedux/actions/CommonServices/SubscribeListActions"

const SubscribeViewContainer=(props)=>{
	console.log('PROPS IN ADDS SUBSCRIBER CONTAINER: ', props);

	const { 
		subscribeId,
		handleSubscribeView,
		SubscribeListService,
		SubscribeListUpdateService,
		SubscribeListData, 
		SubscribeUpdateListDataStatus,
		SubscribeUpdateListDataStatusDescription,
		loadingData
	} = props
  
	const [stateData, setstateData] = useState({
		number_of_records : 100,
		page_number : 1,
		sweet: false,
		loadingButton: false
	})

	const [checkedItems, setCheckedItems] = useState([])
	console.log("checkedItems:",checkedItems);

	useEffect(() => {
		SubscribeListService(subscribeId);
	},[])

	useEffect(() => {
	  let data1 = SubscribeListData.filter(el=>el.group_subscription_status==1);
	  console.log("GrouplistDataaaaaaaaaaaa:",data1.length>0 && data1.map(abc=>abc.sm_memb_id))

	  data1.length>0 && setCheckedItems(data1.map(abc=>abc.sm_memb_id))
	}, [SubscribeListData])

	const handleSubmit = () => {    
		console.log("handleSubmit clicked")
		setstateData({...stateData, sweet: true, loadingButton: true });
		SubscribeListUpdateService({checkedItems, subscribeId});
	}
	const onConfirm = () => {
		if (SubscribeUpdateListDataStatus == "org-rel-notification-group-mapped-subscribers-info-insertion-success") {
			handleSubscribeView();
			SubscribeListUpdateServiceSuccess({ data:[], status: "", status_description: "" });
			return setstateData({...stateData, sweet: false, loadingButton: false });
		}
		SubscribeListUpdateServiceSuccess({ data:[], status: "", status_description: "" });
		return setstateData({...stateData, sweet: false, loadingButton: false });
	}
	const handleChange = (el, e) => {
		console.log("handleChange:",el);
		console.log("handlechangesssssssssssssss:",e.target.checked)
		if(e.target.checked) {
			return setCheckedItems([...checkedItems, el.sm_memb_id])
		}
		else {
			console.log("filterunchecked:", checkedItems.filter(n=>n != el.sm_memb_id));
			return setCheckedItems(checkedItems.filter(n=>n != el.sm_memb_id))
		}
	}
	const subscribeListDataValue = SubscribeListData.map((el,index) => {
		console.log("SubscribeListData map :",el)  
		
		return <div key={el.sm_memb_id+index}><Checkbox defaultChecked={el.group_subscription_status==1 ? true : false} onChange={(e) =>handleChange(el, e)}>{el.sm_fullname}</Checkbox></div>
	});

	return(
		<SubscribeViewPresentational
			state = { stateData}
			handleSubscribeView = { handleSubscribeView }
			onConfirm = { onConfirm }
			handleSubmit = { handleSubmit }
			subscribeListDataValue = { subscribeListDataValue }
			loadingData = { loadingData }
			SubscribeUpdateListDataStatusDescription = { SubscribeUpdateListDataStatusDescription }
		/>
	)
};

const mapStateToProps = ({CommonServices, commonData}) => {
 	 console.log("CommonServicesReducer:",CommonServices)
	return{
		SubscribeListData : CommonServices.SubscribeListReducers.SubscribeListData,
		SubscribeListDataStatus : CommonServices.SubscribeListReducers.SubscribeListDataStatus,
		SubscribeListDataStatusDescription : CommonServices.SubscribeListReducers.SubscribeListDataStatusDescription,
		SubscribeUpdateListData : CommonServices.SubscribeListReducers.SubscribeUpdateListDatadata,
		SubscribeUpdateListDataStatus: CommonServices.SubscribeListReducers.SubscribeUpdateListDataStatus,
		SubscribeUpdateListDataStatusDescription: CommonServices.SubscribeListReducers.SubscribeUpdateListDataStatusDescription,
		loadingData: commonData.loading
	}
};

export default connect(mapStateToProps,{SubscribeListService, SubscribeListUpdateService}) (SubscribeViewContainer);