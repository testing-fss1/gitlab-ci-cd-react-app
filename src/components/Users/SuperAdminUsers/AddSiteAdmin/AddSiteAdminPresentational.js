import React from 'react';
import {Button, Card} from 'antd';

const AddSiteAdminPresentational = (props) => {
	const {handleClick} = props;
	return (
		<Card className="gx-card" title="Add Site Admin">
			<Button type="primary" onClick={handleClick}>Add Site Admin</Button>
		</Card>
	)
}

export default AddSiteAdminPresentational;