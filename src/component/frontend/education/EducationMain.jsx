import React from 'react'
import EducationCard from './EducationCard'

function EducationMain() {
  return (
    <section id="education">
        <h2>🎓 Education</h2>
        <div class="card-container">
            <EducationCard name="Belarusian State University" faculity="Faculty of Radiophysics and Computer Technologies" departmen="Bachelor in Computer Security" graduated="2024"/>
        </div>
    </section>
  )
}

export default EducationMain
