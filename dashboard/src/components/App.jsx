import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard'; // Create this component
import Home from './Home'; // Create this component
import SignUp from './Signup';
import ProtectedRoute from './ProtectedRoute';
import {AuthProvider }from './AuthContext';
import Nifty from './Nifty';
import Sensex from './Sensex';
import Positions from './Positions';
import Orders from './Orders';
import Funds from './Funds';
import Bids from './Bids';
import Holdings from './Holdings';

function App() {

  return (
    
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}>
          <Route index element={<Navigate to="/home/dashboard" />} />
          <Route path="nifty" element={<Nifty></Nifty>} />
          <Route path="sensex" element={<Sensex />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="positions" element={<Positions />} />
          <Route path="orders" element={<Orders />} />
          <Route path="funds" element={<Funds />} />
          <Route path="bids" element={<Bids />} />
          <Route path="holdings" element={<Holdings/> }/>
        </Route>                        
        <Route path='/*' element={<LoginPage/>}></Route>
      </Routes>
    </AuthProvider>
  </Router>
   
  );
}

export default App;