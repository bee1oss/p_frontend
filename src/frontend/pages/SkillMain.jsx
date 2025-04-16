import React,{useEffect} from 'react'
import SkilCard from '../layouts/SkilCard.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSkills } from '../../redux/slices/Skill.js';

function SkillMain() {
  const dispatch = useDispatch();

  const skills = useSelector((state) => state.skills.skills);
  
  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);
  return (
    <section id="skills">
      <h2>Languages & Technologies</h2>
      {
        skills.items.length === 0 ? (
          <p>Loading...</p> // veya spinner, loading animasyonu
        ) : (
          skills.items.map((obj) => (
            <SkilCard
              key={obj._id}
              title={obj.title}
              description={obj.description}
            />
          ))
        )
      }
    </section>
  )
}

export default SkillMain
