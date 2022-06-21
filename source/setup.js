console.log('test setup');
// add all jest-extended matchers
const matchers = require('jest-extended');
globalThis.expect.extend(matchers);

// or just add specific matchers
const { toBeArray, toBeSealed } = require('jest-extended');
globalThis.expect.extend({ toBeArray, toBeSealed });
