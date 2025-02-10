import React, { useState } from "react";
import CategorySection from "./CategorySection";
import ProductDisplay from "./ProductDisplay";
import "./page4.css"

const Page4 = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productList, setProductList] = useState([]);

  return (
    <div className="page4">
      <h1>Categories</h1>
      <p>Browse By Category</p>
      <CategorySection setCategory={setSelectedCategory} setProductList={setProductList} />
      {selectedCategory && (
        <div>
          <h2>Selected Category: {selectedCategory}</h2>
          <ProductDisplay productList={productList} />
        </div>
      )}
    </div>
  );
};

export default Page4;
