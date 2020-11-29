import React from 'react';
import CompA from './CompA';
import Contexttt, { Provider } from './Contexttt'

function Server()
{
    return(
    <React.Fragment>
        <div>
            <Provider value="KhemanJain">
            <CompA></CompA>
            </Provider>  
        </div>
    </React.Fragment>
    )
}

export default Server;