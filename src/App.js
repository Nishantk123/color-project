import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import User from "./component/User";
import Header from "./component/Header";
import SideNav from "./component/SideNav";
import List from "./component/List";
import Feature from "./component/Feature";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className=" d-flex">
          <div>
            <SideNav />
          </div>
          <div className="p-3 w-100">
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/list" component={List} />
            <Route exact path="/feature" component ={Feature} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
