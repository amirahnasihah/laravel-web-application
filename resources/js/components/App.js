import React from "react";
import ReactDOM from "react-dom";
// components to be on top
import Space from './pagesComponent/Space';  // Space.js include here App.js so that can find it display it


// create function
function App() {
return (
    <div className="container">
        <div className="row justify-content-center">
            <h2>Testing</h2>
            {/* components goes here = if want to include some components can call those components here, also need to include it on top*/}
            <Space/>
        </div>
    </div>
);
}

export default App;


// to call the component <Space /> and is going to render there

// so have index.js where we are calling this:
// if (document.getElementById("exampleApp")) {
//   ReactDOM.render(<App />, document.getElementById("exampleApp"));
// }
// we have App.js passing the App() function and this App is called in index.js above

// here at App.js where can see here <Space/>, call the component inside
