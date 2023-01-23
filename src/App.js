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
import Catalog2 from "./pages/Catalog2";
import Catalog3 from "./pages/Catalog3";
import Catalog4 from "./pages/Catalog4";
import Catalog5 from "./pages/Catalog5";
import Catalog6 from "./pages/Catalog6";
import ProductPageEquip from "./pages/ProductPageEquip";
import ProductPageElec from "./pages/ProductPageElec";
import ProductPageAcc from "./pages/ProductPageAcc";
import ProductPageIns from "./pages/ProductPageIns";
import ProductPageSpares from "./pages/ProductPageSpares";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/catalog'} element={<Catalog/>}/>
          <Route path={'/catalog2'} element={<Catalog2/>}/>
          <Route path={'/catalog3'} element={<Catalog3/>}/>
          <Route path={'/catalog4'} element={<Catalog4/>}/>
          <Route path={'/catalog5'} element={<Catalog5/>}/>
          <Route path={'/catalog6'} element={<Catalog6/>}/>
          <Route path={'/product/:id'} element={<ProductPage/>}/>
          <Route path={'/productAcc/:id'} element={<ProductPageAcc/>}/>
          <Route path={'/productElec/:id'} element={<ProductPageElec/>}/>
          <Route path={'/productEquip/:id'} element={<ProductPageEquip/>}/>
          <Route path={'/productIns/:id'} element={<ProductPageIns/>}/>
          <Route path={'/productSpares/:id'} element={<ProductPageSpares/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/register'} element={<Register/>}/>
          <Route path={'/admin'} element={<AdminPanel/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
