import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import ChatBotCustomer from './page/chatBotProduct/index.tsx'
import ChatBotCustomerDashBoard from './page/dashboard/index.tsx';
function App() {
  return (
    <div >
      <Routes>
        <Route path={'/'} Component={ChatBotCustomerDashBoard}/>
        <Route path={'/customer'} Component={ChatBotCustomer}/>
      </Routes>
   
    </div>
  );
}

export default App;
