import React,{useState, useEffect} from 'react';
import {connect} from "react-redux";
import { Select } from "antd";
import EditOrgAdminPresentational from './EditOrgAdminPresentational';
import {CountriesPhoneCodesListService, CountryListService} from "../../../../appRedux/actions/CommonServices";
import {editOrgAdminUsers} from "../../../../appRedux/actions/SiteAdmin/EditOrgAdminAction";
import {orgAdminDetailsGet} from "../../../../appRedux/actions/SiteAdmin/OrgAdminDetailsGet"

const Option = Select.Option;

const EditOrgAdminContainer=(props)=>{
    const {CountriesPhoneCodesListService, CountryListService,loadingData, CountriesPhoneCodesListServiceDataList, CountriesListServiceDataList, editOrgAdminUsers, sm_memb_id, orgAdminDetailsGet, orgAdminUserDetailsGet, org_id} = props;
    const [state,setState]=useState({modalVisible:false})
    useEffect(() => {
        CountriesPhoneCodesListService();
        CountryListService();
    },[])
    const editModalVisible = () => {
        orgAdminDetailsGet(sm_memb_id);
		setState({modalVisible: true});
	}
	const editModalVisibleHide = () => {
		setState({modalVisible: false});
    }
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
        <EditOrgAdminPresentational
            {...state}
            editModalVisible={editModalVisible}
            editModalVisibleHide={editModalVisibleHide} 
            CountriesPhoneCodesOptionItems={CountriesPhoneCodesOptionItems} 
            optionItems={optionItems}   
            editOrgAdminUsers={editOrgAdminUsers}
            sm_memb_id={sm_memb_id}
            org_id={org_id}
            orgAdminUserDetailsGet={orgAdminUserDetailsGet}
            loadingData = { loadingData }
        />
    )
};

const mapStateToProps = ({CommonServices, AddOrgAdmin, commonData}) => {
    console.log('Common service In container : ', AddOrgAdmin);
    return {
        CountriesPhoneCodesListServiceDataList: CommonServices.CountriesPhoneCodesListServiceReducer.CountriesPhoneCodesListServiceDataList,
        CountriesListServiceDataList: CommonServices.CountryListServiceReducer.CountriesListServiceDataList,
        orgAdminUserDetailsGet: AddOrgAdmin.OrgAdminDetailsGetReducer.orgAdminUserDetailsGet,
        loadingData: commonData.loading,
    }
}

export default connect(mapStateToProps, { CountriesPhoneCodesListService, CountryListService, editOrgAdminUsers, orgAdminDetailsGet})(EditOrgAdminContainer);