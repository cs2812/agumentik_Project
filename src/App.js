import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import SignUp from "./pages/SignUp"

function App() {
  return (
    <Box className="App" fontFamily={"Poppins"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Box>
  );
}

export default App;
