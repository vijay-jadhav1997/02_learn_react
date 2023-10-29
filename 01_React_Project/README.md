# 💻💫 Start building project while learning React.js basic concepts... 💫

## Basics (project set up with npm(a package manager), parcel(a zero conf. bundler), Babel(a JS compiler/ transpiler), and making project/app/code production ready....):

- install node.js & npm (in pc/laptop):
- npm init (): creates package.json file.
- npm install -D parcel (): install parcel as a dev-dependency of project.
- npm install react : install react library as a dependency of project.
- npm install react-dom : install react-dom library as dependency of project.
- command for to start project for development on localhost:
  >> npx parcel index.html
  >> npx parcel build index.html  (for building production ready project)
- In package.json file in scripts property object add code just like below:
  {
    "name": .....
    ....,
    "scripts": {
      "start": "parcel index.html",
      "build": "parcel build index.html",
      ...
    },
    .....
  }
  
- Industry standards: 
  - Now, to start project for development on localhost-
    >> npm run start     (npm start => shortcut)
  - to build project production ready:
    >> npm run build

- React Router library: to install in project setup
  - npm install react-router-dom


# Types of export & import:
  1) named export - import :
  2) default export - import :

# React elements: 
  - React elements are JS object => {type:HTML element/tag or component, [props ], [children ]} OR {type: tag/component, [props, children]}
# JSX:
# React Components:
# props in React : 
  - In React, props (JS object) are used to pass info/data down from parent component to child component.
  - props are only used to pass data from a parent to a child component, & there is no way to pass props from a child to a parent component.
  - props are read-only (immutable) in child component i.e. child component can't change/update/modify props data, but only can access & use it.
  - Typically Static: props are typically used for passing data that doesn't change frequently during the component's life cycle. They are well-suited for static values such as text, configuration settings, child component's style properties, or data from API.
  - The parent component defines & provides the props to the child component. The child component can access & use these props, but doesn't have control over them i.e. can't change them (props).
# Stateful Vs Stateless Components:
# Shimmer UI :
# Config driven UI (data) :
# Hooks in React : 
- Useful link (please refer): https://www.freecodecamp.org/news/the-beginners-guide-to-react-hooks/
- Normal JS utility functions
- Examples: 
  1) useState(): 
    - syntax: const [variable, setVariable] = useState("initial value"); initial value of variable can be any JS data type..
    - useState declare Local State Variable- Super Powerful variable in react.
    - always declared within the functional component's body
    - whenever State variable updates, react triggers a reconciliation cycle (re-render the component associated with that State variable).

  2) useEffect(): 
   - syntax: useEffect(() => {}, ["dependency array"]);
   - if no depedency array => useEffect is called on every render of component which useEffect belongs to.
   - if depedency array is empty "[]" => useEffect is called only once when component  render first time.
   - if depedency array is ["stateVariable"] => useEffect is called everytime when stateVariable is updated.
  


  # Two Types of Routing in web apps:
    1) Server Side Routing:
    2) Client Side Routing:
      - 
      ## Dynamic Routing:

