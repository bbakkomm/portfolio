import React, {useState, useEffect} from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      const handleShowButton = () => {
          if (window.scrollY > 500) {
              setShowButton(true)
          } else {
              setShowButton(false)
          }
      }

      console.log(window.scrollY)
      window.addEventListener("scroll", handleShowButton)
      return () => {
          window.removeEventListener("scroll", handleShowButton)
      }
  }, [])

  return showButton && (
    <footer id='footer' className='footer-container'>
      <div className="global-marginwrap">
        <div className="footer-wrapper">
          <p className='footerTxt'>Made with by Sunghun.</p>
          <p className='footerTxt'>© 2023 SUNGHUN. All rights reserved.</p>
        </div>
      </div>
      <button id='scroll-btn' onClick={scrollToTop}>
        <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_533_298)">
            <path d="M13.3686 27.6926C13.3685 28.5939 14.0992 29.3245 15.0004 29.3245C15.9016 29.3245 16.6322 28.5939 16.6322 27.6926L13.3686 27.6926ZM16.1543 1.15349C15.517 0.51622 14.4838 0.516203 13.8465 1.15349L3.46163 11.5384C2.82436 12.1756 2.82436 13.2089 3.46163 13.8461C4.0989 14.4834 5.13211 14.4834 5.76938 13.8461L15.0004 4.61512L24.2314 13.8461C24.8687 14.4834 25.9019 14.4834 26.5391 13.8461C27.1764 13.2088 27.1764 12.1757 26.5391 11.5384L16.1543 1.15349ZM16.6322 27.6926L16.6322 2.30737L13.3686 2.30736L13.3686 27.6926L16.6322 27.6926Z" fill="currentcolor"></path>
          </g>
        </svg>
      </button>
    </footer>
  );
}