const _ = require('lodash');

function fetchData(data, timeout = 1000) {
	return new Promise((resolve, reject) => {
		const resolver = _.isError(data) ? reject : resolve;
		setTimeout(resolver, timeout, data);
	});
}
const fetchError = () => Promise.reject('error');
const fetchThrowError = async () => {
	throw new Error('async error');
};
const fetchGenerateError = async () => {
	return { a: 3 }.splice();
};

test('the fetch throws an error', async () => {
	await expect(fetchThrowError()).rejects.toThrow('async error');
});

test('the fetch generate an error', async () => {
	await expect(fetchGenerateError()).rejects.toThrow();
	await expect(fetchGenerateError()).rejects.toThrow(
		'{(intermediate value)}.splice is not a function'
	);
});

test('the data is peanut butter', async () => {
	await expect(fetchData('peanut butter')).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
	await expect(fetchError()).rejects.toMatch('error');
});
