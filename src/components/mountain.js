import React from 'react';
import { Link } from 'react-router-dom';
import db from '../db.json';

export default function Mountain({ name, ...rest }) {
  return (
    <div className={`mountain ${name}`} {...rest}>
      <img src={`/img/${name}/${name}.png`} alt='mountain' />
      <span>
        <Link to={`/mountain/${name}`}>{db[name].name}</Link>
      </span>
    </div>
  );
}
