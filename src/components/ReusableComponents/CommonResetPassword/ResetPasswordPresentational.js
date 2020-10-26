import React, {Component} from "react";
import {Tooltip, Modal, Icon} from "antd";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";

const ResetPasswordPresentational = ({ state: {visible, sweet}, setModalVisible, sm_memb_id, resetPasswordStatusDescription, onConfirm, sm_email, handleOk}) => {
  return (
        <div>
            <Tooltip title="Reset Password">                                   
                <Icon className="cs-tableResetIcon" type="lock" theme="twoTone" onClick={() => setModalVisible(true)}/>
            </Tooltip>       
            <Modal 
                visible={visible}
                onOk={() => handleOk(sm_memb_id)}
                onCancel={() => setModalVisible(false)}
                title="Reset Password"
            >
                <div className="modal-header">
                    <h4 className="gx-text-truncate">Reset Password mail will be sent to :</h4>                           
                </div>
                <div className="modal-body">
                    <p className="gx-text-grey">{sm_email}</p>
                </div>                                                                         
            </Modal>
            {sweet && resetPasswordStatusDescription && 
              <Sweetalert visible={sweet} statusDescription={resetPasswordStatusDescription} onConfirm={onConfirm}/>  
            }
        </div>
    )
}

export default ResetPasswordPresentational;