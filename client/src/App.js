import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Movies from "./pages/movies";
import Add from "./pages/add";
import Update from "./pages/update";
import Home from "./pages/home";
import "./style.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Films from "./pages/films";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/single";

const Layout = () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element : <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/single/:idmovies",
        element:<Single/>
      },
      {
        path:"/films",
        element:<Films/>
      },
      {
        path:"/movies",
        element:<Movies/>
      },
      {
        path:"/update/:idmovies",
        element:<Update/>
      },
      {
        path:"/add",
        element:<Add/>
      },
      
    ]
  },
  {
    path:"/register",
    element : <div>
      <Register/>
    </div>
  },
  {
    path:"/login",
    element : <div>
      <Login/>
    </div>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route path="/movies" element={<Movies />} />
          <Route path="/home" element={<Home />} />  */}
          {/* <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/add" element={<Add />} /> */}
          {/* <Route path="/update/:idmovies" element={<Update />} /> 
          <Route path="/films" element={<Films />} />  */}
          {/* specified for any id */}
        {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
