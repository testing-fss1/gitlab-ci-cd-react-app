import React,{useEffect,useState} from "react";
import SubscriberSingleViewPresentaional from "./subSingleViewPresentational";
import {connect,useDispatch} from "react-redux";
import {SubscriberSingleViewListService,AdminUserDetailsGet,changeSubscriberRequest} from "../../../appRedux/actions";


const SubscriberviewContainer = (props)=>{
  const {match : {params : {org_id ,sm_memb_id}} ,SubscriberSingleViewListService ,AdminUserDetailsGet,
  SubscriberlistData, AdminUserDetails,SubscriberChangedata ,SubscriberChangeStatus,SubscriberlistCount,
  changeSubscriberRequest,loadingData} = props ;

  const dispatch = useDispatch();
  const [page_number , setPageNumber] = useState()
  
   useEffect(()=>{
    SubscriberSingleViewListService(org_id,sm_memb_id,page_number);
    
  },[page_number]);


  const handleUnsubscribe=(orng_id,is_active_status)=>{
		const unsubscribe = 0
		const subscribe = 1
		const data = is_active_status === "1" ? unsubscribe.toString() : subscribe.toString()
		//console.log("AdminUserDetailsGet(org_id,sm_memb_id);", data)
	   changeSubscriberRequest(data,orng_id,sm_memb_id,org_id)
     
	}

  const handlePageChange= (pageNumber)=>{
    console.log("handlePageChange",pageNumber)
    setPageNumber(pageNumber)
  }


  console.log("jai hindi",SubscriberChangedata);
 return (
     <div>
        <SubscriberSingleViewPresentaional SubscriberlistData={SubscriberlistData} 
        AdminUserDetails ={AdminUserDetails} handleUnsubscribe={handleUnsubscribe}
        SubscriberChangedata ={SubscriberChangedata} loadingData={loadingData}
        SubscriberlistCount ={SubscriberlistCount} handlePageChange={handlePageChange}
        page_number ={page_number}
        />
     </div>
 )

}


const mapStateToProps = ({SubscribersReducer,GroupsReducer,CommonServices,commonData})=>{
  console.log("polo",SubscribersReducer.SubscriberSingleViewReducer.SubscriberSingleViewdata)
  return {
    SubscriberlistData :SubscribersReducer.SubscriberSingleViewReducer.SubscriberSingleViewdata.data ,
    SubscriberlistCount : SubscribersReducer.SubscriberSingleViewReducer.SubscriberSingleViewdata.total_count,
    AdminUserDetails : SubscribersReducer.SubscriberSingleViewReducer.AdminUserDetailsdata.data,
    SubscriberChangedata :SubscribersReducer.SubscriberSingleViewReducer.subscriberchangeddata.status,
    loadingData: commonData.loading,
  }
}


export default connect(mapStateToProps,{SubscriberSingleViewListService,AdminUserDetailsGet,changeSubscriberRequest})(SubscriberviewContainer) ;