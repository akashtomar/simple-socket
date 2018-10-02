import React, { Component } from "react";
import ReactDOM from "react-dom";

class HelloWorld extends Component {
    constructor(){
        super();
        this.state = {
            msg : "hello world"
        }
    }
    changeMsg(msg){
        this.setState({ msg });
    }
    render(){
        console.log("rendered!");
        return(<div>
            <h1>Hello World!</h1>
            <button onClick={() => this.changeMsg("hi!")}>Hello there</button>
        </div>)
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById("helloWorld"));
export default HelloWorld;