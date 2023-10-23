import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login_Num from './Login_Num';
import Login_Otp from './Login_Otp';
import Spoc_Registration from './Spoc_Registration';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route  exact path="/" element={<Login_Num/>} />
        <Route path="/Login_Otp" element={<Login_Otp/>}/>
        <Route path="/Spoc_Registration" element={<Spoc_Registration/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
