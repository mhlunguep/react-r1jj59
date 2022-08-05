import React from 'react';
import { Header } from './Header';
import Counter from './Counter';

export default function () {
  let clock = Date().toLocaleString();

  const country = 'SOUTH AFRICA';
  return (
    <>
      <Header name={country} />
      <h2 className="blue">Phumlani Mhlungu</h2>
      <p>A Full Stack Developer</p>
      <hr />
      <p>{clock}</p>
      <Counter />
    </>
  );
}
