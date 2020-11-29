import React from 'react';

function Card(props)
{
    return(
        <div className="card">
            <div className="card-image">  
             <img src={props.path} height="200" width="200"></img>
            </div>
             <div className="card-title">Item : {props.item}</div>
             <div className="card-info"> Info : {props.info}</div>
        </div>
    );
}

export default Card;