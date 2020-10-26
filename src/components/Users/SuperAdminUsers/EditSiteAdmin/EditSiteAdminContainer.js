import React,{useState, useEffect} from 'react';
import {connect} from "react-redux";
import EditSiteAdminPresentational from './EditSiteAdminPresentational';
import {editSiteAdminUsers} from "../../../../appRedux/actions/SuperAdmin/editSiteAdminAction";
import {adminUserDetailsGet} from "../../../../appRedux/actions/CommonServices/AdminUserDetailsGet";

const EditSiteAdminContainer=(props)=>{
    const {adminUserDetailsGet, getAdminUserDetails, sm_memb_id, editSiteAdminUsers} = props;
    //console.log('editSiteAdminUsers   : ', editSiteAdminUsers);
    const [state,setState]=useState({modalVisible:false})
    const editModalVisible = () => {
        adminUserDetailsGet(sm_memb_id);
		setState({modalVisible: true});
	}
	const editModalVisibleHide = () => {
		setState({modalVisible: false});
    }
    return(
        <EditSiteAdminPresentational
            {...state}
            editModalVisible={editModalVisible}
            editModalVisibleHide={editModalVisibleHide}
            editSiteAdminUsers={editSiteAdminUsers}
            sm_memb_id={sm_memb_id}
            getAdminUserDetails={getAdminUserDetails}
        />
    )
};

const mapStateToProps = ({CommonServices}) => {
    console.log('Common service In container : ', CommonServices);
    return {
        getAdminUserDetails: CommonServices.AdminUserDetailsGetReducer.getAdminUserDetails,
    }
}

export default connect(mapStateToProps, {editSiteAdminUsers, adminUserDetailsGet})(EditSiteAdminContainer);
