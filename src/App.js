import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Bangladesh from './components/Contact/Bangladesh';
import Contact from './components/Contact/Contact';
import Usa from './components/Contact/Usa';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/country-details/:countryName' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bangladesh' element={<Bangladesh></Bangladesh>}></Route>
          <Route path='usa' element={<Usa></Usa>}></Route>
        </Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
