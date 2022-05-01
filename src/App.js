import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Authentication/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Authentication/Register/Register';
import Requiredauth from './Pages/Authentication/RequiredAuth/Requiredauth';
import Cheackout from './Pages/CheckOut/Cheackout';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout'element={
          <Requiredauth>
            <Cheackout></Cheackout>
          </Requiredauth>
        }></Route>
        <Route path='/addservice'element={
          <Requiredauth>
            <AddService></AddService>
          </Requiredauth>
        }></Route>
        <Route path='/manage'element={
          <Requiredauth>
            <ManageServices></ManageServices>
          </Requiredauth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/register' element={<Register></Register>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
