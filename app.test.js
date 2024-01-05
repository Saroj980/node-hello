// app.test.js
const greet = require('./app');

describe('greet function', () => {
  test('should return a greeting message', () => {
    const result = greet('Node');
    expect(result).toBe('Hello, Node!');
  });

  test('should handle empty name', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });
});
