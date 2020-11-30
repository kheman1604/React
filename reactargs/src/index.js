import React from 'react';
import ReactDOM from 'react-dom';
import CardShow from './Components/CardShow';
import Server from './contextt/Server';
import obj from "./ExportLib/ExportLibrary";
import CalcFull from './Full-Calc/ClacFull';
import Calc from './hooks-calc/Calc';
import Items from './Item-List/Items';


ReactDOM.render(
  <React.Fragment>
    {/* <CardShow></CardShow> */}
    {/* <h1>User Id : {obj.forgotpass("Kheman")}</h1> */}
    {/* <Server></Server> */}
    {/* <Calc></Calc> */}
    {/* <Items></Items> */}
    <CalcFull></CalcFull>
  </React.Fragment>
  ,document.getElementById('root')
);
