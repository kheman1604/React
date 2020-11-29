import React,{useState} from 'react';

function ItemForm(props)
{

    var [enteredItem,SetItem]=useState('');
    var [enteredQty,SetQty]=useState('');

    var doSubmit=function()
    {
        props.onaddItem({Name:enteredItem,Quantity:enteredQty});
    }
    return(
        <div>
            <center>
                <form>
                <h1>Add Items</h1>
                <label>Item Name : </label>
                <input type="text" value={enteredItem} onChange={(event)=>{SetItem(event.target.value)}} placeholder="Enter Item Name"></input>
                <br></br><br></br>
                <label>Item Quantity : </label>
                <input type="number" value={enteredQty} onChange={(event)=>{SetQty(event.target.value)}} placeholder="Enter Quantity"></input>
                <br></br><br></br>
                <div>
                    <input type="button" onClick={doSubmit} value="Add Item"></input>
                </div>
                </form>
            </center>
        </div>
    )
}

export default ItemForm;