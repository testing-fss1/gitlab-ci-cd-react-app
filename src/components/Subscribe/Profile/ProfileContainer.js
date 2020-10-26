import React,{useEffect,useState} from "react";
import ProfilePresentational from "./ProfilePresentational";
import {useDispatch, useSelector,connect} from "react-redux";
import {SubscribersListService} from "../../../appRedux/actions";


 const ProfileContainer = ({SubscribersListServicedata,loadingData,SubscribersListServiceCount})=>{

 	const dispatchOne = useDispatch();
 	const [page_number , setPageNumber] = useState()
 	const [number_of_records, setNumber_of_records] = useState(10)

 	useEffect(()=>{
 		dispatchOne(SubscribersListService(page_number,number_of_records));
 	},[page_number])

 	function handlePageChange(pageNumber){
		console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)

  }

  console.log("handlePageChange",page_number)

 	return(
 		<div>
 			<ProfilePresentational SubscribersListServicedata = {SubscribersListServicedata} loadingData = {loadingData} SubscribersListServiceCount = {SubscribersListServiceCount} 
 			handlePageChange = {handlePageChange} page_number={page_number}/>
 		</div>
 		)
 }

const mapStateToProps=({SubscribersReducer,commonData})=>{
	console.log("SubscribersListServicedata",SubscribersReducer.SubsribersListService.SubscribersListServicedata )
	
	return{
		SubscribersListServicedata :  SubscribersReducer.SubsribersListService.SubscribersListServicedata.data && SubscribersReducer.SubsribersListService.SubscribersListServicedata.data.data,
		 loadingData: commonData.loading,
		 	SubscribersListServiceCount :  SubscribersReducer.SubsribersListService.SubscribersListServicedata.data && SubscribersReducer.SubsribersListService.SubscribersListServicedata.data.total_count
	}	

}

 export default connect(mapStateToProps,{}) (ProfileContainer)