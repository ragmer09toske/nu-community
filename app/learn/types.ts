export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    instructor_id: string;
    category: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  