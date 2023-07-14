// Function to generate RECTANGULAR SVG file based on user input
function generateSquare(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="75" y="30" width="150" height="150" fill="${data.shapecolor}" />
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.charcolor}">${data.characters}</text>
    
    </svg>
    `;
}

module.exports = generateSquare;