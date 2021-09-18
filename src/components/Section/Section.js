import React from 'react';
import './Section.css';

function Section(props) {
  return <div className='section'>{props.children}</div>;
}

export function SectionTitle(props) {
  return <div className='section-title'>{props.children}</div>;
}

export function SectionBody(props) {
  return <div className='section__body'>{props.children}</div>;
}

export default Section;
