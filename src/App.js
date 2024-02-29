import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import List from './List';

function App() {
  return (
    <div className="cordova">
      <header className="header">
        
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container">
            <a href='/' className="navbar-brand">Clean and Unclean</a>
            </div>
          </nav>
      </header>
      <main>
        <div className="container mt-4">
          <h3>Get list</h3>
          <List />
        </div>
      </main>
    </div>
  );
}

export default App;
