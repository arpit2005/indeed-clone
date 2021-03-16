import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/home'
import SearchPage from './components/search page'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/jobs">
          <SearchPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
