
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import CarouselApp from './Components/Home/CarouselApp';
import Login from './Components/Navbar/Login';
import Signup from './Components/Navbar/Signup';
import SignInOutContainer from './Components/Navbar/SignInOutContainer';

function App() {
  

  return (
    <div className="App">
     {/* <Navbar />
     <Home />
     <CarouselApp />
     <Footer />
     <Login />
     <Signup /> */}
     <SignInOutContainer />
    </div>
  );
}

export default App;
