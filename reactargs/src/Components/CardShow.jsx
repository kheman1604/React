import React from 'react';
import Card from "./Card";
import CardData from "./CardData";


// =-=-=-=-= Method 1 -=-=-=-=-=-= 
/*
function CardShow()
{
    return(

        <div className="card-container">
            {
                CardData.map((obj)=>{
                    return(
                        <Card path={obj.path} item={obj.item} info={obj.info}></Card>
                    );
                })
                
            }
        </div>
    );
}

*/

// =-=-=-=-=-= Method 2 =-=-=-=-=-=-=

var process=function processcards(obj)
{
    return(
        <Card path={obj.path} item={obj.item} info={obj.info}></Card>
    );
}

function CardShow(){
    return(
    <div className="card-container">
        {
            CardData.map(process)
        }
    </div>
    );
}

export default CardShow;