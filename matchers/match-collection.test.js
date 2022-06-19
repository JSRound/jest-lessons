const { getProducts } = require('./db');

test('match of a property for SOME element of the collection', () => {
	const state = [
		{ type: 'START', data: 'foo' },
		{ type: 'START', data: 'baz' },
		{ type: 'END', data: 'foo' }
	];
	expect(state).toEqual(
		// 1
		expect.arrayContaining([
			// 2
			expect.objectContaining({
				// 3
				type: 'END' // 4
			})
		])
	);
});

test('failing match of a property for SOME element of the collection', () => {
	const state = [
		{ type: 'START', data: 'foo' },
		{ type: 'START', data: 'baz' },
		{ type: 'START', data: 'foo' }
	];
	expect(state).not.toEqual(
		// 1
		expect.arrayContaining([
			// 2
			expect.objectContaining({
				// 3
				type: 'END' // 4
			})
		])
	);
});

test('match type of several properties for all the elements in a collection', async () => {
	await expect(getProducts()).resolves.toEqual(
		expect.arrayContaining([
			expect.objectContaining({
				id: expect.any(Number),
				make: expect.any(String),
				status: expect.any(Boolean),
				createdat: expect.any(Date),
				updatedat: expect.any(Date) // accepts Invalid Date
			})
		])
	);
});
