import React from 'react';

const Errors=({errors})=>{
    const list=errors.map(err=><li>{err}</li>);

    return(
        <ul>
            {list}
        </ul>
    )
}

export default Errors;