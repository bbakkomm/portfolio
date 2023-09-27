import React from 'react';

export default function Portfolio() {
  const location = window.location.search;
  const searchParams = Number(location.split('=')[1]);
  const projectName = [
    'LG ThinQ App', 'LG Cotent Store', 'LG Seller Lounge', '이화수 전통 육개장', 
    '김형제 고기의 철학', '국제의과 과학아카데미', '여수 요양병원', '대전광역시립 노인병원', 
    '유성한가족병원', '대원산업', '명신메디칼', '오픈엠',
    'BMST', '블랑호텔', 'E&E Chem', 'Duta Technology'
  ];
  const projectUrl = [
    "", "https://kr.lgappstv.com/", "https://seller.lgappstv.com/", "http://ihwasoo.com/", 
    "http://kimbro.co.kr/", "https://www.imsacademy.net/", "http://www.newstart.co.kr/", "http://www.ilovenoin.com/", 
    "http://www.han.or.kr/", "http://daewonic.com/", "http://www.msmedi.com/", "http://openm.com/",
    "http://www.bmst.co.kr/", "http://xn--9i2bm7jdtd81ei0rv2g.kr/", "http://www.enechems.com/", "http://www.duta-rnd.com/"
  ]

  let captureNum = [
    5,1,1,1,1,
    1,1,1,1,1,
    1,1,1,1,1,
    1
  ]

  let portArr = [];

  const portItemFunc = () => {
    for (let i=0; i<=captureNum[searchParams]; i++) {
      portArr.push(
        <div key={`port-${searchParams}_${i}`} className="projectContents-bitem">
          <div className="projectContents-bitemWrap">
            <img src={require(`../image/project/capture0${searchParams}_0${i}.webp`)} alt="" />
          </div>
        </div>
      )
    }
    return portArr;
  }

  window.addEventListener('load', () => {
    if (document.querySelectorAll('.project-outLink').length > 0) {
      let linkAdd = document.querySelector('.project-outLink');
      
      if (searchParams === 0) {
        linkAdd.remove();
      } else {
        linkAdd.href = projectUrl[searchParams];
      }
    }
  });
  
  return (
    <>
      <div id='projectContents' className="projectContents-container">
        <div className="global-marginwrap">
          <div className="projectContents-header">
            <div className="projectContents-hItem hleft">
              <strong className='projectContents-titleTxt'>{projectName[searchParams]}</strong>
            </div>
            <div className="projectContents-hItem hright">
              <a href='/' className='project-outLink' target='_blank'>
                <p>Open live website</p>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M14 15.6569V10M14 10H8.34315M14 10L5.63604 18.364M10.2432 20.8278C13.0904 21.3917 16.1575 20.5704 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C3.42957 7.84251 2.60828 10.9096 3.17216 13.7568" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
              </a>
              <div className="experience-clist-item-tag">
                <div className="experience-clist-item-tagList">
                  <img src={require(`../image/taglogo_00.png`)} alt="" />
                  <p className='experience-clist-item-tagTxt'>HTML</p>
                </div>
                <div className="experience-clist-item-tagList">
                  <img src={require(`../image/taglogo_01.png`)} alt="" />
                  <p className='experience-clist-item-tagTxt'>CSS</p>
                </div>
                <div className="experience-clist-item-tagList">
                  <img src={require(`../image/taglogo_02.png`)} alt="" />
                  <p className='experience-clist-item-tagTxt'>JavaScript</p>
                </div>
                { searchParams === 0 ? <div className="experience-clist-item-tagList"><img src={require(`../image/taglogo_03.png`)} alt="" /><p className='experience-clist-item-tagTxt'>React</p></div> : ''}
              </div>
            </div>
          </div>
          <div className="projectContents-body type-0">
            {portItemFunc()}
          </div>
        </div>
        <div className="nav-Line"></div>
      </div>
    </>
  );
}