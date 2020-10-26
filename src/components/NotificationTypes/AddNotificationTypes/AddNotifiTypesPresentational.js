import React from "react";
import {Button, Card} from "antd";

const AddNotifiTypesPresentational = (props) => {
	const {handleClick} = props;
    return (
    	<Card className="gx-card" title="Add Notification Types">
    		<Button type="primary" onClick={handleClick}>Add Notification Types</Button>
		</Card>
    );
};

export default AddNotifiTypesPresentational;
