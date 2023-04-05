import React from 'react';
import css from './Section.module.css';

function Section({ title, children }) {
  return (
    <>
      <h2 className={css.titel}>{title}</h2>
      {children}
    </>
  );
}

export default Section;
