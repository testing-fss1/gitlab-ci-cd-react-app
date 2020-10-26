import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import ComposeHistoryPresentational from "./ComposeHistoryPresentational";
import {ComposeHistoryService} from 'appRedux/actions/ComposeHistory';

function ComposeHistoryContainer (props) {

	const {ComposeHistoryService, ComposeHistoryReducerList} = props;
	console.log('ComposeHistoryReducerList', ComposeHistoryReducerList);

	useEffect(() => {
		ComposeHistoryService();
	}, [])

  	return (
	  	<>
	  		<ComposeHistoryPresentational ComposeHistoryReducerList={ComposeHistoryReducerList} />
	  	</>
	 )
}

const mapStateToProps = ({ComposeHistoryReducer}) => {
	return {
		ComposeHistoryReducerList : ComposeHistoryReducer && ComposeHistoryReducer.ComposeHistory && ComposeHistoryReducer.ComposeHistory.ComposeHistoryData
	}
}

export default connect(mapStateToProps, {ComposeHistoryService})(ComposeHistoryContainer);