import React, { useEffect } from "react";
import { asyncgetusers } from "./store/UserActions";
const App = () => {
  useEffect(() => {
    asyncgetusers();
  });
  return <div>App</div>;
};

export default App;
