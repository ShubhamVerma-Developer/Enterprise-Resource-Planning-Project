import React from 'react';  
import mockData from '../../mockData'
  
function OrdersCalendarView() {  
  const ordersByDate = mockData.orders.reduce((acc, order) => {  
    if (!acc[order.deliveryDate]) {  
      acc[order.deliveryDate] = [];  
    }  
    acc[order.deliveryDate].push(order);  
    return acc;  
  }, {});  
  

  
  return (  
    <div>  
      <h1>Orders Calendar View</h1>  
      <div className="calendar">  
        {Object.keys(ordersByDate).map(date => (  
          <div key={date} className="calendar-date">  
            <h3>{date}</h3>  
            <ul>  
              {ordersByDate[date].map(order => (  
                <li key={order.id}>  
                  Order ID: {order.id} - Customer: {order.customerName} - Status: {order.status}  
                </li>  
              ))}  
            </ul>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  
  
export default OrdersCalendarView;  
