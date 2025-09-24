import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  asynccurrentuser,
  asynclogoutuser,
} from "../store/actions/UserActions";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(asynccurrentuser());
  }, [dispatch]);
  const LogoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/");
  };
  return (
    <header className="w-full card-glass sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-white">MyStore</div>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted">
            <NavLink to="/" className={({isActive})=> isActive? 'text-white': ''}>Home</NavLink>
            <NavLink to="/Products" className={({isActive})=> isActive? 'text-white': ''}>Products</NavLink>
            {user && (
              <NavLink to="/admin/create-product" className={({isActive})=> isActive? 'text-white': ''}>Create</NavLink>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden md:block text-sm text-muted">Hi, {user.name || 'Admin'}</div>
              <button onClick={LogoutHandler} className="px-4 py-2 rounded-md bg-white/6 hover:bg-white/10 text-white text-sm">Log Out</button>
            </>
          ) : (
            <NavLink to="/Login" className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-medium">Login</NavLink>
          )}

          <button className="md:hidden px-3 py-2 bg-white/6 rounded-md" onClick={() => setOpen(v => !v)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3 text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Products">Products</NavLink>
            {user ? (
              <>
                <NavLink to="/admin/create-product">Create Product</NavLink>
                <button onClick={LogoutHandler} className="text-left">Log Out</button>
              </>
            ) : (
              <NavLink to="/Login">Login</NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
