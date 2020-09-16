import React from 'react'
import {Link} from 'react-router-dom'

const Takedosages = props => {

  return (

    <div>
    {props.takedosages.map(takedosage =>
      <li key={takedosage.id}>
        Take Dosage ID: - <Link to={`/takedosages/${takedosage.id}`}>{takedosage.id}</Link>
      </li> )}
    </div>


  )
}

export default Takedosages
