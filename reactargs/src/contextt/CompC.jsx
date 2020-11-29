import React,{useContext} from 'react';
import CompB from './CompB';
import Contexttt,{context} from './Contexttt'


function CompC()
{
    var uid=useContext(context)

    return(
    <React.Fragment>
        <div>
           <h1> User Id : {uid}</h1>
        </div>
    </React.Fragment>
    )
}

export default CompC;