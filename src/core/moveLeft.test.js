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
  },
  {
    expected: [8, 2, null, null],
    row: [4, 4, 2, null]
  },
  {
    expected: [4, null, null, null],
    row: [2, null, 2, null]
  },
  {
    expected: [4, 2, null, null],
    row: [4, null, null, 2]
  },
  {
    expected: [4, 2, null, null],
    row: [2, 2, 2, null]
  },
  {
    expected: [8, 4, 2, null],
    row: [8, 4, 2, null]
  },
  {
    expected: [4, 2, null, null],
    row: [4, null, 2, null]
  },
  {
    expected: [8, 4, 2, null],
    row: [8, 2, 2, 2]
  },
  {
    expected: [8, 4, 4, null],
    row: [8, 4, 2, 2]
  },
  {
    expected: [8, 2, null, null],
    row: [4, 4, null, 2]
  },
  {
    expected: [16, 8, 2, null],
    row: [16, 4, 4, 2]
  },
  {
    expected: [32, 4, null, null],
    row: [16, 16, 2, 2]
  },
  {
    expected: [4, null, null, null],
    row: [null, 2, 2, null]
  },
  {
    expected: [64, 4, 2, null],
    row: [32, 32, 4, 2]
  },
  {
    expected: [2, 4, null, null],
    row: [null, null, 2, 4]
  },
  {
    expected: [4, null, null, null],
    row: [null, 2, null, 2]
  },
  {
    expected: [4, 8, 16, null],
    row: [null, 4, 8, 16]
  },
  {
    expected: [4, null, null, null],
    row: [null, null, 2, 2]
  },
  {
    expected: [8, 4, 2, null],
    row: [4, 4, 4, 2]
  },
  {
    expected: [4, 2, 4, null],
    row: [4, null, 2, 4]
  },
  {
    expected: [16, 2, 4, null],
    row: [16, null, 2, 4]
  },
  {
    expected: [4, 8, null, null],
    row: [null, 2, 2, 8]
  },
  {
    expected: [4, 2, null, null],
    row: [null, 2, 2, 2]
  },
  {
    expected: [4, 4, null, null],
    row: [2, 2, 2, 2]
  },
  {
    expected: [2, 8, null, null],
    row: [null, 2, 4, 4]
  },
  {
    expected: [4, 2, null, null],
    row: [2, 2, null, 2]
  },
  {
    expected: [2, 8, 2, null],
    row: [2, 4, 4, 2]
  },
  {
    expected: [2, 4, 4, null],
    row: [2, 4, 2, 2]
  },
  {
    expected: [4, 4, 2, null],
    row: [2, 2, 4, 2]
  },
  {
    expected: [2, 4, null, null],
    row: [null, 2, 4, null]
  },
  {
    expected: [4, 8, null, null],
    row: [2, null, 2, 8]
  },
  {
    expected: [4, 4, null, null],
    row: [4, 2, null, 2]
  }
];

scenarios.forEach(({ expected, row }) => {
  test(`${row} => ${expected}`, () => {
    expect(moveLeft(row)).toEqual(expected);
  });
});
