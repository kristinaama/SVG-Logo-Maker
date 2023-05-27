
// Import the node packages and directories required
const inquirer = require("inquirer");
const fs = require("fs");
//const { Triangle, Square, Circle } = require("lib/shapes.js");

// userResponses() function will prompt the user to answer questions in the command line
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
                type: 'list',
                name: 'shape',
                message: 'What shape would you like the logo to be (circle, triangle, or square):',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would you like the logo shape to be(enter color keyword or hexadecimal number):'
            }
// Conditional statement will check
        ]).then(function (results) {
            if (results.shape == "circle") {
                fs.writeFile("logo.svg", `
                    <svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="${results.shapeColor}" />
                    <text x="150" y="110" font-size="50" text-anchor="middle" fill="${results.textColor}">${results.text}</text>
                    </svg>`, (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Generated logo!");
                }
            })
        } else if (results.shape == "square") {
                fs.writeFile("logo.svg", `
                    <svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="200" height="200" fill="${results.shapeColor}" />
                    <text x="110" y="110" font-size="50" text-anchor="middle" fill="${results.textColor}">${results.text}</text>
                    </svg>`, (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Generated logo!");
                }
            })
        } else {
                fs.writeFile("logo.svg", `
                    <svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150, 18 244, 182 56, 182" style="fill:${results.shapeColor};stroke-width:1" />
                    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${results.textColor}">${results.text}</text>
                    </svg>`, (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Generated logo!");
                }
            })
        }
    })
}

// init() function will begin the userResponses() function
function init() {
    userResponses();
}

// The init() function will run when application starts
init();