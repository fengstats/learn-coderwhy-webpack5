import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'Hello World'
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
