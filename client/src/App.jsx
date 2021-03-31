import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

function App() {
  return (
    <BrowserRouter className="App">
      <h1>IronProfile</h1>
      <p>An App with Authentification. And Tailwind.</p>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
