import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Select} from "antd";
//import GroupsListView from "../OrgEmployeesList/GroupsListView";
import AddOrgEmpPresentational  from "./AddOrgEmpPresentational";
import AddOrgEmpView from "./AddOrgEmpView";
import OrgEmployeesList from "../OrgEmployeesList";
import {AddOrgEmployeesService, AddOrgEmployeesServiceSuccess} from "../../../appRedux/actions/OrgEmployees";
import {CountriesPhoneCodesListService} from "../../../appRedux/actions/CommonServices";

const Option = Select.Option;

const AddOrgEmpContainer = (props) => {
	const {AddOrgEmployeesService, CountriesPhoneCodesListService, CountriesPhoneCodesListServiceDataList, AddOrgEmpServiceDataStatusDes,
		AddOrgEmpServiceDataStatus, AddOrgEmployeesServiceSuccess
	} = props;
	const [state, setState] = useState({
		OrgEmpButton : true, 
		OrgEmpForm : false,
		sweet: false,
		BtnLoading: false,
	})
	const handleOrgEmp = () => {
		setState({OrgEmpButton : false, OrgEmpForm : true})
	}
	const handleClose = () => {
		setState({OrgEmpButton : true, OrgEmpForm : false, BtnLoading: false})		
		AddOrgEmployeesServiceSuccess({})
	}
	useEffect(() => {
		CountriesPhoneCodesListService()
	}, [])
	const CountriesPhoneCodesOptionItems = CountriesPhoneCodesListServiceDataList && CountriesPhoneCodesListServiceDataList.map((el, index) => {
		return <Option key={index} value={el.code}>{el.code}</Option>
	})
	const SweetOpen = () => {
		setState({...state, sweet: true, BtnLoading: true})
	}
	const SweetClose = () => {
		setState({...state, sweet: false, BtnLoading: false})
		AddOrgEmployeesServiceSuccess({})
	}
	return (
		<div>
			{state.OrgEmpButton && 
				<div>
					<AddOrgEmpPresentational handleClick={handleOrgEmp} />
					<OrgEmployeesList />
				</div>						
			}
			{state.OrgEmpForm && <AddOrgEmpView handleClose={handleClose} AddOrgEmployeesService={AddOrgEmployeesService} SweetOpen={SweetOpen}
				CountriesPhoneCodesOptionItems={CountriesPhoneCodesOptionItems} AddOrgEmpServiceDataStatusDes={AddOrgEmpServiceDataStatusDes}
				AddOrgEmpServiceDataStatus={AddOrgEmpServiceDataStatus} state={state} SweetClose={SweetClose}
			/>}
		</div>
	);
};

const mapStateToProps = ({CommonServices, OrgEmployees}) => {
	return {
		CountriesPhoneCodesListServiceDataList: CommonServices.CountriesPhoneCodesListServiceReducer.CountriesPhoneCodesListServiceDataList,
		AddOrgEmpServiceDataStatus: OrgEmployees.AddOrgEmployeesServiceReducer.AddOrgEmpServiceDataStatus,
		AddOrgEmpServiceDataStatusDes: OrgEmployees.AddOrgEmployeesServiceReducer.AddOrgEmpServiceDataStatusDes,
	}
}

export default connect(mapStateToProps, {AddOrgEmployeesService, CountriesPhoneCodesListService, AddOrgEmployeesServiceSuccess})(AddOrgEmpContainer);
