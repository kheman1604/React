import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Footer from './Footer'
import Signup from './Signup';

ReactDOM.render(
  <React.Fragment >
    <div class="main">
    <Header></Header>
    <Signup></Signup>
    <Signup></Signup>
    <Footer></Footer>
    </div>
  </React.Fragment>
  ,document.getElementById("root")
);


