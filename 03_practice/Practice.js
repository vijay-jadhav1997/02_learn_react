import React from "react";
import  ReactDOM  from "react-dom/client";

// Create ReactElement using React.createElement("tagName",{attributes}, "TextNode"/ ReactElement1, ReactElement2,...)
const element = React.createElement('h2', {id:"heading"}, "🌹 !! Shree Dnyanoba Mauli Tukaram !! 🌹");


// JSX:
const element2 = <h2>🌼 !! ShreeGuru Dnyaneshwari !! 🌼</h2>
const element3 = (
  <div>
    <h2>🌼 !! ShreeGuru Dnyaneshwari !! 🌼</h2>
    {element}
  </div>
);

let numArray = [20, 5,10, 31, 321];
//! Note: In JSX inside curley braces {here}, we can write any JS Code.
//* Ex. {variable ex. element, element2, numArray, numArray[2]}, 
//*  {Fn calling ex. randomNumber()},
//*   {Functional Components calling ex. ElementComponent() }

// React Components: 1) Class base components, 2) Functional Components:
//* 2) Functional components:
const ElementComponent = function() {
  return <h1>🌺 !! Jay Shree Ram !! 🌺</h1>;
} 

const ElementComponent2 = () => {
  return (
    <div>
      {ElementComponent()}
      <h2>🌷 !! Har Har Mahadev !! 🌷</h2>
      {element2}
    </div>
  )
}

const ElementComponent3 = () => <h2>!! Jay Hari !!</h2>;

const ElementComponent4 = () => (
  <div>
    <h2>!! Jay Hari !!</h2>
    {ElementComponent2()}
    <div>
      {randomNumber()}
      <ElementComponent3 />
    </div>
  </div>
);

function randomNumber() {
  return Math.round(Math.random()*100);
}


// Composition of Components:
const CompositionOfComponents = (
  <>
    {element3}
    <div>!! Jay Shree Ram !!</div>
    <ElementComponent3 />
    {randomNumber()}
    <ElementComponent></ElementComponent>
  </>
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(element);
// root.render(element2);
// root.render(element3);
// root.render(<ElementComponent/>);
// root.render(<ElementComponent2/>);
// root.render(<ElementComponent3/>);
root.render(<ElementComponent4/>);