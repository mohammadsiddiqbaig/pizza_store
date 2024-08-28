import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Items from './components/Items'
import Services from './components/Services'
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import UpdatePizza from './components/UpdatePizza';
import AddItems from './components/AddItems';


function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/items' element={<Items/>}/>
      <Route path='/service' element={<Services/>}/>
      <Route path='/updateitem/:id' element={<UpdatePizza/>}/>
      <Route path='/additem' element={<AddItems/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
    </Routes>
    

    <Footer/>
    </div>
  );
}

export default App;
