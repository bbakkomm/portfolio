import React from 'react';

export default function Experience() {
  let proName = [
    'LG ThinQ App', 'LG Cotent Store', 'LG Seller Lounge', '이화수 전통 육개장', 
    '김형제 고기의 철학', '국제의과 과학아카데미', '여수 요양병원', '대전광역시립 노인병원'
  ]
  
  let itemArr = [];

  const experItemFunc = () => {
    for (let i=0; i<8; i++) {
      itemArr.push(
        <div key={`expe${i}`} className="experience-clist-item">
          <div className="experience-clist-item-wrapper">
            <a href={`/portpolio/project?num=${i}`} className='experience-clist-item-project'>
              <img src={require(`../image/project/projdoor/exper_0${i}.webp`)} alt="" className='polioImg'/>
              <img src={require(`../image/exper_bg0${(i % 4) + 1}.webp`)} alt="" className='polioBackImg'/>
            </a>
          </div>
          <div className="experience-clist-item-titlebox">
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
              { i === 0 ? <div className="experience-clist-item-tagList"><img src={require(`../image/taglogo_03.png`)} alt="" /><p className='experience-clist-item-tagTxt'>React</p></div> : ''}
            </div>
            <div className="experience-clist-item-title">
              <h3>{proName[i]}</h3>
            </div>
          </div>
        </div>
      )
    }
    return itemArr;
  }
  
  return (
    <>
      <div className="experience-container">
        <div className="experience-cfilter"></div>
        <div className="experience-cbody">
          <div className="experience-clist-inner">
            {experItemFunc()}
          </div>
          <div className="experience-clist-leadmore">
            <button className='leadmoreBtn'>
              <div className='leadmoreTxt'>Lead More</div>
              <div className="leadmoreSvg">
                <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#fff"></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}