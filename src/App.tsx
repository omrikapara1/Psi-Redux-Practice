import { Route } from "react-router-dom";

import HomePage from './components/homePage';

const App = () => {
  return (
      <div>
        <Route path="/" exact component={HomePage} />
      </div>
  );
}

export default App;
 