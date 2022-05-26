import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';  // called as single component


// then bind import App from './components/App' with the id="employeeApp" that is in the home.blade.
// go here telling have an id of app, need to render our components there and here is a component import App from './components/App' that component will have all the components inside it so we are passing that component in here (<App />

if (document.getElementById("homeApp")) {
  ReactDOM.render(<App />, document.getElementById("homeApp"));
}









// we cut from firstproject\resources\js\components\Example.js into firstproject\resources\js\index.js bcs want to bind multiple  components not just a single component
// <App /> calling component


// so have index.js where we are calling this:
// if (document.getElementById("exampleApp")) {
//   ReactDOM.render(<App />, document.getElementById("exampleApp"));
// }
// we have App.js passing the App() function and this App is called in index.js above


// created an index.js file, but how the application gonna know that need to use the index.js file
// the reason is bcs this is (index.js) something we created, if go to ..\resources\js\app.js it is outside of the components directory app.js by default created, so at app.js, have require components and example given: require('./components/Example'); say to require('./index');