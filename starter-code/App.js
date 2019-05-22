import React, { Component } from "react";
import "../starter-code/src/App.css";




class App extends Component {



  
  render() {


  
      const menu=(
      
      <nav className="navbar" id="topmenu">
      <img src="images/ironhack-logo.svg"/>
        <a href="#"><img src="images/menu-top.svg"/></a>
        
      </nav>);
const logosReact=(  
<div className="set">
  <div><img src="images/react-logo.svg"/></div>
  <div><img src="images/react-logo.svg"/></div>
  <div><img src="images/react-logo.svg"/></div>
  <div><img src="images/react-logo.svg"/></div>

</div>);

const mensaje=(

<div className="hola">
  <h1>Say Hello to ReactJS</h1>
  <p>You will lear afasdfajasfaskflaskflaslasdfjlasfksd</p>
  <p><a className="btn btn-light btn-lg" href="#" role="button" id="ooo">Awsome!</a></p>
</div>
);
const fondo=( 
<div className="cuerpo">
{menu}
{logosReact}
{mensaje}
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
      <span className="navbar-toggler-icon" ></span>
      </button></div>
);



const piedepagina=(
<footer className="page-footer">  

<div className="container-fluid text-center">

  <div className="row piedepagina_row">

    <div className="col-md-3 mt-md-0 mt-0 ">

      <img src="../images/icon1.png"/>      
      <h5>Declarative</h5>  
      <p>React makes it painless to crate interactive UIs.</p>

    </div>

    <div className="col-md-3 mt-md-0 mt-0">

      <img src="../images/icon2.png"/>    
      <h5>Components</h5>
      <p>Build encapsulated components that manage their state.</p>

    </div>
   
    <div className="col-md-3 mt-md-0 mt-0">

 
      <img src="../images/icon3.png"/>    
      <h5>Single-Way</h5>
      <p>A set of immutable values are passed to de components.</p>

    </div>

    <div className="col-md-3 mt-md-0 mt-0">

    
      <img src="../images/icon4.png"/>    
      <h5>JSX</h5>
      <p>Statically typed, design to run on modern browsers.</p>

    </div>
  
  </div>
  </div>
</footer>
);

      return (
        <div className="App">
          {fondo}
          {piedepagina}
        </div>
      );
  }
}

export default App;