import React from 'react';
import CompC from './CompC';
import Contexttt, { Consumer } from './Contexttt'

function CompB()
{
    return(
    <React.Fragment>
        <div>
            <CompC>
            </CompC>
        </div>
    </React.Fragment>
    )
}

export default CompB;