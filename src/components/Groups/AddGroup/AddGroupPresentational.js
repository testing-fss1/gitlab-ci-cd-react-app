import React from 'react';
import { Button,Card } from 'antd';


const  AddGroupPresentational =(props)=>{
    const {handleClick} =props
    return (
        <Card className="gx-card" title="Add Groups">
    		<Button type="primary" onClick={handleClick}>Add Group</Button>
	    </Card>
    )
};

export default AddGroupPresentational;