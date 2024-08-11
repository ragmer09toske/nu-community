"use client";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import IfNoProducts from "./IfNoProducts";
import ProductsDetails from "./ProductsDetails";
import ProductController from "./ProductController";
import { ProductContext } from "@/app/academy/AppContex";

interface Product {
    _id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    size: string;
    category: string;
    subcategory?: string;
    status?: string;
    color?: string;
    thumbnail: string;
    image_one?: string;
    image_two?: string;
    image_three?: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [view, setView] = useState<string>("");

  // Fetch products with async/await and handle errors
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get<Product[]>('https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Optionally handle error state here
      }
    };

    fetchProducts();
  }, []);

  // Determine which component to render based on state
  const renderContent = () => {
    if (products.length === 0) {
      return <IfNoProducts />;
    }

    if (view === "products_controller") {
      return <ProductController />;
    }

    return <ProductsDetails />;
  };

  return (
    <ProductContext.Provider value={{ setView }}>
      {renderContent()}
    </ProductContext.Provider>
  );
};

export default Products;
