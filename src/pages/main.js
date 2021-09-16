import React from 'react';
import Mountain from '../components/mountain';
import back from '../back.png';

export default function Main() {
  return (
    <div className='background'>
      <img src={back} alt='map' />
      <Mountain name='lavochor' />
      <Mountain name='chasnochor' />
      <Mountain name='kukisvumchor' />
      <Mountain name='udichvumchor' />
      <Mountain name='fersmana' />
      <Mountain name='tahtarvumchor' />
      <Mountain name='vudiavrchor' />
      <Mountain name='aikuaivenchor' />
    </div>
  );
}
