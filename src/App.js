import "./App.css";
import Topnav from "./Components/Topnav";
import Counter from "./Components/Counter";
import List from "./Components/List";
import Form from "./Components/Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Topnav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/counter" />} />
          <Route path="/counter" exact component={Counter} />
          <Route path="/form" exact component={Form} />
          <Route path="/list" exact component={List} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
