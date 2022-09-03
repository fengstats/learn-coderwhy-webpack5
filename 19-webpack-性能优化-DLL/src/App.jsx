import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'Hello React Test',
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

export default App
