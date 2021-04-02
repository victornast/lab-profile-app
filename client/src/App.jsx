import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

function App() {
  useEffect(() => {
    document.title = 'Profile App';
  }, []);

  return (
    <BrowserRouter>
      <main className="grid place-content-center min-h-screen bg-gradient-to-r from-green-900 to-green-600">
        <div className="bg-oval bg-no-repeat w-card min-h-card px-12 py-9">
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
