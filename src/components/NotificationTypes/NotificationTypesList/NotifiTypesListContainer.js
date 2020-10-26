import React, {useEffect,useState} from "react";
import {connect} from "react-redux";

import NotifiTypesListPresentational from "./NotifiTypesListPresentational";
import {NotifiTypesListService, NotifiTypesStatusChange} from "../../../appRedux/actions/NotificationTypes";

const NotifiTypesListContainer = (props) => {
	const {NotifiTypesListService, NotifiTypesListServiceDataList, NotifiTypesStatusChange, NotifiTypesListServiceDataStatusDes, loadingData, 
        NotifiTypesListServiceDataCount
    } = props;
    
    const [state, setState] = useState({
        page_number: 1,
        number_of_records: 10,
    })

	useEffect(() => {
    	NotifiTypesListService({...state});
    }, [])

    const handleChange = (value, ornt_id) => {
    	NotifiTypesStatusChange(value, ornt_id, {...state})
    }

    const handlePageChange = (pageNumber) => {        
        setState({...state, page_number: pageNumber})       
        NotifiTypesListService({...state});
    }

    return (
      <NotifiTypesListPresentational
            NotifiTypesListServiceDataList={NotifiTypesListServiceDataList}
            handleChange={handleChange}
            loadingData={loadingData}
            NotifiTypesListServiceDataStatusDes={NotifiTypesListServiceDataStatusDes}
            handlePageChange = {handlePageChange} 
            NotifiTypesListServiceDataCount = {NotifiTypesListServiceDataCount}
            state = {state}
		/>
    );
};

const mapStateToProps = ({NotificationTypes, commonData}) => {
	return {
		NotifiTypesListServiceDataList: NotificationTypes && NotificationTypes.NotifiTypesListServiceReducer && NotificationTypes.NotifiTypesListServiceReducer.NotifiTypesListServiceDataList.data,
		NotifiTypesListServiceDataStatusDes: NotificationTypes && NotificationTypes.NotifiTypesListServiceReducer && NotificationTypes.NotifiTypesListServiceReducer.NotifiTypesListServiceDataStatusDes,
        NotifiTypesListServiceDataCount: NotificationTypes && NotificationTypes.NotifiTypesListServiceReducer && NotificationTypes.NotifiTypesListServiceReducer.NotifiTypesListServiceDataList.total_count,
        loadingData: commonData.loading,
	}
}

export default connect(mapStateToProps, {NotifiTypesListService, NotifiTypesStatusChange})(NotifiTypesListContainer);
