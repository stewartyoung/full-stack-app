# full-stack-app 

## The tech stack
* MongoDB database
* Node API 
* Node Web Server (express) 
* React Front End

## Part 1: Setting up project and dependencies
* Node dev dependencies are only required in development, but a different set of dependencies will be required for deployment
* webpack package compiles modules wwith dependencies into static assets, a compiler of sorts (e.g. jsx into js) via the ```webpack.config.js``` file. Uses babel within this file to convert jsx files also
* Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. The "@" sytax is a bit like ```from class import class.object```  
```npm i -D babel-loader @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties```  
*  Nodemon monitors changes and auto updates, kind of like hot reloading
* eslint to scream at us whenever we're doing something wrong. The other eslint packages are to help it work with babel and react  ```npm i -D eslint babel-eslint eslint-plugin-react```
* Convention is to place all modular code under the ```src``` directory
* Another convention is to place all html,css and js being served on the client in the ```public```
* ```api``` folder houses the backend server, express
* ```index``` files in each of public, src and api folders is to signify the "starting point" of each of the directories
* ```npm start``` is a script we have made in ```package.json``` to make our files render to the server
* __Had some significant problems configuring babel-node and using ES6 imports, but fixed using this medium article:  https://medium.com/@JedaiSaboteur/import-export-babel-and-node-a2e332d15673__ 

## Part 2: Creating the server
* We first make a http and https server using the corresponding node modules
* Whilst http and https are quick and simple modules to get started, continuing with just http/https modules would leed to a lot of boilerplate code. This is where express comes in, a method of abstracting server code
* Remember that the server is there not to return silly little console logs, but to render the html, css and js to the DOM
* We use ejs, which is a simple templating language that lets you generate HTML markup with plain JavaScript. For example, using a javascript function to output a random number as html. __Note: A very large array of templating languages and frameworks exist__
* Express by default looks for ejs in ```views``` folder at root level, which is why we've created it the way we have

## Part 2: Creating the react front-end
* React front end lives in src/index.js
