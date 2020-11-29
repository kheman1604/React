import React,{useState} from 'react';

function Output(props)
{
return(
    <div>
        <input type="text" value={props.obj.val1}  readOnly></input>
        <input type="text" value={props.obj.val2} readOnly></input>
    </div>
)

}

export default Output;