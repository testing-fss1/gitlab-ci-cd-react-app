import React from 'react';
import {Button, Card} from 'antd';

const AddOrgAdminPresentational = (props) => {
	const {handleClick} = props;
	return (
		<Card className="gx-card" title="Add Org Admin">
			<Button type="primary" onClick={handleClick}>Add Org Admin</Button>
		</Card>
	)
}

export default AddOrgAdminPresentational;