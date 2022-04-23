
import './App.css';
import Footer from './Components/Footer/Footer';
//import CarouselSlide from './Components/Home/CarouselSlide';
import Navbar from './Components/Navbar/Navbar';
//import SLIDE_INFO from './Components/Home/constants'
import { Home } from './Components/Home/Home';

function App() {
  //const content = SLIDE_INFO[3];

  return (
    <div className="App">
     <Navbar />
     <Home />
     {/* <CarouselSlide
        content={content}
     /> */}
     <Footer />
    </div>
  );
}

export default App;
