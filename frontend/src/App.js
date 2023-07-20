// import { useState } from "react";
// import { useContext } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Picturepg from "./components/Picturepg";
import Phising from "./components/Phising";
import Loginpage from "./components/Loginpage"
//import { AuthContext, AuthProvider } from "./AuthContext";
import {
  BrowserRouter as Router,
  // Navigate,
  // RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={[<Navbar />, <Home />]} />
//           <Route path="/login" element={[<Navbar />, <Login />]}/>
//           <Route path="/phising" element={[<Navbar />, <Phising />]}/>
//           <Route path="/picture" element={[<Navbar />, <Picturepg />]} />
//         </Routes>
//       </Router>
//     </>
//   );
// }
// export default App;
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Home />
          </>} />
          <Route path="/login" element={<>
            <Navbar />
            <Login />
          </>} />
          <Route path="/phising" element={<>
            <Navbar />
            <Phising />
          </>} />
          <Route path="/picture" element={<>
            <Navbar />
            <Picturepg />
          </>} />
          <Route path="/loginpage" element={<>
            <Loginpage />
          
          </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
