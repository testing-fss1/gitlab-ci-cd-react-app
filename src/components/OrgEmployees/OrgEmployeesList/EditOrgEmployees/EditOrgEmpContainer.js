import React, {useState} from "react";
import {connect} from "react-redux";
import {Select} from "antd";

import EditOrgEmpPresentational  from "./EditOrgEmpPresentational";
import {EditOrgEmployeesService} from "../../../../appRedux/actions/OrgEmployees";

const Option = Select.Option;

const EditOrgEmpContainer = (props) => {
	const {EditOrgEmployeesService, el, CountriesPhoneCodesListServiceDataList, OrgEmpLisState} = props;
	const[state, setState] = useState({
		visible: false,
	})
	const OpenModal = () => {
		setState({visible: true})
	} 
	const handleCancel = () => {
		setState({visible: false})
	}
	const closeModal = () => {
		setState({visible: false})
	}
	const CountriesPhoneCodesOptionItems = CountriesPhoneCodesListServiceDataList && CountriesPhoneCodesListServiceDataList.map((el, index) => {
		return <Option key={index} value={el.code}>{el.code}</Option>
	})
	return (
		<EditOrgEmpPresentational state={state} OpenModal={OpenModal} handleCancel={handleCancel} closeModal={closeModal} el={el}
			EditOrgEmployeesService={EditOrgEmployeesService} CountriesPhoneCodesOptionItems={CountriesPhoneCodesOptionItems}
			OrgEmpLisState={OrgEmpLisState}
		/>
	);
};

const mapStateToProps = ({CommonServices}) => {
	return {
		CountriesPhoneCodesListServiceDataList: CommonServices.CountriesPhoneCodesListServiceReducer.CountriesPhoneCodesListServiceDataList
	}
}

export default connect(mapStateToProps, {EditOrgEmployeesService})(EditOrgEmpContainer);
