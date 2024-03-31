
import React, { useState } from 'react';

import Login from './Login';
import SignUp from './Signup';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const AuthControl = () => {
  
  const [isLogin, setIsLogin] = useState(true);


  const handleAuthSelection = () => {
    setIsLogin(prevState => !prevState)
  }


  

  return (
    <>
    <Navbar />
    <div className=" font-title">
      <h3 className=' flex justify-center items-center gap-5 mt-7'>
        <p onClick={handleAuthSelection} className={`${isLogin ? 'text-black' : 'text-slate-400'} cursor-pointer font-bold`}>Signin</p>
        <p onClick={handleAuthSelection} className={`${!isLogin ? 'text-black' : 'text-slate-400'} cursor-pointer font-bold`}>SignUp</p>
      </h3>
      { isLogin ? <Login /> : <SignUp />}
    </div>
    <Footer />
    </>
  );
};

export default AuthControl;