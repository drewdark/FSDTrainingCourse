import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';
import Update from './components/Update/Update'
import Delete from './components/Delete/Delete';
import Admin from './components/Admin/Admin';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './images/AllstateLogo.png';

function App() {
  return (
    <BrowserRouter>
      <div class="ui top fixed menu header">
        <a class="item" href='/'>
          <img alt='Allstate Logo' src={logo} />
        </a>
        <h1> GB Car Insurance Portal </h1>
        <a class="menu-item" href='/create'>CREATE RECORD</a>
        <a class="menu-item" href='/admin'>ADMIN PANEL</a>
      </div>

      <div className="main-content">
        <div className="App">
          <div>
            <Route exact path="/create" component={Create} />
            <Route exact path="/read" component={Read} />
            <Route exact path="/update" component={Update} />
            <Route exact path="/delete" component={Delete} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
