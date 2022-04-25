import './App.css';
import LoginSignupPage from './Components/Pages/LoginSignupPage';
import ErrorPage from './Components/Pages/ErrorPage';
import HomePage from './Components/Pages/HomePage';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from './Components/Pages/ProductPage';

function App() {
  

  return (
    <div className="App">
     
     <Router>
       {/* <Navbar>
         <Link to="/">Home</Link>
         <Link to="/">Home</Link>
         <Link to="/">Home</Link>
       </Navbar> */}
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginSignupPage />} />
         <Route path="/search" element={<ProductPage />} />
         <Route path="*" element={<ErrorPage />} />
       </Routes>
     </Router>
     
    </div>
  );
}

export default App;
