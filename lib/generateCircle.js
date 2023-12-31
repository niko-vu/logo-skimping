// SVG Example file

{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

// Function to generate CIRCULAR SVG file based on user input
function generateCircle(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${data.shapecolor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.charcolor}">${data.characters}</text>

    </svg>
    `;
}

module.exports = generateCircle;