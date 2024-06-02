import { Link } from 'react-router-dom';  
  
function Dashboard() {  
  return (  
    <div>  
      <h1>Dashboard</h1>  
      <p>Total Products: 10</p>  
      <p>Total Orders: 5</p>  
      <Link to="/products">Manage Products</Link>  
      <Link to="/orders">Manage Orders</Link>  
    </div>  
  );  
}  
  
export default Dashboard;  
