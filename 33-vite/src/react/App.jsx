import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello react',
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
