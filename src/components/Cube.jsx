import React from 'react';

export default function Cube() {
  //cube
  let cubeitemNum = 4;

  const cubeItemsFunc = () => {
    let cubeArr = [];
    for (let i=1; i<=cubeitemNum; i++) {

    if (i === 1) {
      cubeArr.push(
        <div key={i-1} className={'main-cube-item citem-' + i}>
          <div className="main-cube_side"></div>
          <div className="main-cube_side top"></div>
          <div className="main-cube_side left"></div>
          <div className="main-cube_side right"></div>
          <div className="main-cube_side front">
            <div className="main-cube-icon ic-embed">
              <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_scss</title><path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" fill="#d6d6d6"></path></g>
              </svg>
            </div>
          </div>
          <div className="main-cube_side back"></div>
        </div>
      )} else if (i === 2) {
        cubeArr.push(
          <div key={i-1} className={'main-cube-item citem-' + i}>
            <div className="main-cube_side"></div>
            <div className="main-cube_side top"></div>
            <div className="main-cube_side left"></div>
            <div className="main-cube_side right"></div>
            <div className="main-cube_side front">
              <div className="main-cube-icon ic-embed">
                <svg width="100%" height="100%" viewBox="0 0 31 31" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#d6d6d6" d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path> </g>
                </svg>
              </div>
            </div>
            <div className="main-cube_side back"></div>
          </div>
        )} else if (i === 3) {
        cubeArr.push(
          <div key={i-1} className={'main-cube-item citem-' + i}>
            <div className="main-cube_side"></div>
            <div className="main-cube_side top"></div>
            <div className="main-cube_side left"></div>
            <div className="main-cube_side right"></div>
            <div className="main-cube_side front">
              <div className="main-cube-icon ic-embed">
                <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#d6d6d6"></path> <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#d6d6d6"></path> </g>
                </svg>
              </div>
            </div>
            <div className="main-cube_side back"></div>
          </div>
        )} else if (i === 4) {
        cubeArr.push(
          <div key={i-1} className={'main-cube-item citem-' + i}>
            <div className="main-cube_side"></div>
            <div className="main-cube_side top"></div>
            <div className="main-cube_side left"></div>
            <div className="main-cube_side right"></div>
            <div className="main-cube_side front">
              <div className="main-cube-icon ic-embed">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 16L13 8" stroke="#d6d6d6" strokeWidth="2" strokeLinecap="round"></path> <path d="M17 15L19.6961 12.3039V12.3039C19.8639 12.1361 19.8639 11.8639 19.6961 11.6961V11.6961L17 9" stroke="#d6d6d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M7 9L4.32151 11.6785V11.6785C4.14394 11.8561 4.14394 12.1439 4.32151 12.3215V12.3215L7 15" stroke="#d6d6d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                </svg>
              </div>
            </div>
            <div className="main-cube_side back"></div>
          </div>
        )}
    }

    return cubeArr;
  }

  //mouse offset
  function mousemove(event){
    const cubeWrapper = document.querySelector('.main-cube-wrapper');
    let cuteItems = cubeWrapper.querySelectorAll('.main-cube-item');

    cuteItems[0].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientWidth / 2) - event.clientX) / 350)}rem, 
    ${(((cubeWrapper.clientHeight / 2) - event.clientY) / 200)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientHeight / 0.8) - event.clientY) / 50)}deg) 
    rotateY(${(((cubeWrapper.clientWidth / 1.2) - event.clientX) / 45)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;

    cuteItems[1].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientHeight / 2) - event.clientY) / 400)}rem, 
    ${(((cubeWrapper.clientWidth / 2) - event.clientX) / 400)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientWidth / 1.5) - event.clientX) / 60)}deg) 
    rotateY(${(((cubeWrapper.clientHeight / 0.7) - event.clientY) / 40)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;

    cuteItems[2].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientHeight / 2) - event.clientY) / 250)}rem, 
    ${(((cubeWrapper.clientWidth / 2) - event.clientX) / 350)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientWidth / 1.0) - event.clientX) / 50)}deg) 
    rotateY(${(((cubeWrapper.clientHeight / 1.0) - event.clientY) / 30)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;

    cuteItems[3].style.cssText  = `transform: translate3d(${(((cubeWrapper.clientWidth / 2) - event.clientX) / 450)}rem, 
    ${(((cubeWrapper.clientHeight / 2) - event.clientY) / 250)}rem, 0px) 
    scale3d(1, 1, 1) 
    rotateX(${(((cubeWrapper.clientHeight / 1.8) - event.clientY) / 65)}deg) 
    rotateY(${(((cubeWrapper.clientWidth / 1.5) - event.clientX) / 40)}deg) 
    rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;`;
  }

  window.addEventListener('load', () => {
    let mainSection = document.querySelector('.section-main');
  
    mainSection.addEventListener('mousemove', mousemove);
  });

  return (
    <>
      {cubeItemsFunc()}
    </>
  );
}