import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import { fetchTakedosages } from '../actions/fetchTakedosages';
import Takedosages from '../components/Takedosages';
import Takedosage from '../components/Takedosage';
import TakedosageInput from '../components/TakedosageInput';

function TakedosagesContainer() {
  const dispatch = useDispatch();
  const takedosages = useSelector(state => state.takedosagesRed.takedosages);

  useEffect(() => {
    dispatch(fetchTakedosages());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/takedosages/new' element={<TakedosageInput />} />
        <Route path='/takedosages/:id' element={<Takedosage takedosages={takedosages} />}/>
        <Route path='/takedosages' element={<Takedosages takedosages={takedosages} />}/>
      </Routes>
    </div>
  );
}

export default TakedosagesContainer;
