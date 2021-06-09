import validator from 'validator';

const options = {
  min: 0,
  max: 255
};

/**
 * @param {string[]} numbers to validate
 * @returns {string[]} errors if there are any
 */
function validate(numbers) {
  let errors = [];
  for (let i = 0; i < numbers.length; i++) {
    errors.push('');

    if (!numbers[i]) {
      errors[i] = 'Field Required';
    } else if (!validator.isInt(numbers[i], options)) {
      errors[i] = 'Invalid number';
    }
  }
  return errors;
}

export default validate;