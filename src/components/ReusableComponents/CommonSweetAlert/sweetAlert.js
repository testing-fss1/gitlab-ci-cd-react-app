import React from "react";
import {Icon, Modal, Button} from "antd";
import SweetAlert from "react-bootstrap-sweetalert";
import {Link} from "react-router-dom";
import "../../../customizedStyles/style.css";

class Sweetalert extends React.Component {
	render() {
		return (
			<Modal
				visible={this.props.visible}
				title=""
				onOk={this.props.onConfirm}
				onCancel={this.props.onConfirm}
				closable={false}
				footer={[
					<center key="submit">
						<Button type="primary" onClick={this.props.onConfirm}>
							OK
						</Button>
					</center>
				]}
				width="400px"
	        >
	        	<center>
	        		<Icon style={{fontSize: "23px"}} type="info-circle" theme="twoTone" /> 
	        		<span style={{padding: "0 0 0 18px", fontSize: "16px"}}>{this.props.statusDescription}</span>
	        	</center>
	        </Modal>
		)
	}
}

export default Sweetalert;

//--------------------------------------------------------------------------------------------------------------------------------

/* <SweetAlert
	title=""
	confirmBtnBsStyle="primary"
		onConfirm={this.props.onConfirm}
		confirmBtnText={this.props.btnTxt}
>
	<div className="cs-sweetAlertAlign">
			<Icon type="info-circle" theme="twoTone" /> 
	</div>
	<h4>{this.props.statusDescription}</h4>                    
</SweetAlert> */	


/*<Modal
visible={this.props.visible}
title=""
onOk={this.props.onConfirm}
onCancel={this.props.onConfirm}
footer={[
	<center>
		<Button key="submit" type="primary" onClick={this.props.onConfirm}>
			OK
		</Button>
	</center>
]}
>
<center>
	<div className="cs-sweetAlertAlign">
			<Icon type="info-circle" theme="twoTone" /> 
	</div>
	<br/>
	<h4>{this.props.statusDescription}</h4>
</center>
</Modal>*/

/*<div style={{display: "flex", paddingTop : "3px"}}>
	        		<Icon style={{fontSize: "20px"}} type="info-circle" theme="twoTone" /> 
        			<span style={{padding: "1px 0 0 20px", fontSize: "16px"}}>{this.props.statusDescription}</span>
        		</div> <br/>*/