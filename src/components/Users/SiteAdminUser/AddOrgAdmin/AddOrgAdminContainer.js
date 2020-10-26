import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import { Select } from "antd";
import AddOrgAdminView from './AddOrgAdminView';
import AddOrgAdminPresentational from './AddOrgAdminPresentational';
import UsersList from '../UsersList'; 
import {CountriesPhoneCodesListService, CountryListService} from "../../../../appRedux/actions/CommonServices";
import {addOrgAdminUsers} from '../../../../appRedux/actions/SiteAdmin/AddOrgAdminAction';
import {useHistory} from "react-router-dom";

const Option = Select.Option;

const AddOrgAdminContainer = (props) => {
    const history = useHistory();
	const {addSiteAdminUsers, CountriesPhoneCodesListService, CountryListService, CountriesListServiceDataList, 
		CountriesPhoneCodesListServiceDataList, addOrgAdminUsers ,AddOrgAdminstatus} = props;
	console.log('Props in Container : ', props);
	const [state, setState] = useState({OrgAdminButton : true, OrgAdminForm : false});
	const handleOrgAdmin = () => {
		setState({OrgAdminButton : false, OrgAdminForm : true});
	}
	const handleClose = () => {
		setState({OrgAdminButton : true, OrgAdminForm : false});
	}

	const [sweetstate, setstate] = useState({
		sweet : false,
	})

	const onConfirm = () => {
		setstate({sweet : false});
		history.push('/users');	
	}

	useEffect(() => {
		CountriesPhoneCodesListService();
		CountryListService();
	},[])
	
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
		<div>
			{state.OrgAdminButton && <div>
				<AddOrgAdminPresentational handleClick={handleOrgAdmin} />
				<UsersList />
			</div>}
			{state.OrgAdminForm && 
				<AddOrgAdminView 
					handleClose={handleClose} 
					addSiteAdminUsers={addSiteAdminUsers}  onConfirm={onConfirm}
					CountriesPhoneCodesOptionItems={CountriesPhoneCodesOptionItems} 
					optionItems={optionItems} AddOrgAdminstatus={AddOrgAdminstatus}
					addOrgAdminUsers={addOrgAdminUsers}  sweetstate={sweetstate} setstate={setstate}
				/>
			}
		</div>
	);
};

const mapStateToProps = ({CommonServices,AddOrgAdmin}) => {
	console.log("huil",AddOrgAdmin.addOrgAdminReducer.addorgAdminstatus);
	return {
		CountriesPhoneCodesListServiceDataList: CommonServices.CountriesPhoneCodesListServiceReducer.CountriesPhoneCodesListServiceDataList,
		CountriesListServiceDataList: CommonServices.CountryListServiceReducer.CountriesListServiceDataList,
		AddOrgAdminstatus  : AddOrgAdmin.addOrgAdminReducer.addorgAdminstatus
	}
}

export default connect(mapStateToProps, { CountriesPhoneCodesListService, CountryListService, addOrgAdminUsers})(AddOrgAdminContainer);