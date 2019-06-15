import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import Contato from './Contato'
import Campanhas from './Campanhas'
import Footer from './Footer'

import base from './base'

class App extends Component {
  render(){
    return (
      <Router>
        <div>      
          <Header />
          <Route exact path='/' component={Home} /> 
          <Route exact path='/sobre' component={Sobre} /> 
          <Route exact path='/contato' component={Contato} />
          <Route exact path='/campanhas' component={Campanhas} /> 
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
