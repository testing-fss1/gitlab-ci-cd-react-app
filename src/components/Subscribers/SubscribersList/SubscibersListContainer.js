import React,{useEffect,useState} from "react";
import SubscibersListPresentational from "./SubscribersListPresentaitonal";
import {SubscribersListService} from "../../../appRedux/actions/Subscribers"
import { connect } from "react-redux";
import {UserStatusChange} from "../../../appRedux/actions/CommonServices";


const SubscribersListConatiner = (props) => {
  const {SubscribersListService,SubscribersListServicedata,SubscribersListServiceStatusDescription, handleSubscribersListView,UserStatusChange,UserStatusChangeServiceStatus,loadingData,SubscribersListTotalCount
  }=props;

  const [page_number , setPageNumber] = useState(1)
  const [number_of_records,setnumber_of_records]=useState(10)


  useEffect(()=>{
    SubscribersListService(page_number,number_of_records);
  },[page_number])

  useEffect(()=>{
		if(UserStatusChangeServiceStatus == "user-status-change-successful") {
      SubscribersListService(page_number,number_of_records);
		}
	}, [UserStatusChangeServiceStatus])


const [modalVisible,setmodalVisible]= useState(false)
const [cardVisible,setCardVisible]= useState(true)


     const GroupsListModalVisible = () => {
		 setmodalVisible(true);
	 	 setCardVisible(false)
         //this.props.orgSpecificPetitionerUserDetails(this.props.membId);
	 }

	 const GroupsListModalVisibleHide = () => {
		 setmodalVisible(false);
		 setCardVisible(true)
    };

    const handleChange = (value, sm_memb_id) => {
      UserStatusChange(value, sm_memb_id);
    }
    console.log("huii",SubscribersListServicedata);


    function handlePageChange(pageNumber){
      console.log("handlePageChange",pageNumber)
      setPageNumber(pageNumber)
  
    }

  return (
     <SubscibersListPresentational
        modalVisible = {modalVisible}
        handleSubscribersListView ={ handleSubscribersListView}
          GroupsListModalVisible={GroupsListModalVisible}
          GroupsListModalVisibleHide={GroupsListModalVisibleHide}
          cardVisible = {cardVisible}
        SubscribersListServicedata={SubscribersListServicedata}
        SubscribersListServiceStatusDescription={SubscribersListServiceStatusDescription}
        handleChange={handleChange}
        loadingData={loadingData}
        SubscribersListTotalCount={SubscribersListTotalCount}
        page_number={page_number}
        number_of_records={number_of_records}
        handlePageChange={handlePageChange}
    />
  );
};

const mapStateToProps = ({SubscribersReducer,CommonServices,commonData}) => {
  console.log('**CountTotal',SubscribersReducer.SubsribersListService.SubscribersListServicedata.data && SubscribersReducer.SubsribersListService.SubscribersListServicedata.data.total_count)
	return {
    SubscribersListServicedata:  SubscribersReducer.SubsribersListService.SubscribersListServicedata.data && SubscribersReducer.SubsribersListService.SubscribersListServicedata.data.data,
    SubscribersListTotalCount:  SubscribersReducer.SubsribersListService.SubscribersListServicedata.data && SubscribersReducer.SubsribersListService.SubscribersListServicedata.data.total_count,
    SubscribersListServiceStatusDescription: SubscribersReducer && SubscribersReducer.SubsribersListService && SubscribersReducer.SubsribersListService.SubscribersListServiceStatusDescription,
    UserStatusChangeServiceStatus: CommonServices && CommonServices.UserStatusChangeReducer && CommonServices.UserStatusChangeReducer.UserStatusChangeServiceStatus,
    loadingData: commonData.loading,
  }
}

export default connect(mapStateToProps,{SubscribersListService,UserStatusChange}) (SubscribersListConatiner);
