import logo from './logo.svg';
import './App.css';
import VitalSignNavBar from './VitalSignNavbar';
import VitalSignInfo from './VitalSignInfo';
import Atlas from './Atlas';
import { useContext } from 'react'
import { InfoContext } from './InfoContext'
import useScript from './useScript';

function App() {
  const { showThermometer, showInfo, valueText, valueNowText, year, co2, northIce, southIce, northIceNow, southIceNow, co2Now, temp, tempNow, sign } = useContext(InfoContext)
  // useScript("https://climateclock.world/widget-v1.js");
  useScript("https://climateclock.world/widget-v2.js");
  useScript("https://climateclock.world/flatten.js");
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-background">
          <h1 className="App_h1">What has Climate Change, Changed?</h1>
          <VitalSignNavBar />
        </div>
        <div className="App-info">
          {showInfo ? <VitalSignInfo /> : <climate-clock />}
        </div>
      </header>
      <main className="App-body">
        <div>
          <div className="App-year">Year: {year}</div>
          <div className="App-year">{valueText}</div>
          <div className="Atlas-co2" style={ sign === "CO2" ? { padding: `${co2 / 10}px` , background: "rgb(149 156 149)"} : { padding: `${co2 / 10}px` } }>
            <Atlas
              showThermometer={showThermometer}
              southIce={southIce * 10}
              northIce={northIce * 10}
              temp={temp}
            />
          </div>
        </div>
        <div>
          <div className="App-year">Year: 2020</div>
          <div className="App-year"> {valueNowText}</div>
          <div className="Atlas-co2" style={ sign === "CO2" ? { padding: `${co2Now / 10}px` , background: "rgb(149 156 149)"} : { padding: `${co2Now / 10}px` } }>
            <Atlas
              showThermometer={showThermometer}
              southIce={southIceNow * 10}
              northIce={northIceNow * 10}
              temp={tempNow}
            />
          </div>
        </div>
      </main>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
