/**
 * @author Jacob Reeb
 * @todo Movie kiosk
 * @version 1.01
*/

"use strict";
const PROMPT = require('readline-sync');

let movieTitle, movieRating = [];
let setContinueResponse; continueResponse;
let movieList = [];

/**
* @author Jacob Reeb
* @todo Main Dipsatch method 
*/

function main () {	
 while (continueResponse === 1) {
 movieList ();
 movieRating (); 
 printResults ();
 }
}

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
} 
//creates a continue resonse question 

function movieList () {
	movieTitle = PROMPT.question(`\nPlease enter your movie.`);
	movieList = [];
	movieList = movieList.push(`${movieTitle}`); 
}
//creates a movie list for users to ipnput data
function movieRating () {
	movieRating = PROMPT.question(`\nHow Was your movie 1-5.`);
	movieRating = []; 
	movieRating = movieRating.push(`${movieRating}`);
}
// creates a useer input area for a movie Rating 
function printResults () {
	console.log (movieList)
	console.log (movieRating) 
}
// shows the results