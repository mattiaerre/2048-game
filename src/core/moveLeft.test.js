import moveLeft from './moveLeft';

const scenarios = [
  {
    expected: [null, null, null, null],
    row: [null, null, null, null]
  },
  {
    expected: [2, null, null, null],
    row: [null, null, null, 2]
  },
  {
    expected: [2, null, null, null],
    row: [null, null, 2, null]
  },
  {
    expected: [2, null, null, null],
    row: [null, 2, null, null]
  },
  {
    expected: [2, null, null, null],
    row: [2, null, null, null]
  },
  {
    expected: [4, null, null, null],
    row: [null, null, 4, null]
  },
  {
    expected: [16, 8, 4, 2],
    row: [16, 8, 4, 2]
  },
  {
    expected: [4, null, null, null],
    row: [2, null, null, 2]
  },
  {
    expected: [4, 2, null, null],
    row: [4, 2, null, null]
  },
  {
    expected: [4, null, null, null],
    row: [2, 2, null, null]
  },
  {
    expected: [2, 8, null, null],
    row: [2, 4, 4, null]
  },
  {
    expected: [2, 8, 2, null],
    row: [2, 8, null, 2]
  }
];

scenarios.forEach(({ expected, row }) => {
  it(`${row} => ${expected}`, () => {
    expect(moveLeft(row)).toEqual(expected);
  });
});
