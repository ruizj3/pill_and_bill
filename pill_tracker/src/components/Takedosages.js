import React from 'react';
import { Link } from 'react-router-dom';

const Takedosages = ({ takedosages }) => {
  return (
    <div>
      <ul>
        {takedosages.map(takedosage => (
          <li key={takedosage.id}>
            Take Dosage ID: - <Link to={`/takedosages/${takedosage.id}`}>{takedosage.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Takedosages;
