
import Admin from "./page/admin/admin";
import Login from "./page/login/login";
import {BrowserRouter,Route,Switch} from "react-router-dom";
function App() {
  return (
        <BrowserRouter>
              <Switch>
               <Route path="/login" component={Login}></Route>
               <Route path="/" component={Admin}></Route>
           </Switch>
        </BrowserRouter>
  );
}

export default App;
