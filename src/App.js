import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Detail from './Detail'
import { render } from 'react-dom'
import { StrictMode, useState } from 'react';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';

const App = () => {
  const theme = useState('#999999')
  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  )
};

render(<StrictMode>
  <App />
</StrictMode>,
  document.getElementById('root')
)
