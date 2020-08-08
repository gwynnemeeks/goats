import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Inside Goats</h2>
        <button className="btn btn-warning">
          Goats <i class="fas fa-heartbeat">
        </i>
        </button>
      </div>
    );
  }
}

export default App;
