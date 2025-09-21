import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/UserActions";
import { useDispatch } from "react-redux";
import { asyncloadproducts } from "./store/actions/ProductActions";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproducts());
  }, []);
  return (
    <div className="overflow-x-hidden bg-gray-800 w-screen h-screen text-white font-[gilroy]">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
