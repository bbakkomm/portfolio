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
          <nav role="navigation" className="global-HeaderNav global-hd-li">
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
          <nav role="navigation" className="mobile-nav off">
            <div className="mobile-wrapper">
              <div className="mobile-flexwrap">
                <a href="#experience" className='mobile-btn'>
                  <p>Works</p>
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
                </a>
                <a href="/" onClick={alertEvent} className='mobile-btn'>
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
                </a>
                <a href="/" onClick={alertEvent} className='mobile-btn'>
                  <p>Career Description</p>
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
                </a>
              </div>
            </div>
          </nav>
          <div className="mobilemenu-btn off">
            <div className="mobilemenu-btnwrap">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
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