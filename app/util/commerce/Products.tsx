"use client"
import { useEffect, useState } from "react";
import IfNoProducts from "./IfNoProducts"
import ProductsDetails from "./ProductsDetails"
import axios from "axios";

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('https://nu-com-0e51cf02b2c8.herokuapp.com/nu-commerce/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const product_len = products.length;
  return (
    <>
        {product_len === 0 && (<IfNoProducts />)}
        <ProductsDetails />
    </>
  )
}

export default Products