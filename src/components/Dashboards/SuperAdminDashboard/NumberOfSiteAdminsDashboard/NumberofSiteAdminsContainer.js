import React,{useState,useEffect} from "react";
import NumberofSiteAdminsPresentational from "./NumberofSiteAdminsPresentational";
import {connect}  from "react-redux";
import {SiteAdminListService} from "../../../../appRedux/actions/Dashboards/SuperAdminDashboardAction/SiteAdminDashboardAction";


const NumberofSiteAdminsContainer = (props)=> {
	const {NumberofSiteAdminsCardShow ,SiteAdminListService,siteadminCount} = props ;
    const [state, setState] = useState({
    	page_number: '',
    	number_of_records: '',
    });

	useEffect(() => {
         SiteAdminListService({...state})
    },[]);

    return (
		<div>
			<NumberofSiteAdminsPresentational cardColor="teal"  
			NumberofSiteAdminsCardShow={NumberofSiteAdminsCardShow}
            NumberofSiteAdmins = {siteadminCount}
			/>
		</div>
	)	
}

const mapStateToProps = ({DashboardReducer}) => {
	return {	
	siteadminCount : DashboardReducer.SuperAdminDashboardReducer.siteAdmindashboardReducer.siteadminCount,
   }
};

export default connect (mapStateToProps,{SiteAdminListService})(NumberofSiteAdminsContainer);