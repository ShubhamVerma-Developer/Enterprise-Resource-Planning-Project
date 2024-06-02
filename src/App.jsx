import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';  
import Dashboard from './components/Dashboard';  
import ProductsManagement from './components/ProductsManagement';  
import OrdersManagement from './components/OrdersManagement';  
import OrdersCalendarView from './components/OrdersCalendarView';  

  
function App() {  
  return (  
    <BrowserRouter>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-transparent">
      <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
    </div>
      <div className="Continer text-clip">  
        <nav>  
          <Link to="/" className='btn-red'>Dashboard</Link>  
          <Link to="/products">Products</Link>  
          <Link to="/orders">Orders</Link>  
          <Link to="/calendar">Orders Calendar</Link>  
        </nav>  
        <Routes>
          <Route exact path="/" element={<Dashboard />} />  
          <Route path="/products" element={<ProductsManagement />} />  
          <Route path="/orders" element={<OrdersManagement />} />  
          <Route path="/calendar" element={<OrdersCalendarView />} />  
        </Routes>
      </div>  
    </BrowserRouter>
  );  
}  
  
export default App;  
