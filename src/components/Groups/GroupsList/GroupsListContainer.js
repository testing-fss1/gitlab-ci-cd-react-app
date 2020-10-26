import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import GroupsListPresentational from "./GroupsListPresentational";
import {GroupsListService,groupStatusChange} from '../../../appRedux/actions/Groups';

const GroupsListContainer = (props) => {
  const {GroupsListService, GroupsListData, GroupsListStatusDescription, handleGroupsListView, groupStatusChange, loadingData,GroupsListCount}=props;
  console.log("GroupsListStatusDescription:", GroupsListStatusDescription)
  const [page_number , setPageNumber] = useState(1)
  const [number_of_records,setnumber_of_records]=useState(10)

  useEffect(()=>{
    GroupsListService(page_number,number_of_records)
  },[page_number])

  function handlePageChange(pageNumber){
		console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)

  }

  const handlegroupstatus=(value)=>{
    let obj = JSON.parse(value);
    groupStatusChange(obj.is_active_status,obj.orng_id,page_number,number_of_records)
  }
  return (
    <GroupsListPresentational
      GroupsListData={GroupsListData}
      GroupsListStatusDescription={GroupsListStatusDescription}
      handlegroupstatus={handlegroupstatus}
      loadingData={loadingData}
      handleGroupsListView={handleGroupsListView}
      handlePageChange={handlePageChange}
      page_number = {page_number}
      number_of_records={number_of_records}
      GroupsListCount = {GroupsListCount}
    />
  );
};


const mapStateToProps = ({GroupsReducer,commonData}) => {
  console.log("GroupsReducer:", GroupsReducer.GroupsListService.GroupsListStatusDescription)
  return {
    GroupsListData : GroupsReducer.GroupsListService.GroupsListData.data && GroupsReducer.GroupsListService.GroupsListData.data.data,
    GroupsListCount : GroupsReducer.GroupsListService.GroupsListData.data && GroupsReducer.GroupsListService.GroupsListData.data.total_count,
    loadingData: commonData.loading,
    GroupsListStatusDescription : GroupsReducer.GroupsListService.GroupsListStatusDescription
	}
}
export default connect(mapStateToProps,{groupStatusChange,GroupsListService})(GroupsListContainer);
