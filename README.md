# trello_clone

Challenge is to **only** use web components aside from vanilla HTML,CSS,JS.

## Installation Guide

 1. Install [JSON Server](https://github.com/typicode/json-server) for the API calls
 2. Find the server directory inside /materials/db.json
 3. run `json-server --watch db.json`
 4. Navigate to "board.html" through a Chrome browser
 5. Currently only can read (GET) and create (POST) columns while cards can only be read (GET)

## Structure of application

 - css
   - style.css (holds the main styling for board.html)
 - js
   - card.js (web component for the trello-like cards)
   - column.js (web component for the trello-like columns)
   - initialize.js (handles the API calls)
 - materials
   - db.json (holds the temporary database)
 - board.html (where all the scripts run)

## MVP

 - [x] Create Columns
 - [x] Read Columns
 - [ ] Update Columns
 - [ ] Delete Columns
 - [ ] Create Cards
 - [x] Read Cards
 - [ ] Update Cards
 - [ ] Delete Cards
 - [ ] Drag and drop cards into columns

 ## Challenges

 1. Drag and drop function
 2. Creating cards in the specific columns
 3. Updating and deleting cards & columns

 ## Furthers

 - Search function for the cards
 - Description function for cards
 - Extending the cards to see the description
 - Making it responsive and animating it



 
