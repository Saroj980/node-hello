// app.test.js
const greet = require('./app');

describe('greet function', () => {
  test('should return a greeting message', () => {
    const result = greet('Node');
    expect(result).toBe('Hello, Node!');
  });

test('intentional error: greeting should be "Hola, Mundo!"', () => {
  const result = greet();
  expect(result).toBe('Hola, Mundo!'); // Intentional error, should fail
});

