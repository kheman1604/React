import React from 'react';

function Signup(props)
{
    return(
        <React.Fragment>
            <div className="SignupContainer">
                <p>Signup Form</p>
                <form className="SignupForm">
                 <input type="text" placeholder="Enter Your Name" value={props.name}></input>
                    <br></br>
                    <input type="text" placeholder="Enter Your Email"></input>
                    <br></br>
                    <input type="number" placeholder="Enter Your Mobile"></input>
                    <br></br>
                    <br></br>
                    <button type="submit" class="btnSignup">Submit</button>
                    <br></br>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Signup;