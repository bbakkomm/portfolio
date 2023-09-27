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
          <a href='#achieved' className="main-sec-buttonbox">
            <div className='anchor-behavior anchor-wBtn'>
              <p>프로젝트 바로가기</p>
              <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_410_326)">
                <path d="M1.00042 6.99805C0.448134 6.99782 0.000231226 7.44534 1.04678e-07 7.99763C-0.000231017 8.54991 0.447297 8.99782 0.999582 8.99805L1.00042 6.99805ZM15.7068 8.71131C16.0975 8.32095 16.0978 7.68778 15.7074 7.29709L9.34611 0.930471C8.95574 0.539784 8.32258 0.539519 7.93189 0.929879C7.5412 1.32024 7.54094 1.95341 7.9313 2.34409L13.5858 8.00331L7.92657 13.6578C7.53588 14.0482 7.53561 14.6813 7.92597 15.072C8.31633 15.4627 8.9495 15.463 9.34019 15.0726L15.7068 8.71131ZM0.999582 8.99805L14.9996 9.00391L15.0004 7.00391L1.00042 6.99805L0.999582 8.99805Z" fill="currentcolor"></path>
                </g>
                <defs>
                <clipPath id="clip0_410_326">
                <rect width="16" height="16" fill="#000"></rect>
                </clipPath>
                </defs>
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
              <p className='experience-hboxContentsTxt'>아래 프로젝트들은 정규직/프리랜서 재직 중 참여한 내용입니다. 초기 마크업 및 인터랙션 설계 및 구축을 담당하였으며 안드로이드, 아이폰 디바이스 반응형으로 제작했습니다.</p>
              <p className='experience-hboxContentsTxt'>또한, 로딩 속도 개선, 반응성을 고려하여 JavaScript 최적화 경험이 있고 앱의 경우에는 TalkBack, ScreenReader 접근성 Aria를 이용하여 반영했습니다.</p>
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