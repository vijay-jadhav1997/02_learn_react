# practice-02
-

// create element using React.createElement & nesting of element
// * React.createElement => ReactElement is JS Object => HTMLelement(render)
const heading = React.createElement('h1', {id: 'jayHari', className: 'jay_hari'}, '!! Jay Jay Ram Krushna Hari !!');

const heading2 = React.createElement('h2', {id:'shreeVitthal'}, '!! Shree Vitthal Rakhumai !!');

const inputBox = React.createElement('input', {id:'inputBox', type:'text', placeholder:'Enter your name...'});
const clickBtn = React.createElement('button', {id:'clickBtn'}, 'Click here');

const container = React.createElement('div', {id:'container'}, inputBox, clickBtn);
const display = React.createElement('div', {id:'display'}, '');

const parent = React.createElement('div', {id:'parent'}, heading, heading2, container, display);

// console.log(parent);
// console.log(parent.props);

// reactDOM element reference:
// root.render(parent);
