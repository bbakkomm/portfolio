import React from 'react';

export default function Header() {
  const hlocation = window.location.search;
  const hsearchParams = Number(hlocation.split('=')[1]);
  
  window.addEventListener('load', () => {
    if (document.querySelectorAll('.nav-Btn.WorksBtn').length > 0) {
      let workBtn = document.querySelector('.nav-Btn.WorksBtn');

      if (isNaN(hsearchParams)) {
        workBtn.href = '#experience';
      } else {
        workBtn.href = '/';
      }
    }
  });
  

  function alertEvent(event) {
    event.preventDefault();
    alert('준비중입니다.');
  }

  return (
    <header className='global-Header'>
      <div className="custom-sizewrap">
        <div className='global-headerWrap'>
          <a href="/" className="header-Icon global-hd-li">
            <img src={require("../image/nlogo.png")} alt="메인로고" />
          </a>
          <nav className="global-HeaderNav global-hd-li">
            <div className="global-FlexBtnbox">
              <div className="nav-Btnbox">
                <a href="#experience" className="nav-Btn WorksBtn">Works</a>
              </div>
              <div className="nav-Btnbox">
                <a href="/" onClick={alertEvent} className="nav-Btn">About Me</a>
              </div>
              <div className="nav-Btnbox">
                <a href="/" onClick={alertEvent} className="nav-Btn">Career Description</a>
              </div>
            </div>
          </nav>
          <div className="header-Info global-hd-li">
            <div className="global-FlexBtnbox">
              <div className="nav-Btnbox">
                <a href="#achieved" className="nav-Btn bright">
                  <p>Get started</p>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-LineBgbox">
          <div className="nav-Line"></div>
        </div>
      </div>
    </header>
  );
}