
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo");

// Create an array of questions for user input and generate a ReadMe file
function userResponses() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your logo (up to three letters):'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the text to be:'
        },
        {
            type: 'input',
            name: 'shape',
            message: 'What shape would you like the logo to be (circle, triangle, or square):'
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the logo shape to be::'
        }
    ]) .then (function(results) {
        const outputLogo = generateLogo(results);
        fs.writeFile("GeneratedLogo.svg", outputLogo, (error) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Success!");
            }
        })
    })
    };
    
    // Create a function to initialize app
    function init() {
        responses();
    }
    
    // Function call to initialize app
    init();