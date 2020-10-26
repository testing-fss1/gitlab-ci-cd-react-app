import React from "react";
import {Button, Card} from "antd";

const AddSubscriberPresentaional = (props) => {
	const {handleClick} = props;
    return (
    	<Card className="gx-card" title="Add Subscriber">
    		<Button type="primary" onClick={handleClick}>Add Subscriber</Button>
		</Card>
    );
};

export default AddSubscriberPresentaional;
