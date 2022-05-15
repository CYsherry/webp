import './App.css';
import cguLogin from './cguLogin';
import userNameLabel from './userNameLabel';
import userNameInput from './userNameInput';
import passwordLabel from './passwordLabel';
import passwordInput from './passwordInput';
import button from './button';

function App() {
  return (
    <div className="App">
      {cguLogin()}
      <form>
        {userNameLabel()}
        {userNameInput()}
        <br /><br />
        {passwordLabel()}
        {passwordInput()}
        <br /><br />
        {button()}
      </form>
    </div>
  );
}

export default App;
