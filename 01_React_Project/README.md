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




