import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/catalog'} element={<Catalog/>}/>
          <Route path={'/product'} element={<ProductPage/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
          <Route path={'/admin'} element={<AdminPanel/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
