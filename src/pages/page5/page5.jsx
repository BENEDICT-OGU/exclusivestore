import React, { useState } from 'react';
import Card5 from './page5card';
import './page5.css'

const Page5 = () => {
  // Define a sample product data
  const products = [
    { id: 1, image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/5635773/1.jpg?0656",name:"itel 27000mAh 22.5W Fast Charging Powerbank + Free 18W Charger", oldPrice: "47,000.00", newPrice: "27,000.00", rating: 4 },
    { id: 2, image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/246787/1.jpg?7984",name:"LED 2.4G Rechargeable Wireless Mouse Bluetooth 2 Modes- Black", oldPrice: "60.00", newPrice: "4,000.00", rating: 5 },
    { id: 3, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/11/520224/1.jpg?9699",name:"Patchwork Zipper Jacket Bomber Jacket Coat Two Side Double Side-Green", oldPrice: "70.00", newPrice: "35,000.00", rating: 3 },
    { id: 4, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/86/3704703/1.jpg?5290",name:"Mythco Cordless Portable 300W Pressure Washer, 6 In 1 Nozzle", oldPrice: "80.00", newPrice: "39,000.00", rating: 4 },
    { id: 5, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/1755263/1.jpg?7793",name:"Seamless Classic Sports Football Soccer Ball - Size 5", oldPrice: "15,000.00", newPrice: "7,500.00", rating: 5 },
    { id: 6, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/421915/1.jpg?0415",name:"Qasa 1.5HP Wall Mount Automatic Voltage Stabilizer (AVR- PRO)", oldPrice: "100.00", newPrice: "100,000.00", rating: 4 },
    { id: 7, image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/4591532/1.jpg?9151",name:"AGM Note N1 6.52 8GB RAM / 128GB Expandable ROM Android 13 - Grey", oldPrice: "110.00", newPrice: "160,000.00", rating: 3 },
    { id: 8, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/986649/1.jpg?6437",name:"TOUPHY T-Shirts +Shorts 100% Cotton Men's Short Sleeve Set-White", oldPrice: "120.00", newPrice: "28,000.00", rating: 5 },
    { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGFOF_O6FW_FHPyBGnD6aRid38xrvNEFh_Q&s",name:"smart glasses", oldPrice: "130.00", newPrice: "65.00", rating: 4 },
    { id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWB4VsXeXEjd3my3qmZRpkzvILSQzpZVXtUQ&s",name:"vintage black shoe", oldPrice: "140.00", newPrice: "70.00", rating: 2 },
    { id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkHpps6mO0Z0vLPrB9d0qQbUIrN8oc2XgXhg&s",name:"SAMSUNG galaxy A56", oldPrice: "140.00", newPrice: "70.00", rating: 2 },
    { id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotY-Ff9Wlk_ySzM131G3FbbdRcqJsFYgI_Q&s",name:"SAMSUNG galaxy S10", oldPrice: "140.00", newPrice: "70.00", rating: 2 }

  ];

  // State to manage the products to display
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 6));
  const [isReplaced, setIsReplaced] = useState(false); // Track if the products are replaced

  // Function to show more products (and replace all)
  const handleShowMore = () => {
    const nextProducts = products.slice(visibleProducts.length, visibleProducts.length + 6);
    if (nextProducts.length > 0) {
      setVisibleProducts([...visibleProducts, ...nextProducts]);
    }
  };

  const handleReplaceAll = () => {
    const newProducts = products.slice(6, 12); // Take the next 5 products to replace
    setVisibleProducts(newProducts);
    setIsReplaced(true);
  };

  const addToCart = () => {
    console.log("Item added to cart");
  };

  return (
    <div className='secondp'>
      <h1>This Month</h1>
      <p>Best Selling</p>
      
      <div className="product-list">
        {visibleProducts.map(product => (
          <Card5
            key={product.id}
            image={product.image}
            name={product.name}
            // oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            rating={product.rating}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <div className="buttons">
        <button onClick={handleShowMore}>Show More</button>
        {/* <button onClick={handleReplaceAll}>Replace All</button> */}
      </div>

      {isReplaced && <div className="message">Products have been replaced!</div>}
    </div>
  );
};

export default Page5;
