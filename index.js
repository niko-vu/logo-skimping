const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG');


// const svg = document.createElementNS('<http://www.w3.org/2000/svg>', 'svg')
// svg.setAttribute('width', '300');
// svg.setAttribute('height', '200');


function writeToFile(data) {
    const logo = 'logo';
    const filename = `${logo}.svg`;

    fs.writeFile(filename, generateSVG(data), (err) => err ? console.log(err) : console.log('Success!')
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
            name: 'txtcolor',
            message: 'Choose a color for the characters.',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo.',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Choose a color for your shape.',
        },
    ])

    .then((data) => {
        const filename = `${data.characters.toLowerCase().split(' ').join('')}.json`;
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!')
        );
        writeToFile(data);
    });
}

// Function call to initialize app
init();