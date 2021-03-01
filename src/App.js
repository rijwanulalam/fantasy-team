import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Players from './components/Players/Players';
import Selection from './components/Selection/Selection';
import { useEffect, useState } from 'react';
import playerData from './playerData/players.json'


function App() {
  // use state for single player
  const [players, setPlayers] = useState([]);
  // useEffect for showing data
  useEffect(() => {
    setPlayers(playerData);
  },[])
  // use state for selection component
  const [select, setSelect] = useState([]);
  //handle selection for button
  const handleSelection = player => {
    const newSelect = [...select,player];
    setSelect(newSelect);
  }


  return (
    <div>
      <h1 className="header">Fantasy Team</h1>
      <div className="players-container">
        {
          players.map(player => <Players player={player} handleSelection={handleSelection}></Players>)
        }
      </div>
      <div className="selection-container">
          <Selection select={select}></Selection>
      </div>
    </div>
  );
}

export default App;
