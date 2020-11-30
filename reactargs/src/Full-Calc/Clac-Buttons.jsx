import React from 'react';
import './Buttons.css';

function Buttons(props)
{
    var doInput=function(x)
    {
        var oldval= props.obj.display;
        var lc=oldval.substr(oldval.length-1);
        if(props.obj.display==="Enter a Value")
        {
            oldval='';
            props.funref({...props.obj,"display":oldval+x});
        }else
        if(x==="AC")
        {
            oldval='';
            props.funref({...props.obj,"display":oldval});
        }else
        if(x==="=")
        {
            try{
            var result=eval(oldval);
            props.funref({"display":result.toString()});
            }catch(error)
            {
                props.funref({"display":"ERROR"});
            }
            
        }else
        if((x==="/"||x==="*"||x==="+") && (lc==="/"||lc==="*"||lc==="+"))
        {
            try{
                props.funref({...props.obj,"display":oldval});
            }
            catch(error)
            {
                console.log(error);
            }
            
        }
        else{
            props.funref({...props.obj,"display":oldval+x});

        }
        
    }

    
    return(
        <React.Fragment>
            <div id="Clac-Buttons">
                <input className="btn" type="button" value="1" onClick={doInput.bind(this,'1')}></input>
                <input className="btn" type="button" value="2" onClick={doInput.bind(this,'2')}></input>
                <input className="btn" type="button" value="3" onClick={doInput.bind(this,'3')}></input>
                <input className="btn" type="button" value="X" onClick={doInput.bind(this,'*')}></input><br></br>
                <input className="btn" type="button" value="4" onClick={doInput.bind(this,'4')}></input>
                <input className="btn" type="button" value="5" onClick={doInput.bind(this,'5')}></input>
                <input className="btn" type="button" value="6" onClick={doInput.bind(this,'6')}></input>
                <input className="btn" type="button" value="/" onClick={doInput.bind(this,'/')}></input><br></br>
                <input className="btn" type="button" value="7" onClick={doInput.bind(this,'7')}></input>
                <input className="btn" type="button" value="8" onClick={doInput.bind(this,'8')}></input>
                <input className="btn" type="button" value="9" onClick={doInput.bind(this,'9')}></input>
                <input className="btn" type="button" value="+" onClick={doInput.bind(this,'+')}></input><br></br>
                <input className="btn" type="button" value="00" onClick={doInput.bind(this,'00')}></input>
                <input className="btn" type="button" value="0" onClick={doInput.bind(this,'0')}></input>
                <input className="btn" type="button" value="AC" onClick={doInput.bind(this,'AC')}></input>
                <input className="btn" type="button" value="=" onClick={doInput.bind(this,'=')}></input>

            </div>
        </React.Fragment>
    )

}

export default Buttons;