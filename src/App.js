import logo from './logo.svg';
import './App.css';
import VitalSignNavBar from './VitalSignNavbar';
import VitalSignInfo from './VitalSignInfo';
import Atlas from './Atlas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App_h1">What has Climate Change, Changed?</h1>
        <VitalSignNavBar />
        <VitalSignInfo />
      </header>
      <body className="App-body">
        <Atlas />
        <div>
          ?
        </div>
        <Atlas />
      </body>
      <footer className="App-footer">Climte clock: 7 years 45days 2 hours 3min 5 seconds</footer>
    </div>
  );
}

export default App;
