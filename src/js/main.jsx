import React from "react";
import ReactDOM from "react-dom";
import Autocomplete from "./autocomplete.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
          <div>
            <Autocomplete />
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
