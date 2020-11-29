import React from 'react';
import CompB from './CompB';


function CompA()
{
    return(
    <React.Fragment>
        <div>
            <CompB></CompB>
        </div>
    </React.Fragment>
    )
}

export default CompA;