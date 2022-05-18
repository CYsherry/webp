import './App.css';
import Email from './email';
import Password from './password';
import SIButton from './button';
import Title from './title';

function App() {
  return (
    <div className="App">
      {Title()}
      <br /><br />
      {Email()}
      <br />
      {Password()}
      <br /><br />
      {SIButton()}
    </div>
  );
}

export default App;
