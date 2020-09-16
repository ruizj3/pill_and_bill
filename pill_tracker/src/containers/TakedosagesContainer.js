import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchTakedosages} from '../actions/fetchTakedosages'
import Takedosages from '../components/Takedosages'
import Takedosage from '../components/Takedosage'
import TakedosageInput from '../components/TakedosageInput'

class TakedosagesContainer extends React.Component {


  componentDidMount() {
    Promise.all([
    this.props.fetchTakedosages()])
  }


  render() {
      return (
          <div>


            <Switch>
              <Route path='/takedosages/new' component={TakedosageInput}/>
              <Route path='/takedosages/:id' render={(routerProps) => <Takedosage {...routerProps} takedosages={this.props.takedosages}/>}/>
              <Route path='/takedosages' render={(routerProps) => <Takedosages {...routerProps} takedosages={this.props.takedosages}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    takedosages: state.takedosageReducer.takedosages
  }
}

export default connect(mapStateToProps, {fetchTakedosages})(TakedosagesContainer)
