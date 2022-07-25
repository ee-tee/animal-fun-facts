import logo from './logo.svg';
import './App.css';

import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component
{
  render() {
    return (
      animalFacts
    );
  }
}

const title = '';

const background =
  <img className='background' alt='ocean' src='./images/ocean.jpg' />;

//toggle true/false to display or hide background image 
const showBackground = true;

const bubbles = (
  <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
  </div>
);

const showBubbles = true;

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button' 
      onClick={displayFact} />
  )
};

const animalFacts = (
  <div>
    <h1 id='title'>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {showBackground && background}
    {showBubbles && bubbles}
    <div className='animals'>{images}</div>
    <p id='fact' className='speech-bubble speech-bubble-visibility'></p>
  </div>
);

function displayFact(e) {
  const animalName = e.target.alt;
  const selectedAnimal = animals[animalName];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const funFact = selectedAnimal.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
  document.getElementsByClassName('speech-bubble-visibility')[0].removeAttribute('style', 'visibility: hidden'); 
  document.getElementsByClassName('speech-bubble-visibility')[0].setAttribute('style', 'visibility: visible'); 
};

ReactDOM.render(animalFacts, document.getElementById('root'));


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
