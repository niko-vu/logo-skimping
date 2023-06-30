const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const directory = path.join(__dirname, 'examples/');
const generateCircle = require('./lib/generateCircle');
const generateSquare = require('./lib/generateSquare');
const generateTriangle = require('./lib/generateTriangle');

function writeToFileCircle(data) {
    const filename = `${data.characters}.svg`;

    fs.writeFile(directory+filename, generateCircle(data), (err) => err ? console.log(err) : console.log('Success!')
    );
}

function writeToFileSquare(data) {
    const filename = `${data.characters}.svg`;

    fs.writeFile(directory+filename, generateSquare(data), (err) => err ? console.log(err) : console.log('Success!')
    );
}

function writeToFileTriangle(data) {
    const filename = `${data.characters}.svg`;

    fs.writeFile(directory+filename, generateTriangle(data), (err) => err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'characters',
                message: 'Choose 3 characters for the logo.',
            },
            {
                type: 'input',
                name: 'charcolor',
                message: 'Choose a color for the characters.',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape for your logo.',
                choices: ['circle', 'square', 'triangle'],
            },
            {
                type: 'input',
                name: 'shapecolor',
                message: 'Choose a color for your shape (enter a color keyword or hexadecimal number).',
            },
        ])

        .then((data) => {
            const filename = `${data.characters.toLowerCase().split(' ').join('')}.json`;
            fs.writeFile(directory+filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!')
            );

            if (data.shape == "circle") {
                writeToFileCircle(data);
            } else if (data.shape == "square") {
                writeToFileSquare(data);
            } else {
                writeToFileTriangle(data);
            };
        });
}

// Function call to initialize app
init();