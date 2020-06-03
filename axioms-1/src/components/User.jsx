import React from 'react';

const User = (props)=>{
    return(
        
            <React.Fragment>
                <input type="text" value={props.value} onChange={props.handleChange} placeholder="user"/>
                <button onClick={props.handleClick}>Search</button>
            </React.Fragment>
    )
}

export default User