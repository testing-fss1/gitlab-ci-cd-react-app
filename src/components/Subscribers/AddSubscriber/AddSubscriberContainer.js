import React, {useState,useEffect} from "react";
import {connect} from 'react-redux';
import AddSubscriberPresentaional  from "./AddSubscriberPresentational";
import AddSubscriberView from "./AddSubscriberView";
import SubscribersList from "../SubscribersList";
import {addSubscriber,addSubscriberSucess} from "../../../appRedux/actions/Subscribers";
import GroupsListView from "../GroupsListView";
import {CountriesPhoneCodesListService,CountryListService} from "../../../appRedux/actions/CommonServices";
import {GroupsListService} from "../../../appRedux/actions/Groups";
import {Select} from "antd";

const Option = Select.Option;

const AddSubscriberConatiner = (props) => {
	const {addSubscriber,AddSubscriberStatus,AddSubscriberStatusDescription,CountriesPhoneCodesListService,CountriesPhoneCodesListServiceDataList,GroupsListDataContainer,GroupsListService,addSubscriberSucess,CountriesListServiceDataList,CountryListService,page_number,number_of_records} = props;
	const [state, setState] = useState({
		AddSubButton : true, 
		AddSubForm : false, 
		subscribersListView : true, 
		groupsListView : false,
		sweet: false,
		loadingButton: false,
		sm_memb_id : '',
	})
	const {AddSubButton,AddSubForm, subscribersListView, groupsListView, sm_memb_id, sweet}= state;
	const handleAddSub = () => {
		setState({...state, AddSubButton : false, AddSubForm : true})
	}
	const handleClose = () => {
		setState({...state, AddSubButton : true, AddSubForm : false,loadingButton: false})
		addSubscriberSucess({})
	}
	useEffect(() => {
		CountriesPhoneCodesListService();
		CountryListService();
		GroupsListService();
	}, [])
	const CountriesPhoneCodesOptionItems = CountriesPhoneCodesListServiceDataList && CountriesPhoneCodesListServiceDataList.map((el, index) => {
		return <Option key={index} value={el.code}>{el.code}</Option>
	})
	const handleSubscribersListView = (sm_memb_id) => {
		console.log("handleSubscribersListView:",sm_memb_id)
		setState({...state, subscribersListView : false, groupsListView : true, sm_memb_id :sm_memb_id })
	}
	const handleGroupsListView = () => {
		setState({...state, groupsListView : false, subscribersListView :  true})
	}
	const SweetOpen = () => {
		setState({...state, sweet: true,loadingButton: true})
	}
	const SweetClose = () => {
		setState({...state, sweet: false,loadingButton: false})
		addSubscriberSucess({})
	}
	let optionItems = [];
		if(CountriesListServiceDataList) {
			optionItems = CountriesListServiceDataList.map((list) => 
				<Option key={list.country_id} value={list.country_name} label={list.country_name}>{list.country_name}</Option> 
			)
		}
	return (
		<div>
			{AddSubButton && 
				<>
					{subscribersListView && 
						<div>
							<AddSubscriberPresentaional handleClick={handleAddSub} />
							<SubscribersList  handleSubscribersListView = {handleSubscribersListView} />
						</div>
					} 
					{
						groupsListView &&
						<GroupsListView  sm_memb_id ={ sm_memb_id }  page_number={page_number}
						number_of_records={number_of_records} handleGroupsListView = {handleGroupsListView} /> 
					}
				</>
			}
			{AddSubForm && <AddSubscriberView 
				addSubscriber={addSubscriber}
				handleClose={handleClose}
				AddSubscriberStatus={AddSubscriberStatus}
				AddSubscriberStatusDescription={AddSubscriberStatusDescription}
				optionItems={optionItems}
				CountriesPhoneCodesOptionItems={CountriesPhoneCodesOptionItems}
				GroupsListDataContainer={GroupsListDataContainer}
				state={state} SweetClose={SweetClose} SweetOpen={SweetOpen}
		    />}
		</div>
	);
};

const mapStateToProps = ({SubscribersReducer,CommonServices,GroupsReducer}) => {
	return{
		AddSubscriberStatusDescription: SubscribersReducer.AddSubscriber.AddSubscriberStatusDescription,
		AddSubscriberStatus: SubscribersReducer.AddSubscriber.AddSubscriberStatus,
		GroupsListDataContainer : GroupsReducer && GroupsReducer.GroupsListService && GroupsReducer.GroupsListService.GroupsListData.data,
		CountriesPhoneCodesListServiceDataList: CommonServices.CountriesPhoneCodesListServiceReducer.CountriesPhoneCodesListServiceDataList,
		CountriesListServiceDataList: CommonServices.CountryListServiceReducer.CountriesListServiceDataList,
	}
};

export default connect(mapStateToProps,{addSubscriber,GroupsListService,CountriesPhoneCodesListService,CountryListService,addSubscriberSucess}) (AddSubscriberConatiner);
