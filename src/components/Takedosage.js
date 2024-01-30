import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Takedosage = ({ takedosages }) => {
  const { id } = useParams();
  const takedosage = takedosages.find(td => td.id === id);

  return (
    <div>
      <ul>
        <li>
          Takedosage_ID: {takedosage ? takedosage.id : 'Not Found'}
        </li>
        {takedosage && (
          <>
            <li>
              Prescription Number: <Link to={`/prescriptions/prescriptions/${takedosage.attributes.prescription_id}`}>{takedosage.attributes.prescription_id}</Link>
            </li>
            <li>
              Date Taken: {takedosage.attributes.datetaken}
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Takedosage;
