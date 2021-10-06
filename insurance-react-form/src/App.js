import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Create from './components/Create/Create';
import Read from './components/Read/Read';
import Update from './components/Update/Update'
import Delete from './components/Delete/Delete';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <div class="row">
        <div class="col-12 header">
          <h1> GB Car Insurance Portal </h1>
        </div>
      </div>

      <div className="main-content">
        <div className="App">
          <div>
            <Route exact path="/create" component={Create} />
          </div>
          <div>
            <Route exact path="/read" component={Read} />
          </div>
          <div>
            <Route exact path="/update" component={Update} />
          </div>
          <div>
            <Route exact path="/delete" component={Delete} />
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
