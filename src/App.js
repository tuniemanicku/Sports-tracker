import './App.css';
import gamepad from './gamepad.png';
import football from './football.png';

function App() {
  return (
    <div className="game_section">
      <div className="navigation">
        <div className="button">sign up</div>
        <div className="button">log in</div>
        <div className="gamepad"><a href="https://lolesports.com/live/msi/riotgames" target="blank_"><img src={gamepad} alt="games"/></a></div>
        <div className="football"><a href="https://wp.pl" target="blank_"><img src={football} alt="sports"/></a></div>
      </div>
      <div className="page">
        <input type="text"/>
        <div className="matches"></div>
      </div>
    </div>
  );
}

export default App;
