import {Route,Switch,BrowserRouter} from 'react-router-dom'
import SignUp from "./compnents/SignUp"
import Login from "./compnents/Login"
import Home from "./compnents/Home"
import Header from "./compnents/Header"
import Cars from "./compnents/Cars"
import CarItemDetails from './compnents/CarItemDetails'
import Rent from "./compnents/Rent"
import Payment from "./compnents/Payment"

import './App.css';
import Footer from './compnents/Footer'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/signup" component = {SignUp} />
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/header" component = {Header} />
      <Route exact path = "/cars" component = {Cars} />
      <Route exact path = "/cars/:id" component = {CarItemDetails} />
      <Route exact path = "/rent/:id" component = {Rent} />
      <Route exact path = "/rent/:id/payment" component = {Payment} />
      <Route exact path="/footer" component={Footer}/>
    </Switch>
  </BrowserRouter>
)

export default App;
