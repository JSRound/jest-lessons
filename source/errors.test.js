class myError extends Error {
	constructor(message) {
		super(message);
		this.name = 'myError';
	}
}
class AnotherError extends Error {}

function compileAndroidCode() {
	throw new myError('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
	expect(() => compileAndroidCode()).toThrow();
	expect(() => compileAndroidCode()).toThrow(Error);

	// You can also use the exact error message or a regexp
	expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
	expect(() => compileAndroidCode()).toThrow(/JDK/);
	// Instances
	expect(() => compileAndroidCode()).toThrow(
		new Error('you are using the wrong JDK')
	);
	expect(() => compileAndroidCode()).toThrow(myError);
	expect(() => compileAndroidCode()).not.toThrow(AnotherError);
});
