import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Detail from './Detail'
import { render } from 'react-dom'
import { StrictMode } from 'react';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to='/'>Adopt Me!</Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Detail />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

render(<StrictMode>
  <App />
</StrictMode>,
  document.getElementById('root')
)
