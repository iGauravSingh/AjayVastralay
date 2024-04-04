import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Homepage from './pages/Homepage.tsx';
import Loginpage from './pages/Loginpage.tsx';
import Contactus from './pages/Contactus.tsx';
import Cart from './pages/Cart.tsx';
import About from './pages/About.tsx';
import CategoryList from './pages/CategoryList.tsx';
import CategoryProduct from './pages/CategoryProduct.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import Notfound from './pages/Notfound.tsx';
import { ShopContextProvider } from './components/contexts/ShopContexts.tsx';
import AuthControl from './pages/auth/AuthControl.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import UserProfile from './pages/Profile.tsx';
import PayPalCheckoutButton from './pages/Checkout.tsx';
import AdminControl from './pages/admin/AdminControl.tsx';
import AdminLogin from './pages/admin/AdminLogin.tsx';
import Feedback from './pages/Feedback.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/category" element={<CategoryList />} />
      <Route path="/auth" element={<AuthControl />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/checkout" element={<PayPalCheckoutButton />} />
      <Route path="/feedback" element={<Feedback />} />

      {/* protected routes  */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/adminsignin" element={<AdminControl />} />
      {/* // */}

      <Route path="/category/:categoryIdentity" element={<CategoryProduct />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<Notfound />} /> 
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ShopContextProvider>
    <RouterProvider router={router} />
    </ShopContextProvider>
    </Provider>
  </React.StrictMode>,
)
