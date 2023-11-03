import { useState } from "react";
import "./App.css";
import Stake from "./Stake"
import NavBar from "./navbar"

function App(){
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts}/>
        <Stake accounts={accounts} setAccounts={setAccounts}/>
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;