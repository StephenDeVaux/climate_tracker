import logo from './logo.svg';
import './App.css';
import VitalSignNavBar from './VitalSignNavbar';
import VitalSignInfo from './VitalSignInfo';
import Atlas from './Atlas';
import { useContext } from 'react'
import { InfoContext } from './InfoContext'
import useScript from './useScript';

function App() {
  const { year, co2, northIce, southIce, northIceNow, southIceNow, co2Now } = useContext(InfoContext)
  // useScript("https://climateclock.world/widget-v1.js");
  useScript("https://climateclock.world/widget-v2.js");
  useScript("https://climateclock.world/flatten.js");
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App_h1">What has Climate Change, Changed?</h1>
        <VitalSignNavBar />
        <VitalSignInfo />
      </header>
      <main className="App-body">
        <div>
          <div>Year: {year}</div>
          <div className="Atlas-co2" style={{ padding: `${co2 / 10}px` }}>
            <Atlas
              southIce={southIce * 10}
              northIce={northIce * 10}
            />
          </div>
        </div>
        <div>
          ?
        </div>
        <div>
          <div>Year: 2020 (Now)</div>
          <div className="Atlas-co2" style={{ padding: `${co2Now / 10}px` }}>
            <Atlas
              southIce={southIceNow * 10}
              northIce={northIceNow * 10}
            />
          </div>
        </div>
      </main>
      <footer className="App-footer">
      <climate-clock />
      </footer>
    </div>
  );
}

export default App;
