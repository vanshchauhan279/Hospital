import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Body from "./components/Body";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
