import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import IceCreamBooking from './Booking';
import IceCreamHomepage from './Home';
import ResultPage from './Result';
import SignUpForm from './Signup';
const App = () => {
  return (
  
      <Routes>
        <Route  path="/login" element={<Login/>}></Route>
        <Route  path="/home" element={<IceCreamHomepage/>} ></Route>
        <Route  path="/signup" element={<SignUpForm/>}></Route>
        <Route  path="/booking" element={<IceCreamBooking/>}></Route>
        <Route  path="/result" element={<ResultPage/>}></Route>
  
    </Routes>
    
  );
};

export default App;
