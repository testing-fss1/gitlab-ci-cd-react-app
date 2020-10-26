import React from "react";
import {Select, Input, Card, Row, Col, Form, Button, Radio, Checkbox, Icon, Divider,Tooltip,Modal} from "antd";
import {MandatoryMsg, AlphabetsSpaceAndSpecialChar, NumbersMsg, Max10Msg, AlphabetsAndNumbersWithSpecialChar, Max50Msg, EmailMsg} from "../../../constants/ValidationMessages";
import "../../../customizedStyles/style.css";
import Sweetalert from "../../ReusableComponents/CommonSweetAlert"
import CustomLoader from "../../CustomLoaderView";
import CommonPagination from "../../ReusableComponents/CommonPagination";

const Option = Select.Option;
const FormItem = Form.Item;

const ListGroupsPresentational = (props) => {
	const {form:{getFieldDecorator}, handleGroupsListView,handlePageChange, ListGroupCount, onConfirm, loadingData, GroupMappedAddServiceData, handleSubmit, groupsListDataService, state:{sweet, loadingButton, number_of_records, page_number}} = props;
	const formItemLayout = {
	  labelCol: {
		xs: {span: 24},
		sm: {span: 24},
	  },
	  wrapperCol: {
		xs: {span: 24},
		sm: {span: 24},
	  },
	};
	console.log("listgroupspresentational:",props)
	return (
	  
		<Card title="MANAGE GROUPS LIST" className="gx-card">
			{
	            loadingData ?
	            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
	                <CustomLoader />
	          	</div>	          
	            :
	    		<>
					<Divider /><br />
					<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
						<Col lg={{ span: 6 }} md={{ span: 8}} sm={{ span: 8 }} xs={{ span: 24 }}>
							{groupsListDataService}					                     
						</Col> 
						{ListGroupCount == 0 && 
						<div className="cs-records">                                                      
						<h3><i>-- No records found --</i></h3>                 
						</div>
              			}	 
					</Row> 
					<Divider />
					<div className = "cs-AlignCenter">
						<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" onClick={handleGroupsListView}>Close</Button>
						{ ListGroupCount>0 &&
						<Button className="cs-dashboardViewButton cs-btnHoverZoom" type="primary" loading={loadingButton} onClick={handleSubmit}>Submit</Button>		
						}			
					</div>	
					<br />
					{ListGroupCount > 0 && 
						<CommonPagination page_number={page_number} totalRecordsCount={ListGroupCount} handlePageChange={handlePageChange} itemsCountPerPage = {number_of_records}/>
					}		
					{
						sweet && GroupMappedAddServiceData.status_description && GroupMappedAddServiceData.status_description.length>0 &&
						<Sweetalert visible={sweet} btnTxt="OK" statusDescription={GroupMappedAddServiceData.status_description} onConfirm={onConfirm} />
					}
				</>
     		 }
	  </Card>
	);
};

const ListGroupsPresentationalForm = Form.create()(ListGroupsPresentational);

export default ListGroupsPresentationalForm;


