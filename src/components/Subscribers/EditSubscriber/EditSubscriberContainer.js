import React,{useState} from 'react';
import {connect} from 'react-redux';
import EditSubscriberPresentational from './EditSubscriberPresentational';
import {EditSubscriber} from '../../../appRedux/actions/Subscribers';
import {Select} from "antd";

const Option = Select.Option;

const EditSubcriberContainer=(props)=>{
  const {EditSubscriber,EditSubscriberStatus,EditSubscriberStatusDescription,el,page_number,number_of_records,CountriesListServiceDataList,CountriesPhoneCodesListServiceDataList} =props;

    const [state,setState]=useState({modalVisible:false})

    const editModalVisible = () => {
		setState({modalVisible: true});
        //this.props.orgSpecificPetitionerUserDetails(this.props.membId);
	}

	const editModalVisibleHide = () => {
		setState({modalVisible: false});
    }
    console.log('editsubcontainer',state)
    const CountriesPhoneCodesOptionItems = CountriesPhoneCodesListServiceDataList && CountriesPhoneCodesListServiceDataList.map((el, index) => {
      return <Option key={index} value={el.code}>{el.code}</Option>
    })
    let optionItems = [];
		if(CountriesListServiceDataList) {
			optionItems = CountriesListServiceDataList.map((list) => 
				<Option key={list.country_id} value={list.country_name} label={list.country_name}>{list.country_name}</Option> 
			)
		}
    return(
        <EditSubscriberPresentational
            {...state}
            EditSubscriber={EditSubscriber}
            editModalVisible={editModalVisible}
            editModalVisibleHide={editModalVisibleHide}
            EditSubscriberStatus={EditSubscriberStatus}
            EditSubscriberStatusDescription={EditSubscriberStatusDescription}
            el={el}
            page_number={page_number} number_of_records={number_of_records} 
            optionItems={optionItems}
            CountriesPhoneCodesOptionItems={CountriesPhoneCodesOptionItems}
        />
    )
};


const mapStateToProps = ({SubscribersReducer,CommonServices}) => {
	return{
		EditSubscriberStatusDescription: SubscribersReducer.EditSubscriber.EditSubscriberStatusDescription,
        EditSubscriberStatus: SubscribersReducer.EditSubscriber.AddSubscriberStatus,
        CountriesListServiceDataList: CommonServices.CountryListServiceReducer.CountriesListServiceDataList,
        CountriesPhoneCodesListServiceDataList: CommonServices.CountriesPhoneCodesListServiceReducer.CountriesPhoneCodesListServiceDataList,
	}
};

export default connect(mapStateToProps,{EditSubscriber}) (EditSubcriberContainer);