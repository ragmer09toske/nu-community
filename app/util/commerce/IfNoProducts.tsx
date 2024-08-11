"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import ProductController from './ProductController';

const IfNoProducts = () => {
    const [showProductController, setShowProductController] = useState(false);

    const handleAddProductClick = () => {
      setShowProductController(true);
    };
  
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {showProductController ? (
          <ProductController />
        ) : (
          <>
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div>
            <div className="p-10 flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">
                  You have no products
                </h3>
                <p className="text-sm text-muted-foreground">
                  You can start selling as soon as you add a product.
                </p>
                <Button className="mt-4" onClick={handleAddProductClick}>
                  Add Product
                </Button>
              </div>
            </div>
          </>
        )}
      </main>
    );
}

export default IfNoProducts