import React from 'react'
import {connect} from 'react-redux'
import {addMedication} from '../actions/addMedication'

class MedicationInput extends React.Component {

  state = {
    name: '',
    priceperpill: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMedication(this.state)
    this.setState({
      name: '',
      priceperpill: ''
    })
    window.location.reload(false)
    window.location.replace(`http://localhost:3001/medications`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Medication Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Price Per Pill: </label>
          <input type='text' placeholder='PricePerPill' value={this.state.priceperpill} name="priceperpill" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
        
      </div>
    )
  }
}


export default connect(null, {addMedication})(MedicationInput)
