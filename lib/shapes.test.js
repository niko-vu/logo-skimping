// Shape test...?
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// when you are tetsting . you want to know the getConsoleOutput..........

expect(carOne.color).toBe("black")

// // TODO: Import the Validate class.
// const Validate = require('../validate');

// // TODO: Describe a testing suite for checking the functionality of the Validate class.
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

