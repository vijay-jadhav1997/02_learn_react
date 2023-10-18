import React from "react";
import ReactDOM from "react-dom/client";

// Creating ReactElement using React.createElement():
// * React.createElement => ReactElement is JS Object => HTMLelement(render)
const heading = React.createElement('h1', {id:"title_heading", className:"heading"}, "🎇 !! Jay Shree Radhe !! 🎇");

// Creating ReactElement using JSX:
//* JSX : JSX consists of JavaScript & XML(eXtensible Markup Language)it is html/xml like syntax
//* JSX => Babel transpiles/converts JSX to React.createElement => ReactElement (it is JS Object) => HTMLElement(render)
const jsxHeading = <h1 className="heading">✨ !! Jay Radhe Shyam !! ✨</h1>

const jsxContainer = (
  <div className="container">
    <label>✨ !! Jay Radhe Shyam !! ✨</label>
    <img className="radheImg" src="https://cdn.shopclues.com/images1/detailed/91725/140527619-91725149-1535802376.jpg"/>
  </div>
);


//* React Components:
//* 1) Class base components: old practice



//* 2) Functional components: new practice
//* Functional components are normal JS function(or Arrow Fn) which returns piece of JSX Element.
//  Always name of functional component starts with Capital letter i.e. HeadingBox, but not headingBox 
const LoginPage = () => {
  return <div className="login_page">This is a Login Page</div>
}
// Following cases are same as above only JS Arrow function basics
const HomePage = () => <div className="home_page">This is a Home Page</div>;
const ContactPage = () => (<div className="contact_page">This is a Contact page</div>);

const ServicePage = function() {
 return (
  <div className="service_page">
    <h5>Service Page</h5>
    <input />
    <button>Add</button>
    <label>⛳ !! Jay Shree Seeta_Ram !! ⛳</label>
    <img src="https://i.pinimg.com/736x/8d/09/74/8d0974a5ba6212bdac52589d30bfa15a.jpg" />
  </div>
 );
} 
const ComplainPage = () => (
 <div className="complain_page">
   Complain here!
 </div>
);


let num = 100;


let numArray = [20, 5,10, 31, 321, 525, 1010];
//! Note: In JSX inside curley braces {here}, we can write any JS Code.
//* Ex. {variable ex. heading, jsxHeading, numArray, numArray[2], num}, 
//*  {Fn calling ex. randomNumber()},
//*   {Functional Components calling ex. ElementComponent() }


//* Composition of Components or Composing Components:
const CompositionOfComponent = (
  <>
    <LoginPage />
    <HomePage />
    <ContactPage />
    <ServicePage />
    <div>
      <span>{num}: {numArray[4]}</span>
      <div>{randomNumber()}</div>
    </div>
    <ComplainPage />
    {jsxContainer}
    <HomePage />
    <HomePage></HomePage> 
    {HomePage()}
    
  </>
);

function randomNumber() {
  return Math.round(Math.random()*100);
}

//* getting reference of html element using ReactDOM.createRoot():
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(CompositionOfComponent);