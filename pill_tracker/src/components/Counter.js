import React from 'react'
import {Link} from 'react-router-dom'


class Counter extends React.Component {

  state = {
    counter: 0,
    counting: true
  }

  componentDidMount() {

    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      }
      )
    }, 1000)
  }

  handlePause = (event) => {
    clearInterval(this.interval)
    this.setState({
      counting: false
    })
  }

  handleResume = (event) => {
    this.setState({counting: true}, () => {
      this.interval = setInterval(() => {
        this.setState((state) => {
          return {counter: state.counter + 1}
        })
      }, 1000)
    })
  }


  render() {

  return (

    <div>
      {this.state.counter}
      {this.state.counting ?
        <button onClick={this.handlePause}>Pause</button>
        :
        <button onClick={this.handleResume}>Resume</button>
      }
    </div>
  )
 }
}
export default Counter
