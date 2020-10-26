import React,{useState,useEffect,useDispatch} from "react";
import {Col, Row, Icon} from "antd";
import { connect } from "react-redux";
import axios from 'util/Api';
import NotificationIconPresentational from "./NotificationIconPresentational";
import {notificationListRequest } from "../../appRedux/actions";


 function NotificationIconContainer({authUser,SubscriberListData,notificationListRequest}) {

    const [modifiedData, setModifiedData] = useState([])
    const [totalDataCount,setTotalDataCount] = useState(0)
    const [user_privileges_list,setUser_privileges_list] = useState("")

   



   /* constructor(props) {
        super(props);
        this.state = {
            modifiedData : [],
            totalDataCount : 0,
            user_privileges_list: "",
        }
    }*/

    useEffect(()=>{
        let { user_privileges_list: user } = authUser !== null && authUser;


        if (user && user !==  user_privileges_list) {
              setUser_privileges_list(user);
            let token = JSON.parse(localStorage.getItem('token'));
            if(token) {
                axios.defaults.headers.common['Authorization'] = token;
            }

            if (user === "Subscriber") {
                notificationListRequest();

            }
            
        }

         if (user == "Subscriber") {
            if( SubscriberListData &&  SubscriberListData.data && SubscriberListData.data !== modifiedData) {
                    setModifiedData(SubscriberListData.data);
                let countData = modifiedData.filter(list=>{
                    let date1 = new Date();
                    let date2 = new Date(list.added_date_time);
                    // To calculate the time difference of two dates 
                    let Difference_In_Time = Math.abs(date1 - date2) / 36e5
                    return Difference_In_Time<24
                })
                 setTotalDataCount(countData.length);
            }
        }
      


    },[user_privileges_list,SubscriberListData,user_privileges_list,modifiedData])


   /* static getDerivedStateFromProps(props, state) {
        let { user_privileges_list: user } = authUser !== null && authUser;


        if (user && user !== state.user_privileges_list) {
            state.user_privileges_list = user;
            let token = JSON.parse(localStorage.getItem('token'));
            if(token) {
                axios.defaults.headers.common['Authorization'] = token;
            }

            if (user === "Subscriber") {
                props.notificationListRequest()

            }
            
        }

        if (user == "Subscriber") {
            if( SubscriberListData &&  SubscriberListData.data && SubscriberListData.data !== modifiedData) {
                    setModifiedData(SubscriberListData.data);
                let countData = modifiedData.filter(list=>{
                    let date1 = new Date();
                    let date2 = new Date(list.added_date_time);
                    // To calculate the time difference of two dates 
                    let Difference_In_Time = Math.abs(date1 - date2) / 36e5
                    return Difference_In_Time<24
                })
                 setTotalDataCount(countData.length);
            }
        }
      
        return null
    }*/

  
        
        let { user_privileges_list: user } = authUser !== null && authUser;
        return (
            <NotificationIconPresentational 
               SubscriberListData = {SubscriberListData}
                user={user}
                modifiedData = {modifiedData}
                totalDataCount  = {totalDataCount}
                user_privileges_list = {user_privileges_list}
            />
        )
    }


const mapStateToProps = ({NotificationIconReducers, auth}) => {
    console.log("SubscriberListDataListData",NotificationIconReducers.SubscriberListReducer.SubscriberListData)
    const { authUser } = auth;
    return {
        SubscriberListData : NotificationIconReducers.SubscriberListReducer.SubscriberListData.data,
        authUser,
    }
}

export default connect(mapStateToProps, {notificationListRequest})(NotificationIconContainer);


