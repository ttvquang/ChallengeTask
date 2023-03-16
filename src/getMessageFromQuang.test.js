const { getMessageFromDevin } = require('./getMessageFromQuang');

const urls = [
  'http://www.devinnguyen.vn/devin0',
  'http://www.devinnguyen.vn/devin1',
  'http://www.devinnguyen.vn/devin2',
  'http://www.devinnguyen.vn/devin3',
];

// const urls = ['http://www.devinnguyen.vn/devin0']
 

// test('Should not throw any err', () => {
//   expect.assertions(1);
//   expect(async () => await getMessageFromDevin(urls)).not.toThrow(); 
// });

// test('Should responses to be correct', async () => {
//   expect.assertions(5);
//   const results = await getMessageFromDevin(urls);

//   expect(results.length).toBe(4);
//   expect(results[0]).toEqual({ 'Devin Nguyen': 'MY NAME IS DEVIN' });
//   expect(results[1]).toEqual({ 'Devin Nguyen': 'mynameisThang' });
//   expect(results[2]).toEqual({ 'Devin Nguyen': 'DiegoAndDevinAreBrother' });
//   expect(results[3]).toEqual({ 'FAILED': 'The request has been failed' });
// });

test('Should the code to be executed in less than 400ms', async () => {
  expect.assertions(2);

  const startTime = process.hrtime();
  await getMessageFromDevin(urls);
  // Promise.all(promiseArray);
  const [ seconds, nanos ] = process.hrtime(startTime);
  
  expect(seconds).toBe(0);
  expect(nanos / 1000 / 1000).toBeLessThan(400);
  // expect(nanos / 1000 / 1000).toBeLessThan(900);
});
