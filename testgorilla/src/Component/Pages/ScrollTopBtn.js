// import React, { useEffect, useState } from "react";


// const ScrollTopBtn = () => {
//     const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     });
//   }, []);

//   // This function will scroll the window to the top 
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' // for smoothly scrolling
//     });
//   };

//   return (
//     <>
//       {showButton && (
//         <button onClick={scrollToTop} >
//         <i class="fas fa-arrow-alt-circle-up back-to-topp"></i>
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollTopBtn;


import React from 'react'
import ScrollToTop from "react-scroll-to-top";

const ScrollTopBtn = () => {
  return (
    <div>
         <div className="App scrool">
      <ScrollToTop smooth   style={{backgroundColor:'rgb(54, 97, 177)',color:'white'}} />
      
    </div>
    </div>
  )
}
export default ScrollTopBtn