import './App.css';
import About from './components/About';
import AvailableCars from './components/AvailableCars';
import BookTour from './components/BookTour';
import CustomizeTour from './components/CustomizeTour';
import DomesticPackage from './components/DomesticPackage';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import Header from './components/Header';
import OurServices from './components/OurServices';
import PilgrimPackage from './components/PilgrimPackage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header/>
      <EnquiryForm/>
      <BookTour/>
      <CustomizeTour/>
      <About/>
      <PilgrimPackage/>
      <DomesticPackage/>
      <AvailableCars/>
      <OurServices/>
      <CustomizeTour/>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
