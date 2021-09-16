import React, { useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import db from '../db.json';

export default function MountainPage() {
  const history = useHistory();
  const { name } = useParams();
  const img = useRef();
  const [active, setActive] = useState(1);
  const [full, setFull] = useState(false);

  return (
    <div className='flex'>
      <div className='mountain-image' ref={img}>
        <img src={`/img/${name}/${active}.png`} alt='mountain' />
        <div className='nav'>
          <div className='back' onClick={() => history.push('/')}>
            <svg
              width='29'
              height='32'
              viewBox='0 0 29 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27 2.9417L3.12583 16L27 29.0583L27 2.9417Z'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='radio'>
            <span
              className={`${active === 1 ? 'active' : ''}`}
              onClick={() => setActive(1)}
            />
            <span
              className={`${active === 2 ? 'active' : ''}`}
              onClick={() => setActive(2)}
            />
            <span
              className={`${active === 3 ? 'active' : ''}`}
              onClick={() => setActive(3)}
            />
          </div>
          <div className='fullscreen' onClick={() => setFull((prev) => !prev)}>
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.0083 3H26.1882V13.1799'
                stroke='white'
                strokeWidth='6'
                strokeLinejoin='round'
              />
              <path
                d='M13.1799 3H3.00006V13.1799'
                stroke='white'
                strokeWidth='6'
                strokeLinejoin='round'
              />
              <path
                d='M16.0081 26.1875L26.1879 26.1875L26.1879 16.0076'
                stroke='white'
                strokeWidth='6'
                strokeLinejoin='round'
              />
              <path
                d='M13.1797 26.1875L2.99981 26.1875L2.99981 16.0076'
                stroke='white'
                strokeWidth='6'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
      {!full && (
        <div className='mountain-info'>
          <h1>{db[name].name}</h1>
          <div className='text'>
            {db[name].paragraphs.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <div className='icons'>
            <svg
              height='40'
              viewBox='0 0 561 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.8333 0L38.8754 30H2.79113L20.8333 0Z'
                fill='#87BDBA'
              />
              <path
                d='M33.9283 6.85713L47.8465 30H20.0101L33.9283 6.85713Z'
                fill='#87BDBA'
              />
              <path
                d='M77.5594 29L93.8333 1.94032L110.107 29H77.5594Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M94.7784 29L106.928 8.79745L119.078 29H94.7784Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M223.559 29L239.833 1.94032L256.107 29H223.559Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M240.778 29L252.928 8.79745L265.078 29H240.778Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M442.559 29L458.833 1.94032L475.107 29H442.559Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M459.778 29L471.928 8.79745L484.078 29H459.778Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M150.559 29L166.833 1.94032L183.107 29H150.559Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M167.778 29L179.928 8.79745L192.078 29H167.778Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M369.559 29L385.833 1.94032L402.107 29H369.559Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M386.778 29L398.928 8.79745L411.078 29H386.778Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M296.559 29L312.833 1.94032L329.107 29H296.559Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M313.778 29L325.928 8.79745L338.078 29H313.778Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M515.559 29L531.833 1.94032L548.107 29H515.559Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
              <path
                d='M532.778 29L544.928 8.79745L557.078 29H532.778Z'
                stroke='#87BDBA'
                strokeWidth='2'
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
