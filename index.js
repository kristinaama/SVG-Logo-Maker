
// Import the node packages and directories required
const inquirer = require("inquirer");
const fs = require("fs");
//const { Triangle, Square, Circle } = require("lib/shapes.js");
//const generateLogo = require("./utils/generateLogo.js");

// userResponses() function will prompt the user to answer questions in the command line and generate a logo
function userResponses() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your logo text (up to three letters):'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be (enter color keyword or hexadecimal number):'
        },
        {
            type: 'input',
            name: 'shape',
            message: 'What shape would you like the logo to be (circle, triangle, or square):',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the logo shape to be(enter color keyword or hexadecimal number):'
        }
         ]) .then(() => console.log("logo generated!"));
    // ]) .then (function(results) {
    //     fs.createLogo("Logo.svg", results, (error) => {
    //         if (error) {
    //             console.error(error);
    //         } else {
    //             console.log("Success, logo generated!");
    //         }
    //     })
    // })
     };

// init() function will begin the userResponses() function
function init() {
    userResponses();
}
    
// The init() function will run when application starts
init();