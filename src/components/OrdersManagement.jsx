import React, { useState } from 'react';
import mockData from '../../mockData';

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
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Products Management</h1>
      <button onClick={addProduct} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mb-4">Add Product</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md flex flex-col">
            <div className="p-4 flex-grow">
              <p className="text-lg font-semibold">{product.name}</p>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
            <div className="p-4 bg-gray-100 flex justify-center">
              <button onClick={() => deleteProduct(product.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsManagement;
