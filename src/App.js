
import './App.css';
import Footer from './Components/Footer/Footer';
import LoginSignupPage from './Components/Pages/LoginSignupPage';
import ErrorPage from './Components/Pages/ErrorPage';
import HomePage from './Components/Pages/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
     
     <Router>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginSignupPage />} />
         <Route path="*" element={<ErrorPage />} />
       </Routes>
     </Router>
     
    </div>
  );
}

export default App;
