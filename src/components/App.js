import React, { Component }from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ws: new WebSocket('ws://localhost/ws/A')
    }
  }
  handleData(data) {
    console.log(data);
  }
  setupWebsocket() {
    let ws = this.state.ws;
    ws.onopen = () => {
      console.log('Websocket connected');
    };
    ws.onmessage = (evt) => {
      this.handleData(evt.data);
    };
    ws.onclose = () => {
      console.log('Websocket disconnected');
      if (this.props.reconnect) {
        setTimeout(() => {
          this.setState({attempts: this.state.attempts++});
          this.setupWebsocket();
        }, 2000);
      }
    }
  }
  componentDidMount() {
    this.setupWebsocket();
  }
  componentWillUnmount() {
    let ws = this.state.ws;
    ws.close();
  }
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <h3>Node.js express express-ws React, Webpack with ES6</h3>
      </div>
    );
  }
}

export default App;
