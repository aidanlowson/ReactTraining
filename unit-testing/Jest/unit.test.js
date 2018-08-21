//  Testing a function
const sum = require('./sum');

test('Adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//  Truthy Test
test('Truthy Test', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).toBeFalsy();
  expect(n).not.toBeTruthy();
})

//  Comparing Numbers
test('Two + Two Number Compare', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
})

//  Testing Strings
test('No I in team!', () => {
  expect('team').not.toMatch(/I/)
});

test('There is \'Aid\' in Aidan', () => {
  expect('Aidan').toMatch(/Aid/)
});

//  Arrays
const arrayList = [
  'keyboard',
  'key',
  'kettle',
  'kiln'
];

test('Array list has kettle in', () => {
  expect(arrayList).toContain('kettle');
});


//  toThrow: test if a particular function throws an error
// function compileAndroidCode() {
//   throw new ConfigError('you are using the wrong JDK');
// }

// test('compiling android goes as expected', () => {
//   expect(compileAndroidCode).toThrow();
//   expect(compileAndroidCode).toThrow(ConfigError);

//   // You can also use the exact error message or a regexp
//   expect(compileAndroidCode).toThrow('you are using the wrong JDK');
//   expect(compileAndroidCode).toThrow(/JDK/);
// });

//  Callback Functions
// test('callback function', done => {
//   function callback(data) {
//     expect(data).toBe('callback');
//     done();
//   }

//   fetchData(callback);
// })