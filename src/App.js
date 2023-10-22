import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login_Num from './Login_Num';
import Login_Otp from './Login_Otp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login_Num/>} />
        <Route path="/Login_Otp" element={<Login_Otp/>}/>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
