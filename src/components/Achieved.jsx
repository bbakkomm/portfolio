import React from 'react';

export default function Achieved() {
  return (
    <>
      <div className="achieved-inner-wrap trust-sec">
        <div className="mobile_section-title" will-change="transform">Trusted By</div>
        <p className='achieved-contents-smalltxt'>PROJECTS EXPERIENCED</p>
        <div className="nav-Line"></div>
      </div>
      <div className="achieved-inner-wrap brand-sec">
        <div className="brand-logo-container">
          <div className="brand-logo-list">
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo14.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo15.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo17.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo03.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo02.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo09.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo10.png`)} alt="" className="brand-logo-img" />
            </div>
            {/* <div className="brand-logo-item">
              <img src={require(`../image/bis_logo01.png`)} alt="" className="brand-logo-img" />
            </div> */}
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo04.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo05.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo06.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo07.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo08.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo11.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo12.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo13.png`)} alt="" className="brand-logo-img" />
            </div>
            <div className="brand-logo-item">
              <img src={require(`../image/bis_logo16.png`)} alt="" className="brand-logo-img" />
            </div>
          </div>
        </div>
        <div className="nav-Line"></div>
      </div>
      <div className="achieved-inner-wrap footachieved-sec">
        <p className='footachieved-smallTxt'>I worked on projects for the following companies</p>
        <img src={require("../image/nlogo.png")} alt="메인로고" />
      </div>
    </>
  );
}