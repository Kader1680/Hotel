// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
// import Navbar from "./components/Navbar";
 
 
// import Rooms from "./pages/core/Rooms";
// import Dashboard from "./pages/admin/dashboard";
// import AddRoom from "./pages/admin/addRoom";
// // import { AuthProvider } from "./context/AuthContext";
// import Register from "./pages/auth/register";
// import Login from "./pages/auth/login";
 
// // import Home from "./pages/Home";
// // import Booking from "./pages/Booking";


// import { useAuth, AuthProvider } from './context/AuthContext';
// import Profile from './pages/profile';

// function App() {
//   return (
//     // <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           {/* <Route path="/home" element={<Home/>} /> */}
//           <Route path="/rooms" element={<Rooms/>} />
//           {/* <Route path="/booking" element={<Booking/>} /> */}

//           <Route path="/admin" element={<Dashboard/>} />
//           <Route path="/admin/add-room" element={<AddRoom/>} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
             
//         </Routes>
//       </Router>
//     // </AuthProvider>
//   );
// }

// export default App;

// const App = () => {
//   const { user, loading } = useAuth();

//   if (loading) {
//       return <div>Loading...</div>;
//   }

//   return (
//       <div>
//           {user ? <Profile /> : <Login />}
//       </div>
//   );
// };

// export default () => (
//   <AuthProvider>
//       <App />
//   </AuthProvider>
// );






import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Navbar from './components/Navbar';
import Profile from './pages/profile';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
 
import Rooms from "./pages/core/Rooms";
import Dashboard from "./pages/admin/dashboard";
import AddRoom from "./pages/admin/addRoom";
import Home from './pages/Home';
import Order from './pages/core/Order';
import Booking from './pages/core/Booking';
import SelectPayment from './pages/payement/selectPayement';
import UserManagement from './pages/admin/UserManagement';
import Roomdetail from './pages/core/roomDetail';
// import Roomdetail from './pages/core/Roomdetail';

function App() {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Select-payment/:BookingId" element={<SelectPayment />} />
        
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<Roomdetail/>} />
          <Route path="/orders" element={<Order />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/add-room" element={<AddRoom />} />
          <Route path="/admin/user-management" element={<UserManagement />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          
          
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
