import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  asynccurrentuser,
} from "../store/actions/UserActions";
import Logo from './Logo';

const Nav = () => {
  const {users} = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(asynccurrentuser());
  }, [dispatch]);
  
  return (
    <header className="w-full card-glass sticky top-0 z-50">
      <nav className="py-4">
        <div className="app-container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3"><Logo size={36}/><div className="text-2xl font-bold border-l pl-2 border-[#525D71] text-white">GrabIt</div></Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-muted">
              <NavLink to="/" className={({isActive})=> isActive? 'text-white': ''}>Home</NavLink>
              <NavLink to="/admin/create-product" className={({isActive})=> isActive? 'text-white': ''}>Create</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-4">
          {users ? (
            <>
              <div className="hidden md:block text-sm text-muted">Hi, {users.username || 'Admin'}</div>
              <NavLink to="/admin/user-profile"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 hover:fill-white" viewBox="0 0 24 24" fill="#94A3B8"><path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM14.5946 18.8115C14.5327 18.5511 14.5 18.2794 14.5 18C14.5 17.7207 14.5327 17.449 14.5945 17.1886L13.6029 16.6161L14.6029 14.884L15.5952 15.4569C15.9883 15.0851 16.4676 14.8034 17 14.6449V13.5H19V14.6449C19.5324 14.8034 20.0116 15.0851 20.4047 15.4569L21.3971 14.8839L22.3972 16.616L21.4055 17.1885C21.4673 17.449 21.5 17.7207 21.5 18C21.5 18.2793 21.4673 18.551 21.4055 18.8114L22.3972 19.3839L21.3972 21.116L20.4048 20.543C20.0117 20.9149 19.5325 21.1966 19.0001 21.355V22.5H17.0001V21.3551C16.4677 21.1967 15.9884 20.915 15.5953 20.5431L14.603 21.1161L13.6029 19.384L14.5946 18.8115ZM18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z"></path></svg></NavLink>
            </>
          ) : (
            <NavLink to="/Login" className="btn px-4 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-medium">Login</NavLink>
          )}

          <button className="md:hidden px-3 py-2 bg-white/6 rounded-md" onClick={() => setOpen(v => !v)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" /></svg>
          </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3 text-white">
            <NavLink to="/">Home</NavLink>
            {users ? (
              <>
              {users && users?.isAdmin &&(
                <NavLink to="/admin/create-product">Create Product</NavLink>
              )}
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
