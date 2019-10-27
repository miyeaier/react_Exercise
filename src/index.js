import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from 'react-router-dom'
import Svamp from "./Svamp"
import About from "./About"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return(
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Hello}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path= '/Svamp' component={Svamp}></Route>
      </Switch>
      < Hello />
      <Footer />
    </>
    )
};

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('app'));