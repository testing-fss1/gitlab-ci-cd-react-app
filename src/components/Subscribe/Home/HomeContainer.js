import React,{useState,useEffect,memo} from "react";
import {useDispatch, useSelector,connect} from "react-redux";
import HomePresentational from "./HomePresentational";
import {GroupsListService,changeSubscriberRequest,changeSubscriberSuccess} from '../../../appRedux/actions';


const HomeContainer=(props)=>{

	const {GroupsListData,loadingData,SubscriberChangeStatus,GroupsListCount} = props

	const [sweet,setSweet] = useState(false)
	const [page_number , setPageNumber] = useState()

		const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(GroupsListService(page_number))

	}, [page_number])

	function handleClick(is_active_status,orng_id){
		const sm_memb_id =  JSON.parse(localStorage.getItem('user_data')).sm_memb_id
		const zero = 0
		const one = 1
		const data = is_active_status === "1" ? zero.toString() : one.toString()
		console.log("el.is_active_status", data,orng_id,sm_memb_id)
		dispatch(changeSubscriberRequest(data,orng_id,sm_memb_id))
		setSweet(true)

	}

	/*function onConfirm(){
		props.changeSubscriberSuccess({})
		setSweet(false)
		props.GroupsListService()
		
	}
*/
	function handlePageChange(pageNumber){
		console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)

  }

  console.log("handlePageChange",page_number)

	return(
		<div>
			<HomePresentational
				GroupsListData = {GroupsListData}
				handleClick = {handleClick}
				loadingData = {loadingData}
				sweet = {sweet}
				
				SubscriberChangeStatus = {SubscriberChangeStatus}
				GroupsListCount = {GroupsListCount}
				handlePageChange = {handlePageChange}
				page_number = {page_number}
			/>
		</div>
		)

} 

const mapStateToProps=({GroupsReducer,commonData,CommonServices})=>{
	console.log("CommonServices",GroupsReducer.GroupsListService.GroupsListData.data)
	return{
		GroupsListData : GroupsReducer.GroupsListService.GroupsListData.data && GroupsReducer.GroupsListService.GroupsListData.data.data,
		 loadingData: commonData.loading,
		 SubscriberChangeStatus :CommonServices.UserStatusChangeReducer.SubscriberChangeStatus,
		 GroupsListCount : GroupsReducer.GroupsListService.GroupsListData.data && GroupsReducer.GroupsListService.GroupsListData.data.total_count
	}	

}

export default connect(mapStateToProps,{changeSubscriberSuccess,GroupsListService})(HomeContainer);
