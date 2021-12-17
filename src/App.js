import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=> {
  
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                key="health"
                pageSize={6}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}
export default App;
