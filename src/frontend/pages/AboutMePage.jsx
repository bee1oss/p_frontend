import React, { useEffect } from 'react';
import AboutMe from '../layouts/AboutMe';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAbouts } from '../../redux/slices/Abouts';

function AboutMePage() {
  const dispatch = useDispatch();
  const abouts = useSelector((state) => state.abouts.abouts);

  useEffect(() => {
    dispatch(fetchAbouts());
  }, [dispatch]);

  return (
    <div>
      {
        abouts.items.length === 0 ? (
          <p>Loading...</p> // Yükleniyor mesajı veya animasyon
        ) : (
          abouts.items.map((obj) => (
            <AboutMe
              key={obj._id}
              title={obj.title_aboutme}
              description={obj.description_aboutme}
            />
          ))
        )
      }
    </div>
  );
}

export default AboutMePage;
