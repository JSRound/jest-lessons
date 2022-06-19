test('match collection', () => {
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
