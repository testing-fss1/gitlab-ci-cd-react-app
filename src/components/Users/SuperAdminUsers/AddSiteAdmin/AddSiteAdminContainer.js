import React, {useState} from 'react';
import {connect} from "react-redux";
import AddSiteAdminView from './AddSiteAdminView';
import AddSiteAdminPresentational from './AddSiteAdminPresentational';
import UsersList from '../UsersList';
import {addSiteAdminUsers} from '../../../../appRedux/actions/SuperAdmin/addSiteAdminAction';

const AddSiteAdminContainer = (props) => {
	const [state, setState] = useState({SiteAdminButton : true, SiteAdminForm : false})
	const handleSiteAdmin = () => {
		setState({SiteAdminButton : false, SiteAdminForm : true})
	}
	const handleClose = () => {
		setState({SiteAdminButton : true, SiteAdminForm : false})
	}
	const {addSiteAdminUsers} = props;
	return(
		<div>
			{state.SiteAdminButton && <div>
				<AddSiteAdminPresentational handleClick={handleSiteAdmin} />
				<UsersList />
			</div>}
			{state.SiteAdminForm && <AddSiteAdminView handleClose={handleClose} addSiteAdminUsers={addSiteAdminUsers} />}
		</div>
	);
};

const mapStateToProps = ({SiteAdminReducer}) => {
	return {
		addSiteUsersStatusDescription: SiteAdminReducer.addSiteAdminReducer.addSiteUsersStatusDescription,
	}
}

export default connect(mapStateToProps, {addSiteAdminUsers})(AddSiteAdminContainer)