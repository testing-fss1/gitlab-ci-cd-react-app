import React,{useEffect} from 'react';
import { connect } from "react-redux";
import GroupSingleViewPresntational from './GroupSingleViewPresentational';
import {GroupDataGetService} from '../../../appRedux/actions/Groups'

const GroupSingleViewContatiner=(props)=>{

const{match:{params:{orng_id}},GroupDataGetService,GroupGetData}=props;
console.log('****orng_id****',orng_id)


useEffect(()=>{
    GroupDataGetService(orng_id);
  },[])
    return(
        <GroupSingleViewPresntational GroupGetData={GroupGetData} orng_id={orng_id}/>
    )
}

const mapStateToProps = ({GroupsReducer}) => {
  console.log('**111111111****',GroupsReducer.GroupGetDataService.GroupGetData.data)
    return {
        GroupGetData : GroupsReducer.GroupGetDataService.GroupGetData.data ,
      }
  }

export default connect(mapStateToProps,{GroupDataGetService}) (GroupSingleViewContatiner);