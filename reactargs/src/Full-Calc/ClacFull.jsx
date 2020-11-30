import React,{useState} from 'react';
import Buttons from './Clac-Buttons';
import './Calc.css';

function CalcFull()
{
    var [calcObj,setcalcObj]=useState({
        display:"Enter a Value"
    });

    return(
        <React.Fragment>
            <center>
                <h1>CALCULATOR</h1>
                <div id="Calc-Container">
                    <div id="Clac-Display">
                        <input className="Display" type="text" value={calcObj.display} readOnly></input>
                    </div>
                    <Buttons funref={setcalcObj} obj={calcObj}></Buttons>
                </div>
            </center>
        </React.Fragment>
    )
}

export default CalcFull;