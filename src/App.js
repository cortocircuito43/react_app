import React from 'react'
import './normalize.css'
import './App.css';
import {CardPreview } from './components/cardPreview'

function App() {
  return (
    <div >
      <header>
        <h1>Study<span className="titleHighlight">Deck</span>App</h1>
        <h2>Retention through Repetition</h2>
      </header>
      <main>
        <h3>FlaschCards</h3>
        <div className='gridContainer'>
         <CardPreview term="What does a duck say"/>
         <CardPreview term="What does a perro say"/>
         <CardPreview term="What does a gato say"/>
         
        </div>
      </main>
    </div>
  );
}

export default App;
