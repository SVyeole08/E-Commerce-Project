import React, { useEffect } from "react";
import { asyncgetusers } from "./store/UserActions";
import { useDispatch, useSelector } from "react-redux";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);
  return (
    <div className="bg-gray-800 w-screen h-screen text-white font-[gilroy]">
      <Nav />
      <Mainroutes />
    </div>
  );
};
 
export default App;
