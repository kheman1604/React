import React from 'react';
import './item.css';

function ItemList(props)
{
    return(
        <React.Fragment>
            <center>
                <div className="ItemList">
                    <h2><u>Items is List</u></h2>
                    <ul>
                        {props.item.map((obj)=>{
                            return(
                            <li key={obj.id} onClick={props.onRemoveItem.bind(this, obj.id)}>
                                <span>Item Name : {obj.Name}</span><br></br>
                                <span>Quantity : {obj.Quantity}</span>
                            </li>);
                        })}
                    </ul>
                </div>
            </center>
        </React.Fragment>
    )
}

export default ItemList