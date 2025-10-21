import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { asynccurrentuser } from "./store/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproducts } from "./store/actions/ProductActions";
import { Skeleton } from "./components/ui/skeleton";
const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users, dispatch]);

  useEffect(() => {
    products.length === 0 && dispatch(asyncloadproducts());
  }, [products, dispatch]);
  return (
    <div className="text-white">
      <Nav />
      <main className="py-8 pb-24">
        <div className="app-container">
          <Mainroutes />
        </div>
      </main>
      <Footer/>
      
    </div>
  );
};

export default App;
