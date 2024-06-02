import React, { useState } from 'react';  
import mockData from '../../mockData'  


function ProductsManagement() {  
  const [products, setProducts] = useState(mockData.products);  
  
  const addProduct = () => {  
    const newProduct = { id: Date.now(), name: 'New Product', category: 'Category', price: 0, stock: 0 };  
    setProducts([...products, newProduct]);  
  };  
  
  const deleteProduct = (id) => {  
    setProducts(products.filter(product => product.id !== id));  
  };  
  
  return (  
    <div>  
      <h1>Products Management</h1>  
      <button onClick={addProduct}>Add Product</button>  
      <ul>  
      {products.map(product => (
        <li key={product.id}>  </li>
        ))}
        </ul>
    </div>
    )
}

export default ProductsManagement;