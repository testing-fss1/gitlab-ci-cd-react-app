import React from "react";
import { connect } from "react-redux";
import SiteAdminUser from './SiteAdminUser';
import IntlMessages from "util/IntlMessages";
import SuperAdminUsers from './SuperAdminUsers';

const UsersComp = (props) => {
	let { user_privileges_list: user } = props.authUser !== null && props.authUser;
  	return (
    	<div>
      		{user == "Super Administrator" && <SuperAdminUsers />}
			{user == "Site Administrator" && <SiteAdminUser />}
   		</div>
  	);
};

const mapStateToProps = ({ auth }) => {
	const { authUser } = auth;
	return { authUser }
};

export default connect(mapStateToProps, {})(UsersComp);
