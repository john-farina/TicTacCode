<a name="readme-top"></a>

what i did in this project
Javascript
- Created whole project maipulating DOM in javascript (minimal styling with css)
- The state of this project is an array of 9 undefined variables
- the gamestate table is created in the scope and i return functions that help with maipulating the array for the game,
- creates a DOM table with 9 squares that correspond with the gamestate Array to allow users to play the game
- each square has a event lsitener that gets the round number and places the right tile accordingly "X or O" (gets put in as a 0 or a 1 for the gamestate), and wont allow users to click when the game has ended or computer is deciding
- each square on the table has its own animationLoop which is a setinterval listening to the array that goes with that square
- game logic is done by detecting if each of the marks go in a line or diagnal and gets updated in the gameloop which also includes updating text.
- The Random Bot is done by using recursion i am calling the same function over and over as it guesses a random number in the array and detecting if it is undefined. if its not undefined it runs again untill it finds one.
- Local Two player mode where it removes the bots and allows user to play for either X or O with one of there friends.

- went for a minimal design with minimal animations to show that u have won or lost



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Tic Tac Code</h1>

  <p align="center">
   A Tic Tac Toe game against a random bot, or a local multiplayer mode.
    <br />
    <a href="https://linktowebsite.com">View Live Demo</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">JavaScript</a>
      <ul>
        <li><a href="#installation">Game State</a></li>
        <li><a href="#installation">DOM Table Interaction</a></li>
            <ul>
                <li><a href="#installation">Squares</a></li>
            </ul>
        <li><a href="#installation">Random Bot</a></li>
        <li><a href="#installation">Game Logic</a></li>
        <li><a href="#installation">Local Two Player</a></li>
      </ul>
    </li>
    <li><a href="#usage">Design</a></li>
       <ul>
            <li><a href="#installation">Table</a></li>
            <li><a href="#installation">Animations</a></li>
        </ul>
    <li><a href="#contact">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

A web Tic Tac Toe game, play against a random bot. but its best to play it two player locally with a friend!

### Built With
 - JavaScript
 - CSS

## JavaScript

### Game State
For the Game state it relys on an array with 9 undefined values inside of it, then each other request to this array is only changing each undefined to either a 1 or 0 depending on who is choosing it.
Using a function to return more functions to easily add more spaces or remove them.

### DOM Table Interaction
Created all of the squares and text using DOM made the project without any html, all event listener logics are inside the squares
#### **Squares**
Each table has a set amount of 9 squares and each square are doing its own logic on click, it first sees if the round number is even and if it is that means its Player Two's turn, etc. it then sends the value either 0 or 1 depending on which player clicks. only allows to send values on the undefined squares <br/>
Squares are also running a animationLoop on themselves to detect which value to display in the square. example: if the value is 0 it will be an X, etc.

### Random Bot
The random guessing bot is using recursion to find an empty spot in the array. It guesses a random number through the length of the array, and if the spot it chose wasnt avalable *(undefined)* it will keep going untill it finds one.

### Game Logic

### Local Two Player

## Design

<!-- USAGE EXAMPLES -->
## Usage

To play against a bot all you have to do is press a square to start playing, and then the bot will choose their turn right after. <br/>
For Local Two Player press the multiplayer button, Player one chooses their square and then Player Two chooses after. Play untill you win!

<!-- CONTACT -->
## Contact

**John Farina** - johnfarina8@gmail.com

Project Link: [github.com/john-farina/Zoltar](https://github.com/john-farina/Zoltar)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





