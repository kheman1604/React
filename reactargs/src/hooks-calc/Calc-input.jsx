import React,{useState} from 'react';

function ClacInput()
{
    var [val1,Updateval1]=useState("Enter Value 1");
    var [val2,Updateval2]=useState("Enter Value 2");
    var doUpdateval1=function(event)
    {
        Updateval1(event.target.value);
    }
    var doUpdateval2=function(event)
    {
        Updateval2(event.target.value);
    }
    
    return(
        <React.Fragment>
            <div>
                Value 1 : <input type="text" value={val1} onChange={doUpdateval1}></input><br></br><br></br>
                Value 2 : <input type="text" value={val2} onChange={doUpdateval2}></input><br></br><br></br>
            </div>
        </React.Fragment>
    )
}

export default ClacInput;