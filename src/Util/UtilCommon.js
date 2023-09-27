window.addEventListener('load', () => {
  //Item Observe
  function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  const addEventToEl = (elList) => {
    document.addEventListener('scroll', () => {
      elList.forEach(el => {
        if (isElementInViewport(el)) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      })
    })
  }
  if (document.querySelectorAll('.experience-clist-item').length > 0) {
    let boxElList = document.querySelectorAll('.experience-clist-item');
    addEventToEl(boxElList);
  }
  

  if (document.querySelectorAll('.experience-clist-item-project').length > 0) {
    //Hover Func
    let boxItemProject = document.querySelectorAll('.experience-clist-item-project');
    boxItemProject.forEach((item, idx) => {
      item.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
      });
      item.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hover');
      });
    });
  }
  

  function ReStart() {
    let boxElList = document.querySelectorAll('.experience-clist-item');
    addEventToEl(boxElList);

    //Hover Func
    let boxItemProject = document.querySelectorAll('.experience-clist-item-project');
    boxItemProject.forEach((item, idx) => {
      item.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
      });
      item.addEventListener('mouseout', (e) => {
        e.target.classList.remove('hover');
      });
    });
  }

  if (document.querySelectorAll('.leadmoreBtn').length > 0) {
    let leadmoreBt = document.querySelector('.leadmoreBtn');
    let expeEle = document.querySelector('.experience-clist-inner');

    leadmoreBt.addEventListener('click', (e) => {
      leadmoreBt.remove();

      let portTit = [
        '유성한가족병원', '대원산업', '명신메디칼', '오픈엠',
        'BMST', '블랑호텔', 'E&E Chem', 'Duta Technology'
      ]

      for (let i=8; i<16; i++) {
        let createEle = document.createElement('div');
        createEle.classList.add('experience-clist-item');
        createEle.innerHTML = `<div class="experience-clist-item-wrapper">
          <a href="/portpolio/project?num=${i}"} class='experience-clist-item-project'>
            <img src=${require('../image/project/projdoor/exper_0' + i + '.webp')} alt="" class='polioImg'/>
            <img src=${require('../image/exper_bg0' + ((i % 4) + 1) + '.webp')} alt="" class='polioBackImg'/>
          </a>
        </div>
        <div class="experience-clist-item-titlebox">
          <div class="experience-clist-item-tag">
            <div class="experience-clist-item-tagList">
              <img src=${require('../image/taglogo_00.png')} alt="" />
              <p class='experience-clist-item-tagTxt'>HTML</p>
            </div>
            <div class="experience-clist-item-tagList">
              <img src=${require('../image/taglogo_01.png')} alt="" />
              <p class='experience-clist-item-tagTxt'>CSS</p>
            </div>
            <div class="experience-clist-item-tagList">
              <img src=${require('../image/taglogo_02.png')} alt="" />
              <p class='experience-clist-item-tagTxt'>JavaScript</p>
            </div>
          </div>
          <div class="experience-clist-item-title">
            <h3>${portTit[i-8]}</h3>
          </div>
        </div>`;

        expeEle.appendChild(createEle);
      }

      ReStart();
    });
  }
  
  if (document.querySelectorAll('.mobile_section-title').length > 0) {
    let aniTxt = document.querySelector('.mobile_section-title');

    window.addEventListener('scroll', (e) => {
      let scrollNum = document.querySelector('html').scrollTop;
      let transNum = -100 + (scrollNum / 10);

      if (-100 <= transNum && transNum <= -50) {
        aniTxt.style.transform = `translate3d(${transNum}%, -50%, 0px)`;
      }
    });
  }

  if (document.querySelectorAll('.mobilemenu-btn').length > 0) {
    let mobileBtn = document.querySelector('.mobilemenu-btn');
    let mobileNav = document.querySelector('.mobile-nav');
    let eleHtml = document.querySelector('html');
    let mobileflexwrap = document.querySelector('.mobile-flexwrap');

    mobileBtn.addEventListener('click', (e) => {
      if (mobileBtn.classList.contains('off')) {
        mobileBtn.classList.replace('off', 'on');
        mobileNav.style.display = 'block';
        setTimeout(() => {
          mobileNav.classList.replace('off', 'on');
        }, 100);
        eleHtml.classList.remove('menuOpen');
        eleHtml.classList.add('menuOn');
      } else {
        mobileBtn.classList.replace('on', 'off');
        mobileNav.classList.replace('on', 'off');
        setTimeout(() => {
          mobileNav.style.display = 'none';
        }, 700);
        eleHtml.classList.remove('menuOn');
        eleHtml.classList.add('menuOff');
      }
    });

    mobileflexwrap.addEventListener('click', (e) => {
      if (e.target.classList.contains('mobile-btn')) {
        mobileBtn.classList.replace('on', 'off');
        mobileNav.classList.replace('on', 'off');
        setTimeout(() => {
          mobileNav.style.display = 'none';
        }, 700);
        eleHtml.classList.remove('menuOn');
        eleHtml.classList.add('menuOff');
      }
    });
  }
});