import React from 'react';

function Header()
{
    var instyle={
        listStyle:"none",
        fontSize:"25px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        margin:"auto",
        backgroundColor:"lightgray",
        alignSelf:"center"
    }
    return(
        <React.Fragment>
            <div style={{width:"100%"}} className="navbar">
                <a href="#" className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <ul style={instyle}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Header;