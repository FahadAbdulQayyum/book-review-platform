import { useState } from 'react'
import './App.css'
import Home from './components/home'
import Login from './components/login'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Login /> */}

      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/signup">
            <SignUp />
          </Route> */}
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
