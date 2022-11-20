// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checking an arbitrary number to be true', () => {
    // TODO
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
  });
test('checking my email to be true', () => {
    // TODO
    expect(functions.isEmail('bek001@ucsd.edu')).toBe(true);
});

test('checking my phone number to be false', () => {
    // TODO
    expect(functions.isStrongPassword('0000')).toBe(false);
});
test('checking my phone number to be false', () => {
    // TODO
    expect(functions.isHexColor('black')).toBe(false);
});