import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import "./style/app.css"
import Home from "./componentes/Home";
import Contador from "./componentes/Contador";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contador" component={Contador}/>
    </Switch>
  );
}

export default App;
