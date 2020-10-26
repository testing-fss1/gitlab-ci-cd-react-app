import React, {Component} from "react";
import {Tooltip, Modal, Icon} from "antd";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert";

const ResendEmailPresentational = ({setModalVisible, sm_memb_id, state: {sweet, visible}, resendEmailStatusDescription, onConfirm, sm_email, handleOk}) => {
	return (
        <div>
            <Tooltip title="Resend Email">                                   
                <Icon className="cs-tableResendIcon" type="mail" theme="twoTone" onClick={() => setModalVisible(true)} />
            </Tooltip>       
            <Modal 
                visible={visible}
                onOk={() => handleOk(sm_memb_id)}
                onCancel={() => setModalVisible(false)}
                title="Re-send Activation Email"
            >
                <div className="modal-header">
                    <h4 className="gx-text-truncate">Activation Email will be resent to : </h4>                  
                </div>
                <div className="modal-body">
                    <p className="gx-text-grey">{sm_email}</p>
                </div>                                                                         
            </Modal>
            {sweet && resendEmailStatusDescription && 
              <Sweetalert visible={sweet} statusDescription={resendEmailStatusDescription} onConfirm={onConfirm}/>  
            }
        </div>
    )
}

export default ResendEmailPresentational;