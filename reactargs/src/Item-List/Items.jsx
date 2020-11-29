import React,{useState} from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

function Items()
{

    var [userItems,setUserItems]=useState([]);

    var doAddItem=function(Items)
    {   
        setUserItems(prevItems=>[...prevItems,{id:Math.random().toString(),...Items }])
    }

    var doRemove=function(itemid)
    {
        alert(itemid);
        setUserItems((prevItems)=>
        prevItems.filter(x=>x.id !==itemid)
        );
    }
    return(

        <React.Fragment>
            <ItemForm onaddItem={doAddItem}></ItemForm>
            <br></br>
            <br></br>
            <ItemList item={userItems} onRemoveItem={doRemove}></ItemList>
        </React.Fragment>
        
    )
}

export default Items;