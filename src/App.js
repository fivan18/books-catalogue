import { Route, Switch } from 'react-router';

import NotFound from './pages/not-found/not-found.component';
import Main from './pages/main/main.component';
import Header from './layout/header/header.component';
import Progress from './layout/progress/progress.component';

function App() {
  return (
    <div className="app">
      <Header />
      <Progress />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
