// import React, { useState, useEffect } from "react";

// // Helper function to format the time
// const formatTime = (time) => {
//   const hours = Math.floor(time / (1000 * 60 * 60));
//   const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((time % (1000 * 60)) / 1000);
//   return `${hours}:${minutes}:${seconds}`;
// };

// const FlashSale = ({ saleEndDate }) => {
//   const [timeRemaining, setTimeRemaining] = useState(0);
//   const [isSaleActive, setIsSaleActive] = useState(true);
//   const [isSaleEnded, setIsSaleEnded] = useState(false);

//   // Set the sale end time based on the saleEndDate prop
//   const endDate = new Date(saleEndDate).getTime();

//   // Update the countdown every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const currentTime = new Date().getTime();
//       const remainingTime = endDate - currentTime;

//       if (remainingTime <= 0) {
//         clearInterval(interval);
//         setIsSaleActive(false);
//         setIsSaleEnded(true);
//       } else {
//         setTimeRemaining(remainingTime);
//       }
//     }, 1000);

//     return () => clearInterval(interval); // Clean up the interval on unmount
//   }, [endDate]);

//   return (
//     <div className="flash-sale">
//       {isSaleActive ? (
//         <>
//           <h2>Flash Sale is live!</h2>
//           <p>Hurry! Time remaining: {formatTime(timeRemaining)}</p>
//           <div className="sale-items">
//             <div className="sale-item">
//               <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 1</h3>
//               <p>Discounted Price: $50</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//             <div className="sale-item">
//             <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
//               <h3>Product 2</h3>
//               <p>Discounted Price: $30</p>
//             </div>
//           </div>
//         </>
//       ) : isSaleEnded ? (
//         <>
//           <h2>Sorry, the flash sale has ended!</h2>
//           <p>The products are no longer on sale.</p>
//         </>
//       ) : (
//         <p>Preparing the sale...</p>
//       )}
//     </div>
//   );
// };

// export default FlashSale;
