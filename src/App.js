import './App.css';
import LoginSignupPage from './Components/Pages/LoginSignupPage';
import ErrorPage from './Components/Pages/ErrorPage';
import HomePage from './Components/Pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Components/Pages/ProductPage';
import BikeDetailsPage from './Components/Pages/BikeDetailsPage';

function App() {
  

  return (
    <div className="App">
     
     <Router>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginSignupPage />} />
         <Route path="/search" element={<ProductPage />} />
         <Route path="/book" element={<BikeDetailsPage />} />
         <Route path="*" element={<ErrorPage />} />
       </Routes>
     </Router>
     
    </div>
  );
}

export default App;
