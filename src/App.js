import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="grid-container">

        <header className="App-header">
          <h1 className="App-logo App-title">
            <a href="/">
              <img src="/assets/images/bloc_jams_logo.png" alt="bloc jams logo" />
            </a>
          </h1>
          <nav className="App-nav">
            <ul>
              <li className="App-nav-li"><Link to='/' className="App-nav-link">Landing</Link></li>
              <li className="App-nav-li"><Link to='/library' className="App-nav-link">Library</Link></li>
            </ul>
          </nav>
        </header>

        <main className="App-intro middle">
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>

        <footer className="App-footer">
          <p className="App-footer-point">About</p>
          <p className="App-footer-point">Contact</p>
          <p className="App-footer-point">FAQ</p>
        </footer>

      </div>
    );
  }
}

export default App;
