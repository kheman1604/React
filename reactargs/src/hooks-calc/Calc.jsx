import React,{useState} from 'react';

function Calc()
{

    var [val1,Updateval1]=useState('');
    var [val2,Updateval2]=useState('');
    var [sum,doSum]=useState(" ");
    var [mul,doMul]=useState(" ");
    var doUpdateval1=function(event)
    {
        Updateval1(event.target.value);
    }
    var doUpdateval2=function(event)
    {
        Updateval2(event.target.value);
    }
    var doSumm=function()
    {
        doSum(parseInt(val1)+parseInt(val2));
        Updateval1(val1);
        Updateval2(val2);

    }
   
    var doMull=function()
    {
        doMul(val1*val2);
    }
    return(
        <React.Fragment>
            <center>
                <div className="clac-container">
                    <div>
                        <br></br>
                        <h1>Calculator</h1>
                        <br></br>
                        Value 1 : <input type="text" value={val1} onChange={doUpdateval1} placeholder="Enter Value"></input><br></br><br></br>
                        Value 2 : <input type="text" value={val2} onChange={doUpdateval2} placeholder="Enter Value"></input><br></br><br></br>
                        <input type="button" onClick={doSumm} value="SUM"></input>
                        <input type="button" onClick={doMull} value="MULTIPLY"></input><br></br><br></br>
                        <label>SUM : </label>
                        <input type="text" value={sum} readOnly></input>
                        <br></br><br></br>
                        <label>MUL : </label>
                        <input type="text" value={mul} readOnly></input>
                    </div>
                </div>
            </center>
        </React.Fragment>
    );
}

export default Calc;