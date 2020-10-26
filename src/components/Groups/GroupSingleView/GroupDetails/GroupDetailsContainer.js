import React from 'react';
import GroupDetailsPresentational from './GroupDetailsPresentational';
import { connect } from 'react-redux';
const GroupsDetailsContainer=(props)=>{
    const {GroupGetData,loadingData}=props;
    console.log('****GETDATA***',GroupGetData)
    return(
        <GroupDetailsPresentational GroupGetData={GroupGetData} loadingData={loadingData} />
    )
};

const mapStateToProps = ({commonData}) => {
    return{
        loadingData: commonData.loading
    }
  };

export default connect(mapStateToProps,{}) (GroupsDetailsContainer);