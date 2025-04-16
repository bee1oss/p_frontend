import React from 'react'
import Paragraph from '../../components/paragraph/Paragraph.jsx';
import Header2 from '../../components/h2/Header2.jsx';

function AboutMe(props) {
  
  return (
    <section id="about">
      <Header2>{props.title}</Header2>
      <Paragraph>{props.description}</Paragraph>
      </section>
  )
}

export default AboutMe