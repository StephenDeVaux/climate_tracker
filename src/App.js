import logo from './logo.svg';
import './App.css';
import VitalSignNavBar from './VitalSignNavbar';
import VitalSignInfo from './VitalSignInfo';
import Atlas from './Atlas';
import { useContext } from 'react'
import { InfoContext } from './InfoContext'

function App() {
  const { year, co2, co2Now } = useContext(InfoContext)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App_h1">What has Climate Change, Changed?</h1>
        <VitalSignNavBar />
        <VitalSignInfo />
      </header>
      <body className="App-body">
        <div>
          <div>Year: {year}</div>
          <div className="Atlas-co2" style={{ padding: `${co2 / 10}px` }}>
            <Atlas />
          </div>
        </div>
        <div>
          ?
        </div>
        <div>
        <div>Year: 2020 (Now)</div>
          <div className="Atlas-co2" style={{ padding: `${co2Now / 10}px` }}>
            <Atlas />
          </div>
        </div>
      </body>
      <footer className="App-footer">Climte clock: 7 years 45days 2 hours 3min 5 seconds</footer>
    </div>
  );
}

export default App;
