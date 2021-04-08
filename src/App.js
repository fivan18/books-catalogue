import { Route, Switch } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import Details from './pages/details/details.component';
import Header from './layout/header/header.component';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:workId" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
