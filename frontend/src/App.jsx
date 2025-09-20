import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/UserActions";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser());
  }, []);
  return (
    <div className="bg-gray-800 w-screen h-screen text-white font-[gilroy]">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
