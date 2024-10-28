import { useState } from 'react';
import './App.css';
import MainFooter from './Footer/MainFooter';
import Navbar from './Header/Navbar';
import AvailablePlayers from './Main/AvailablePlayers';

function App() {
  const [addMoney, setAddMoney] = useState(0);

  const AddMoney = newMoney => {
    const NewBalanceAdd = addMoney + newMoney;
    setAddMoney(NewBalanceAdd);
  };

  const Players = player => {
    const NewBalance = player.price;
    const TotalTK = addMoney - NewBalance;
    if (addMoney > NewBalance) {
      setAddMoney(TotalTK);
    }

    // console.log(NewBalance);
  };

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Navbar AddMoney={AddMoney} addMoney={addMoney}></Navbar>
        <AvailablePlayers
          PlayerPrice={Players}
          addMoney={addMoney}
        ></AvailablePlayers>
      </div>

      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
