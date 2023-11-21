import * as React from "react";
import Dashboard from "./components/pages/Dashboard";
import Orders from "./components/pages/Orders";
import Reports from "./components/pages/Reports";
import Customers from "./components/pages/Customers";
import About from "./components/pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
