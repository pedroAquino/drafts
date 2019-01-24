const {
    add,
    concat
} = require('ramda');

test('import ramda', () => {
    expect(add(2,3)).toBe(5);
    expect(concat('Hello', ' World')).toBe('Hello World');
});