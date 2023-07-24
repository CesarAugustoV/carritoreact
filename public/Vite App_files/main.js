import "/style.css"
import javascriptLogo from "/javascript.svg?import"
import viteLogo from "/vite.svg?import"
import { render, PokemonApp } from "/src/breakingbad-app.js/pokemonApp.js?t=1689360477639"

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <button id="recargar"> Recargar </button>
    <div class="card">
      
    </div>
  </div>
`
const element = document.querySelector('.card');

PokemonApp(element);
