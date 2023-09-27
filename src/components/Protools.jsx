import React from 'react';

export default function Protools() {
  let ddd1 = ['tool_logo01', 'tool_logo02', 'tool_logo03', 'tool_logo04', 'tool_logo05', 'tool_logo06'];
  let ddd2 = ['tool_logo07', 'tool_logo08', 'tool_logo09', 'tool_logo10', 'tool_logo11', 'tool_logo01'];
  let ddd3 = ['tool_logo02', 'tool_logo03', 'tool_logo04', 'tool_logo05', 'tool_logo06', 'tool_logo07'];
  let ddd4 = ['tool_logo08', 'tool_logo09', 'tool_logo10', 'tool_logo11', 'tool_logo01', 'tool_logo02'];

  const dddFunc1 = () => {
    let dddArr = [];

    for (let i=0; i<ddd1.length; i++) {
      dddArr.push(
        <div key={`tool_` + i} className="protools-tool-item">
          <img src={require(`../image/${ddd1[i]}.png`)} alt="" />
        </div>
      )
      if (i !== ddd1.length-1) {
        dddArr.push(
          <div key={`tooldot_` + i} className="protools-tool-dot"></div>
        )
      }
    }

    return dddArr;
  }
  const dddFunc2 = () => {
    let dddArr = [];

    for (let i=0; i<ddd2.length; i++) {
      dddArr.push(
        <div key={`tool_` + i} className="protools-tool-item">
          <img src={require(`../image/${ddd2[i]}.png`)} alt="" />
        </div>
      )
      if (i !== ddd2.length-1) {
        dddArr.push(
          <div key={`tooldot_` + i} className="protools-tool-dot"></div>
        )
      }
    }

    return dddArr;
  }
  const dddFunc3 = () => {
    let dddArr = [];

    for (let i=0; i<ddd3.length; i++) {
      dddArr.push(
        <div key={`tool_` + i} className="protools-tool-item">
          <img src={require(`../image/${ddd3[i]}.png`)} alt="" />
        </div>
      )
      if (i !== ddd3.length-1) {
        dddArr.push(
          <div key={`tooldot_` + i} className="protools-tool-dot"></div>
        )
      }
    }

    return dddArr;
  }
  const dddFunc4 = () => {
    let dddArr = [];

    for (let i=0; i<ddd4.length; i++) {
      dddArr.push(
        <div key={`tool_` + i} className="protools-tool-item">
          <img src={require(`../image/${ddd4[i]}.png`)} alt="" />
        </div>
      )
      if (i !== ddd4.length-1) {
        dddArr.push(
          <div key={`tooldot_` + i} className="protools-tool-dot"></div>
        )
      }
    }

    return dddArr;
  }
  
  function protomouse(event) {
    let proSec = document.querySelector('.protools-section');
    let protoolsSec = proSec.querySelector('.protools-tool-contents');

    protoolsSec.style.cssText  = `transform: translate3d(${((proSec.clientWidth / 2) - event.clientX) / 100}%, 
    ${((proSec.clientHeight / 2) - event.clientY) / 50}%, 0px) scale3d(1, 1, 1) 
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); 
    transform-style: preserve-3d; 
    will-change: transform;`;
  }

  function alertEvent(event) {
    event.preventDefault();
    alert('준비중입니다.');
  }

  window.addEventListener('load', () => {
    let mainSectiontool = document.querySelector('.protools-section');
    mainSectiontool.addEventListener('mousemove', protomouse);
  });

  return (
    <>
      <div className='protools-sec-contents'>
        <div className="global-marginwrap">
          <p className='main-contents-bigtxt'>EXPERIENCE WITH VARIOUS<br/>SOFTWARE AND TOOLS</p>
          <p className='main-contents-smalltxt'>다양한 소프트웨어 및 솔루션과 툴들을 경험하였으며,<br/>능숙하게 다루기 위해 노력하고 있습니다.</p>
          <a href='/' onClick={alertEvent} className="main-sec-buttonbox">
            <div className='anchor-behavior anchor-wBtn'>
              <p>About Me</p>
              <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_410_326)">
                <path d="M1.00042 6.99805C0.448134 6.99782 0.000231226 7.44534 1.04678e-07 7.99763C-0.000231017 8.54991 0.447297 8.99782 0.999582 8.99805L1.00042 6.99805ZM15.7068 8.71131C16.0975 8.32095 16.0978 7.68778 15.7074 7.29709L9.34611 0.930471C8.95574 0.539784 8.32258 0.539519 7.93189 0.929879C7.5412 1.32024 7.54094 1.95341 7.9313 2.34409L13.5858 8.00331L7.92657 13.6578C7.53588 14.0482 7.53561 14.6813 7.92597 15.072C8.31633 15.4627 8.9495 15.463 9.34019 15.0726L15.7068 8.71131ZM0.999582 8.99805L14.9996 9.00391L15.0004 7.00391L1.00042 6.99805L0.999582 8.99805Z" fill="currentcolor"></path>
                </g>
                <defs>
                <clipPath id="clip0_410_326">
                <rect width="16" height="16" fill="white"></rect>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div className='anchor-behavior-under'></div>
          </a>
        </div>
      </div>
      <div className="protools-tool-contents">
        <div className="protools-tool-box tool-box1">
          {dddFunc1()}
        </div>
        <div className="protools-tool-box tool-box2">
          {dddFunc2()}
        </div>
        <div className="protools-tool-box tool-box3">
          {dddFunc3()}
        </div>
        <div className="protools-tool-box tool-box4">
          {dddFunc4()}
        </div>
      </div>
    </>
  );
}