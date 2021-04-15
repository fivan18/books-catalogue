import { Route, Switch } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import Details from './pages/details/details.component';
import NotFound from './pages/not-found/not-found.component';
import Header from './layout/header/header.component';
import Progress from './layout/progress/progress.component';

function App() {
  return (
    <div className="app">
      <Header />
      <Progress />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:workId" component={Details} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
