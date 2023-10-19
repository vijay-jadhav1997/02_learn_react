# 03_Practice 

- import React from "react";
- import ReactDOM from "react-dom/client";


* create ReactElement using React.createElement() & nesting of element:
- ReactElement is JavaScript Object.
- React.createElement => ReactElement is JS Object => HTMLelement(render).
- Examples:
  const heading = React.createElement('h1', {id: 'jayHari', className: 'jay_hari'}, '!! Jay Jay Ram Krushna Hari !!');
  
  const inputBox = React.createElement('input', {id:'inputBox', type:'text', placeholder:'Enter your name...'});
  const clickBtn = React.createElement('button', {id:'clickBtn'}, 'Click here');


# Create React Element using JSX:
- JSX : it is ReactElement like html/xml syntax/structure.
- But, JSX is not HTML/XML.
- Note: In JSX inside curley braces {here...}, we can write any JS Code. 
- JSX => (Babel transpiles/converts JSX to ReactElement)createElement() => ReactElement => HTMLElement(render).
- Babel is a JS compiler/transpiler.

- Creating ReactElement using JSX:
- Examples
  <!-- const JsxHeading = <h6 className="heading">✨!! Jay Radhe Shyam !!✨</h6> -->

  <!-- const JsxContainer = (
    <div className="container">
      <label>✨ !! Jay Radhe Shyam !! ✨</label>
      <img className="radheImg" src="https://cdn.shopclues.com/images1/detailed/91725/140527619-91725149-1535802376.jpg"/>
    </div>
  ); -->



# React Components:
1) Class Based Components- old practice


2) Functional Components- NEW practice
- Functional Components are normal JS function(/Arrow Fn) which returns piece of JSX Element.
- Always make sure, name of Functional components start with Capital letter.
- Examples:

  <!-- const HeadingCoponent1 = () => {
    return <h1 id="heading">💥 !! Jay Hari using JSX by Functional Components !! 💥</h1>;
  }  -->

  <!-- const HeadingCoponent2 = () => <h1 id="heading">💥!!Jay Hari!!💥</h1>;
  const HeadingCoponent3 = () => (
    <h1 id="heading">💥!!Jay Shree Radhe Shyama!!💥</h1>
  ); -->

  <!-- const Container3 = () => (
    <div className="container_box" id="container">
      <div className="loginBox">
        <label htmlFor="userName">User name: </label>
        <input className="user_name" name="userName" id="userName" placeholder="Shree Ganesh..."/>
      </div>
      <div className="loginBox">
        <label htmlFor="userPswd">Password: </label>
        <input className="user_password" name="userPswd" id="userPswd" placeholder="Shree Ganesh..."/>
      </div>
      <button className="login_btn">Login</button>
    </div>
  ); -->


# Composition of Components: 
- nesting of two or more components...
- Examples:
  <!-- const LoginPage = () => (
    <div className="containerBox">
      <HeadingCoponent3 />
      <HeadingCoponent2 />
      <Container3/>
    </div>
  );  -->


# Rendering ReactElement:
- getting reference of html element using ReactDOM.createRoot():
- Example:
  "const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(Container2);
  <!-- root.render(<LoginPage/>);" -->