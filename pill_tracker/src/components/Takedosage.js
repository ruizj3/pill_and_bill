import React from 'react'
import {Link} from 'react-router-dom'


const Takedosage = (props) => {

  const takedosage = props.takedosages.filter(takedosage => takedosage.id === props.match.params.id)[0]

  return (
    <div>
      <li>
        Takedosage_ID: {takedosage ? takedosage.id : null}
      </li>
      <li>
        Prescription Number: <Link to={`/prescriptions/${takedosage ? takedosage.attributes.prescription_id : null}`}>{takedosage ? takedosage.attributes.prescription_id : null}</Link>
      </li>
      <li>
        Date Taken: {takedosage ? takedosage.attributes.datetaken : null}
      </li>

    </div>
  )
}

export default Takedosage
