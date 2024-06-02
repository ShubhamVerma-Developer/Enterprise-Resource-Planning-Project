import React, { useState } from 'react';  
import mockData from '../../mockData';  
  
function OrdersManagement() {  
  const [orders, setOrders] = useState(mockData.orders);  
  
  const deleteOrder = (id) => {  
    setOrders(orders.filter(order => order.id !== id));  
  };  
  
  return (  
    <div>  
      <h1>Orders Management</h1>  
      <ul>  
        {orders.map(order => (  
          <li key={order.id}>  
            Order ID: {order.id} - Customer: {order.customerName} - Date: {order.orderDate} - Status: {order.status}  
            <button onClick={() => deleteOrder(order.id)}>Delete</button>  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
}  
  
export default OrdersManagement;  
