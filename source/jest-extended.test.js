test('passes when value is an array', () => {
	expect([]).toBeArray();
	expect([1]).toBeArray();
	expect(true).not.toBeArray();
});

test('passes when value is an array', () => {
	expect([]).toBeArrayOfSize(0);
	expect([1]).toBeArrayOfSize(1);
	expect(true).not.toBeArrayOfSize(1);
});

test('passes when given array values match the members of the set', () => {
	expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
	expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
});

// Assertion to verify Collections
test('passes when given array values match the partial members of the set', () => {
	expect([{ foo: 'bar', baz: 'qux' }]).toIncludeAllPartialMembers([
		{ foo: 'bar' }
	]);
	expect([
		{ foo: 'bar', baz: 'qux' },
		{ foo: 'bar', baz: 'qux' }
	]).toIncludeAllPartialMembers([{ foo: 'bar' }]);
	expect([
		{ foo: 'bar', baz: 'qux' },
		{ baz: 'qux' }
	]).toIncludeAllPartialMembers([{ foo: 'bar' }]);
	expect([{ baz: 'qux' }, { baz: 'qux' }]).not.toIncludeAllPartialMembers([
		{ foo: 'bar' }
	]);
	expect([
		{ baz: 'qux' },
		{ baz: 'qux' },
		{ foo: 'bar' }
	]).toIncludeAllPartialMembers([{ foo: 'bar' }]);
});

test('passes when given array values match any of the members in the set', () => {
	expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);
	expect([1, 2, 2]).toIncludeAnyMembers([2]);
	expect([1, 2, 2]).not.toIncludeAnyMembers([3]);
	expect([1]).toIncludeAnyMembers([2, 1, 3]);
});

test('passes when arrays match in a different order', () => {
	expect([1, 2, 3]).toIncludeSameMembers([3, 1, 2]);
	expect([{ foo: 'bar' }, { baz: 'qux' }]).toIncludeSameMembers([
		{ baz: 'qux' },
		{ foo: 'bar' }
	]);
});

test('passes when a string has a given substring', () => {
	expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain({
		foo: 'bar'
	});
	expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).toPartiallyContain({
		baz: 'qux'
	});
	expect([{ foo: 'bar', baz: 'qux', bax: 'zax' }]).not.toPartiallyContain({
		foo: 'qux'
	});
});

test('passes when all values in array pass given predicate', () => {
	const isOdd = (el) => el % 2 === 1;
	expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
	expect([1, 3, 4, 5, 7]).not.toSatisfyAll(isOdd);
});

test('passes when any value in array pass given predicate', () => {
	const isOdd = (el) => el % 2 === 1;
	expect([2, 3, 6, 8]).toSatisfyAny(isOdd);
	expect([2, 4, 8, 12]).not.toSatisfyAny(isOdd);
});

test('passes when value is a boolean', () => {
	expect(false).toBeBoolean();
	expect(true).toBeBoolean();
	expect(1 === 1).toBeBoolean();
	expect(1).not.toBeBoolean();
});

test('is jest cool', () => {
	const isJestCool = () => true;
	expect(isJestCool()).toBeTrue();
	expect(false).not.toBeTrue();
});

test('passes when value is a date', () => {
	expect(new Date()).toBeDate();
	expect('01/01/2018').not.toBeDate();
	expect(new Date('01/01/2018')).toBeDate();
	expect(undefined).not.toBeDate();
});

test('passes when Date is valid', () => {
	expect(new Date()).toBeValidDate();
	expect('01/01/2018').not.toBeValidDate();
	expect(new Date('01/01/2018')).toBeValidDate();
	expect(new Date('01/90/2018')).not.toBeValidDate();
	expect(undefined).not.toBeValidDate();
});

test('passes when input is after date', () => {
	expect(new Date('01/01/2019')).toBeAfter(new Date('01/01/2018'));
	expect('01/01/2018').not.toBeAfter(new Date('01/01/2019'));
});

test('passes when input is before date', () => {
	expect(new Date('01/01/2018')).toBeBefore(new Date('01/01/2019'));
	expect('01/01/2019').not.toBeBefore(new Date('01/01/2018'));
});
test('passes when input is equal to or after date', () => {
	expect(new Date('01/01/2019')).toBeAfterOrEqualTo(new Date('01/01/2018'));
	expect(new Date('01/01/2019')).toBeAfterOrEqualTo(new Date('01/01/2019'));
	expect('01/01/2018').not.toBeAfterOrEqualTo(new Date('01/01/2019'));
});

test('passes when input is equal to or before date', () => {
	expect(new Date('01/01/2018')).toBeBeforeOrEqualTo(new Date('01/01/2019'));
	expect(new Date('01/01/2018')).toBeBeforeOrEqualTo(new Date('01/01/2018'));
	expect('01/01/2019').not.toBeBeforeOrEqualTo(new Date('01/01/2018'));
});

test('passes when input is in given date range', () => {
	expect(new Date('05/01/2019')).toBeBetween(
		new Date('01/01/2019'),
		new Date('10/01/2019')
	);
	expect(new Date('05/01/2019')).toBeBetween(
		new Date('05/01/2019'),
		new Date('10/01/2019')
	);
	expect(new Date('01/01/2019')).not.toBeBetween(
		new Date('05/01/2019'),
		new Date('10/01/2019')
	);
});
