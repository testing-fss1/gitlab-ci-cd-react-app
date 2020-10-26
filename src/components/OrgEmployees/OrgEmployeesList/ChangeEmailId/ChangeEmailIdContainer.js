import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

import ChangeEmailIdPresentational from "./ChangeEmailIdPresentational";
import {ChangeEmailRequestAddService, ChangeEmailRequestAddServiceSuccess, UniqueCodeVerifyService, UniqueCodeVerifyServiceSuccess} from "../../../../appRedux/actions/OrgEmployees";

const ChangeEmailIdContainer = (props) => {
	const {ChangeEmailRequestAddService, match: {params: {sm_memb_id, sm_email}}, ChangeEmailServiceDataStatus, ChangeEmailServiceDataStatusDes,
		ChangeEmailRequestAddServiceSuccess, UniqueCodeVerifyService, UniqueCodeVerifyServiceDataStatus, UniqueCodeVerifyServiceDataStatusDes,
		UniqueCodeVerifyServiceSuccess
	} = props;
	const[state, setState] = useState({
		CodeVerification: false,
		sweet: false,
		BtnLoading: false,
	})
	const CodeVerifyOpen = () => {
		setState({...state, CodeVerification: true, sweet: false, BtnLoading: false})
		ChangeEmailRequestAddServiceSuccess({})
		UniqueCodeVerifyServiceSuccess({})
	}
	const SweetOpen = () => {
		setState({...state, sweet: true, BtnLoading: true})
	}
	const SweetClose = () => {
		setState({...state, sweet: false, BtnLoading: false})
		ChangeEmailRequestAddServiceSuccess({})
		UniqueCodeVerifyServiceSuccess({})
	}
	const history = useHistory();
	const BackToOrgEmpPage = () => {
		setState({...state, BtnLoading: false})
		history.push('/org-employees');
	}
  return (
    <ChangeEmailIdPresentational CodeVerifyOpen={CodeVerifyOpen} state={state} ChangeEmailRequestAddService={ChangeEmailRequestAddService}
    	sm_memb_id={sm_memb_id} sm_email={sm_email} ChangeEmailServiceDataStatus={ChangeEmailServiceDataStatus} SweetOpen={SweetOpen}
    	ChangeEmailServiceDataStatusDes={ChangeEmailServiceDataStatusDes} SweetClose={SweetClose} UniqueCodeVerifyService={UniqueCodeVerifyService}
    	UniqueCodeVerifyServiceDataStatus={UniqueCodeVerifyServiceDataStatus} UniqueCodeVerifyServiceDataStatusDes={UniqueCodeVerifyServiceDataStatusDes}
		BackToOrgEmpPage={BackToOrgEmpPage}
	/>
  );
};

const mapStateToProps = ({OrgEmployees}) => {
	return {
		ChangeEmailServiceDataStatus: OrgEmployees && OrgEmployees.ChangeEmailRequestAddServiceReducer && OrgEmployees.ChangeEmailRequestAddServiceReducer.ChangeEmailServiceDataStatus,
		ChangeEmailServiceDataStatusDes: OrgEmployees && OrgEmployees.ChangeEmailRequestAddServiceReducer && OrgEmployees.ChangeEmailRequestAddServiceReducer.ChangeEmailServiceDataStatusDes, 
		UniqueCodeVerifyServiceDataStatus: OrgEmployees && OrgEmployees.UniqueCodeVerifyServiceReducer && OrgEmployees.UniqueCodeVerifyServiceReducer.UniqueCodeVerifyServiceDataStatus,
		UniqueCodeVerifyServiceDataStatusDes: OrgEmployees && OrgEmployees.UniqueCodeVerifyServiceReducer && OrgEmployees.UniqueCodeVerifyServiceReducer.UniqueCodeVerifyServiceDataStatusDes,	
	}
}

export default connect(mapStateToProps, {ChangeEmailRequestAddService, ChangeEmailRequestAddServiceSuccess, UniqueCodeVerifyService, UniqueCodeVerifyServiceSuccess})(ChangeEmailIdContainer);
