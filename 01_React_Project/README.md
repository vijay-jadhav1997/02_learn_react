# 💻📈 Start building project while learning React.js basic concepts...

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






# React elements:
# JSX:
# React Components:
# props in React :
# Hooks in React :
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
  