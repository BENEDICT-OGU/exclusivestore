import React, { useState } from 'react';
import Page7Card from './page7card';
import './page7.css'

const Page7 = () => {
  // Define a sample product data
  const products = [
    { id: 1, image: "https://images.unsplash.com/photo-1691534986870-c9d8c950ae76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWUlMjBwYWR8ZW58MHx8MHx8fDA%3D",name:"gaming pad", oldPrice: "50.00", newPrice: "25.00", rating: 4 },
    { id: 2, image: "data:image/jpeg;base64,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",name:"gaming keyboard", oldPrice: "60.00", newPrice: "30.00", rating: 5 },
    { id: 3, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/6215153/1.jpg?4241",name:"Neck Hanging Wireless Bluetooth Earphone Sports Earbuds- Black", oldPrice: "8.888.00", newPrice: "4,290.00", rating: 3 },
    { id: 4, image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/5573373/1.jpg?5287",name:"XIAOMI Redmi 14C 6.88'' 4GB RAM/128GB ROM Android 14 -Sage Green", oldPrice: "300.000.00", newPrice: "150,000.00", rating: 4 },
    { id: 5, image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/3504473/1.jpg?2347",name:"Ox Spacetek 18 Inches Standing Fan", oldPrice: "12,500.00", newPrice: "25,000.00", rating: 5 },
    { id: 6, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTt8ExAtNtMjniqPbe84WnmNPeMV9paHZekb0rA9eMPg9EFEM2INUWX-qf40s3e5m6PkwWc8EYc-mTErNP1zyteeUMlzlch_2XaTaD3Yh8KrJB-zUeklETbYDCQiq21tO1HG4GjZFAj40I&usqp=CAc",name:"gaming headset", oldPrice: "100.00", newPrice: "50.00", rating: 4 },
    { id: 7, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNRfggV4eON_Vy6BSYfW1KoPuYIj7bpwUsOAncDTtgvi-X60RLcrj7EtCF3wfmQFHiqxDMEJropEmL7qcEcY0Ny7Ercvwqe67iJb6x9VZ7pqBbBS72RqHB&usqp=CAc",name:"smart watch", oldPrice: "110.00", newPrice: "55.00", rating: 3 },
    { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR4XzExg3hboYWl0p4zXTk4vrsEEuCYoK_g&s8",name:"gaming pad",name:"REVLON hair dryer", oldPrice: "120.00", newPrice: "60.00", rating: 5 },
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
      <h1>New Products</h1>
      <p>explore our new sales</p>
      
      <div className="product-list">
        {visibleProducts.map(product => (
          <Page7Card
            key={product.id}
            image={product.image}
            name={product.name}
            oldPrice={product.oldPrice}
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

export default Page7;
