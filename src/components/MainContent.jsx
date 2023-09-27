import React from 'react';
import GridTil from './GridTil';
import Cube from './Cube';
import Achieved from './Achieved';
import Experience from './Experience';
import Protools from './Protools';
import '../Util/UtilCommon.js';

export default function MainContent() {
  return (
    <main className='main-section'>
      <section className="section-main">
        <div className='section-main-contents'>
          <p className='main-contents-bigtxt'>FrontEnd Developer<br/>Web Publisher</p>
          <p className='main-contents-smalltxt'>웹 퍼블리셔로 시작하여, 현재는 프론트엔드 직무를 <br/>메인으로 일하고 있는 박성훈입니다.</p>
          <a href='#works' className="main-sec-buttonbox">
            <div className='anchor-behavior anchor-wBtn'>
              <p>프로젝트 바로가기</p>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </svg>
            </div>
            <div className='anchor-behavior-under'></div>
          </a>
          <div className="main-cube-wrapper">
            <Cube />
          </div>
        </div>
        <div className="grid-colbox">
          <div className="background-grid_wrapper">
            <div className="background-grid_boxwrapper">
              <div className="background-grid_boxoverlay"></div>
              <GridTil />
            </div>
          </div>
          <div className="nav-Line"></div>
        </div>
        <div className="grid-colbgwrap"></div>
      </section>
      <section id='achieved' className="achieved-list list-contents">
        <Achieved />
      </section>
      <section id='experience' className="experience-section list-contents">
        <div className="global-marginwrap">
          <div className="experience-header">
            <div className="experience-hbox hbox-left">
              <h2 className='experience-hboxTitle'>
                <span>EXPERIENCE</span><br/>
                <span>PROJECTS</span>
              </h2>
            </div>
            <div className="experience-hbox hbox-right">
              <p className='experience-hboxContentsTxt'>With years of experience, we have had the opportunity to work on a wide range of projects for clients from all over the world, from building custom websites to developing complex web applications in Webflow. Explore our portfolio to see some of our most recent works and learn more about our experience and capabilities.</p>
            </div>
          </div>
          <Experience />
        </div>
        <div className="nav-Line"></div>
      </section>
      <section id='protools' className="protools-section list-contents">
        <Protools />
        <div className="nav-Line"></div>
      </section>
    </main>
  );
}