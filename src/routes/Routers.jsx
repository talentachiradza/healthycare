import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';

import {Routes, Route} from 'react-router-dom'
const Router = () => {
  return <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/home" exact element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/doctors/:id" element={<DoctorDetails />} />
  </Routes>
}

export default Router