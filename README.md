# full-stack-app 

## The tech stack
* MongoDB database
* Node API 
* Node Web Server (express) 
* React Front End

## Notes
* Node dev dependencies are only required in development, but a different set of dependencies will be required for deployment
* webpack package compiles modules wwith dependencies into static assets, a compiler of sorts (e.g. jsx into js)
* Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. The "@" sytax is a bit like ```from class import class.object```  
```npm i -D babel-loader @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties```  
*  Nodemon monitors changes and auto updates, kind of like hot reloading
* eslint to scream at us whenever we're doing something wrong. The other eslint packages are to help it work with babel and react  ```npm i -D eslint babel-eslint eslint-plugin-react```
* Convention is to place all modular code under the ```src``` directory
* Another convention is to place all html,css and js being served on the client in the ```public```
