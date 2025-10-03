import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { asynccurrentuser } from "./store/actions/UserActions";
import { useDispatch } from "react-redux";
import { asyncloadproducts } from "./store/actions/ProductActions";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproducts());
  }, [dispatch]);
  return (
    <div className="overflow-x-hidden min-h-screen text-white">
      <Nav />
      <main className="py-8 pb-24">
        <div className="app-container">
          <Mainroutes />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
