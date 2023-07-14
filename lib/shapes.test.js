// Shape test...?
const shape1 = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// when you are testing . you want to know the getConsoleOutput..........

// expect(carOne.color).toBe("black")

// // TODO: Import the Validate class.
// const Validate = require('../lib/shapes');

// describe('Validate', () => {
//     describe('invalid', () => {
//         it('should return false for an empty password', () => {
//             const str = '';
//                 // empty string....
//             const result = new Validate().isPassword(str);
            
//             expect(result).toEqual(false)
//                 // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
//         });
//     });
// });

