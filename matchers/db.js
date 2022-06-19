const chance = require('chance').Chance();

async function sleep(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function getProducts() {
	await sleep(1000);
    return [
        {
          id: chance.integer(),
          make: chance.word(),
          status: true,
          createdat: chance.date(),
          updatedat: new Date('aaaa') // Invalid Date
        },
        {
          id: chance.integer(),
          make: chance.word(),
          status: true,
          createdat: chance.date(),
          updatedat: new Date('2022/13/32')
        }];
}

module.exports = {
	getProducts
};
