import React from 'react';

export default function GridTil() {
  // grid
  let bgGridCount = 195;

  const bgGridFunc = () => {
    let arr = [];
    for (let i=0; i<=bgGridCount; i++) {
      arr.push(
        <div key={i} className="background-grid_box"></div>
      )
    }

    return arr;
  }

  return (
    <>
      {bgGridFunc()}
    </>
  );
}