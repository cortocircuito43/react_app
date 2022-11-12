import React from 'react'
import './App.css';

function App() {
  return (
    <div >
      <header>
        <h1>Study Deck App</h1>
        <h2>Retention through Repetition</h2>
      </header>
      <main>
        <h3>FlaschCards</h3>
        <div>
          <div>
            <h4>Term goes Here</h4>
            <div>
              <button type="button">show Back</button>
              <button type="button">Edit</button>
              <button type="button">Delete</button>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
