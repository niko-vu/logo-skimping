// Function to generate TRIANGULAR SVG file based on user input
function generateTriangle(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" x="75" y="30" width="150" height="150" fill="${data.shapecolor}" />
    
    <text x="150" y="168" font-size="60" text-anchor="middle" fill="${data.charcolor}">${data.characters}</text>
    
    </svg>
    `;
}

module.exports = generateTriangle;