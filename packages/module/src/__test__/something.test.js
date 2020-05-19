const { log, log2 } = require('./index');

test('log test', () => {
  expect(log()).toBe('some meaningful message!');
});

test('log2 test', () => {
  expect(log2()).toBe('some meani;wlq;lwqpqpwngful message? 21.');
});
