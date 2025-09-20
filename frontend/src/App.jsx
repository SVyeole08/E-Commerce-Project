import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
const App = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen text-white font-[gilroy]">
      <Nav />
      <Mainroutes />
    </div>
  );
};
 
export default App;
