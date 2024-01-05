// app.js
const greet = require('./app');

test('greeting should be "Hello, World!"', () => {
  const result = greet();
  expect(result).toBe('Hello, World!');
});

