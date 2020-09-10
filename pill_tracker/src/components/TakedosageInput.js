import React from 'react'
import {connect} from 'react-redux'
import {addTakedosage} from '../actions/addTakedosage'



class TakedosageInput extends React.Component {

  state = {
    datetaken: this.props.history.location.state.datetaken,
    prescription_id: this.props.history.location.state.prescription_id
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTakedosage(this.state)
    this.setState({
      datetaken: '',
      prescription_id: ''
    })
    window.location.reload(false)
    window.location.replace(`http://localhost:3001/prescriptions`)
  }

  render() {

    return (
      <div>
      Confirm Submission Below:
        <form onSubmit={this.handleSubmit}>
          <label>Prescription ID: </label>
          <input type='text' placeholder='Prescription_ID' value={this.state.prescription_id} name="prescription_id" onChange={this.handleChange}/><br/>
          <label>Date Taken: </label>
          <input type='text' placeholder='Date Taken' value={this.state.datetaken} name="datetaken" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>

    )
  }
}


export default connect(null, {addTakedosage})(TakedosageInput)
