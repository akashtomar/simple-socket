import React, { Component } from "react";
import ReactDOM from "react-dom";

const io = require("socket.io-client");

class App extends Component {
    constructor(){
        super()
        this.state ={
            endpoint: "http://192.168.0.103:3000",
            color: "white"
        }
    }
    send(){
        const socket = io.connect(this.state.endpoint);
        socket.emit("change color", this.state.color);
    }
    setColor(color){
        this.setState({ color })
    }
    render(){
        const socket = io.connect(this.state.endpoint)
        socket.on('change color', (color) => {
            // setting the color of our button
            document.body.style.backgroundColor = color
      })
      return(
          <div style={{ textAlign: "center"}}>
            <button onClick={ () => this.send() }> change color</button>
            <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
            <button id="red" onClick={() => this.setColor('red')}>Red</button>
          </div>
      )
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));

export default App;