import React from "react";
import {Button, Card} from "antd";

const AddOrgEmpPresentational = (props) => {
	const {handleClick} = props;
    return (
    	<Card className="gx-card" title="Add Org Employees">
    		<Button type="primary" onClick={handleClick}>Add Org Employees</Button>
		</Card>
    );
};

export default AddOrgEmpPresentational;
