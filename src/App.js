import logo from './logo.svg';
import './App.css';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Card Validator</h1>
      </div>
      <CreditCard />
    </div>
  );
}

export default App;
