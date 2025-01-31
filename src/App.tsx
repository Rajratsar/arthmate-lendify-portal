import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CustomerService from "./pages/CustomerService";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/customer-service" element={<CustomerService />} />
      </Routes>
    </Router>
  );
}

export default App;