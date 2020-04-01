function allDifferent(row) {
  return row[3] !== row[2] && row[2] !== row[1] && row[1] !== row[0];
}

function allNull(row) {
  return row.every((current) => current === null);
}

function notNull(row) {
  return row.every((current) => current !== null);
}

function nullCount(count) {
  return (row) =>
    row.reduce((accumulator, current) => {
      if (current === null) {
        accumulator += 1;
      }
      return accumulator;
    }, 0) === count;
}

function null1(row) {
  return nullCount(1)(row);
}

function null2(row) {
  return nullCount(2)(row);
}

function null3(row) {
  return nullCount(3)(row);
}

function moveLeft(row) {
  const copy = [...row];
  if (allNull(row)) {
    return copy;
  }

  // one element
  if (null3(row)) {
    // [null, null, null, X]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] === null &&
      copy[0] === null
    ) {
      copy[0] = copy[3];
      copy[3] = null;
      return copy;
    }
    // [null, null, X, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] === null
    ) {
      copy[0] = copy[2];
      copy[2] = null;
      return copy;
    }
    // [null, X, null, null]
    if (
      copy[3] === null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] === null
    ) {
      copy[0] = copy[1];
      copy[1] = null;
      return copy;
    }
    // [X, null, null, null]
    if (
      copy[3] === null &&
      copy[2] === null &&
      copy[1] === null &&
      copy[0] !== null
    ) {
      return copy;
    }
  }

  // 2 elements
  if (null2(row)) {
    // [X, null, null, X]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[3] === copy[0]
    ) {
      copy[0] = copy[3] + copy[0];
      copy[3] = null;
      return copy;
    }
    // [X, X, null, null]
    if (
      copy[3] === null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[1] === copy[0]
    ) {
      copy[0] = copy[0] + copy[1];
      copy[1] = null;
      return copy;
    }
    // [null, X, null, Y]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[3] !== copy[1]
    ) {
      copy[0] = copy[1];
      copy[1] = copy[3];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [X, Y, null, null]
    if (
      copy[3] === null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[1] !== copy[0]
    ) {
      return copy;
    }
  }

  // 3 elements
  if (null1(row)) {
    // [X, null, Y, Y]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[3] === copy[2]
    ) {
      copy[1] = copy[3] + copy[2];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [X, Y, Y, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[2] === copy[1] &&
      copy[1] !== copy[0]
    ) {
      copy[1] = copy[1] + copy[2];
      copy[2] = null;
      return copy;
    }
    // [X, Y, null, X]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[1] !== copy[0]
    ) {
      copy[2] = copy[3];
      copy[3] = null;
      return copy;
    }
  }

  // 4 elements
  if (notNull(row)) {
    if (allDifferent(row)) {
      return copy;
    }
  }
  throw new Error(copy);
}

export default moveLeft;
