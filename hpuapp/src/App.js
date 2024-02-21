import { Route,Routes} from 'react-router-dom';

import './App.css';
import Nav from './Navbar.js';
import Home from './Home';
import About from './About';
import Contact from "./Contact";
import Signin from "./Signin";
import Signup from "./Signup";
import Forget from './Forget';
import Rent from './Rent';
import Buy from './Buy';
import Chatbot from './Chatbot.js';

function App() {
  return (
    <>

   <Nav/>
   
    <Routes>
      <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/Contact" element={<Contact></Contact>}></Route>
      <Route path="/Signin" element={<Signin></Signin>}></Route>
      <Route path="/Register" element={<Signin></Signin>}></Route>
      <Route path="/Signup" element={<Signup></Signup>}></Route>
      <Route path="/Forget" element={<Forget></Forget>}></Route>
      <Route path="/Rent" element={<Rent></Rent>}></Route>
      <Route path="/Buy" element={<Buy></Buy>}></Route>
      <Route path="/Chatbot" element={<Chatbot></Chatbot>}></Route>
      
    </Routes>
     
    </>
  );
}

export default App;
