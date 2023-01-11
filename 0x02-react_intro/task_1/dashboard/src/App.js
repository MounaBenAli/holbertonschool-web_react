import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> School dashboard </h1>
      </header>

      {/* Body */}
      <body className="App-body">
      <p>
      Login to access the full dashboard
      </p>
      </body>

      {/* footer */}
      <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </footer>
    </div>
  );
}

export default App;
