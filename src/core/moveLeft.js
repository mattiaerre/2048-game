import oneElement from './oneElement';
import fourElements from './fourElements';

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
    return oneElement(copy);
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
    // [X, null, X, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[2] === copy[0]
    ) {
      copy[0] = copy[0] + copy[2];
      copy[2] = null;
      return copy;
    }
    // [X, null, null, Y]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[0] !== copy[3]
    ) {
      copy[1] = copy[3];
      copy[3] = null;
      return copy;
    }
    // [X, null, Y, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[0] !== copy[2]
    ) {
      copy[1] = copy[2];
      copy[2] = null;
      return copy;
    }
    // [null, X, X, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[1] === copy[2]
    ) {
      copy[0] = copy[1] + copy[2];
      copy[1] = null;
      copy[2] = null;
      return copy;
    }
    // [null, null, X, Y]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] === null &&
      copy[3] !== copy[2]
    ) {
      copy[0] = copy[2];
      copy[1] = copy[3];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [null, X, null, X]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[3] === copy[1]
    ) {
      copy[0] = copy[3] + copy[1];
      copy[1] = null;
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [null, null, X, X]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] === null &&
      copy[3] === copy[2]
    ) {
      copy[0] = copy[3] + copy[2];
      copy[1] = null;
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [null, X, Y, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[2] !== copy[1]
    ) {
      copy[0] = copy[1];
      copy[1] = copy[2];
      copy[2] = null;
      copy[3] = null;
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
    // [X, X, Y, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[2] !== copy[1] &&
      copy[1] === copy[0]
    ) {
      copy[0] = copy[0] + copy[1];
      copy[1] = copy[2];
      copy[2] = null;
      return copy;
    }
    // [X, X, X, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[2] === copy[1] &&
      copy[1] === copy[0]
    ) {
      copy[0] = copy[0] + copy[1];
      copy[1] = copy[2];
      copy[2] = null;
      return copy;
    }
    // [X, Y, Z, null]
    if (
      copy[3] === null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[2] !== copy[1] &&
      copy[1] !== copy[0]
    ) {
      return copy;
    }
    // [X, X, null, Y] || [X, X, null, X]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[3] !== copy[1] &&
      copy[1] === copy[0]
    ) {
      copy[0] = copy[0] + copy[1];
      copy[1] = copy[3];
      copy[3] = null;
      return copy;
    }
    // [null, X, Y, Z]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[3] !== copy[2] &&
      copy[2] !== copy[1]
    ) {
      copy[0] = copy[1];
      copy[1] = copy[2];
      copy[2] = copy[3];
      copy[3] = null;
      return copy;
    }
    // [X, null, Y, X]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[3] !== copy[2] &&
      copy[3] === copy[0] &&
      copy[2] !== copy[0]
    ) {
      copy[1] = copy[2];
      copy[2] = copy[3];
      copy[3] = null;
      return copy;
    }
    // [X, null, Y, Z]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[3] !== copy[2] &&
      copy[2] !== copy[0]
    ) {
      copy[1] = copy[2];
      copy[2] = copy[3];
      copy[3] = null;
      return copy;
    }
    // [null, X, X, Y]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[3] !== copy[2] &&
      copy[2] === copy[1]
    ) {
      copy[0] = copy[1] + copy[2];
      copy[1] = copy[3];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [null, X, X, X]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[3] === copy[2] &&
      copy[2] === copy[1]
    ) {
      copy[0] = copy[1] + copy[2];
      copy[1] = copy[3];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [null, X, Y, Y]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] !== null &&
      copy[0] === null &&
      copy[3] === copy[2] &&
      copy[2] !== copy[1]
    ) {
      copy[0] = copy[1];
      copy[1] = copy[2] + copy[3];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [X, X, null, X]
    if (
      copy[3] !== null &&
      copy[2] === null &&
      copy[1] !== null &&
      copy[0] !== null &&
      copy[3] === copy[1] &&
      copy[1] === copy[0]
    ) {
      copy[0] = copy[0] + copy[1];
      copy[1] = copy[3];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
    // [X, null, X, Y]
    if (
      copy[3] !== null &&
      copy[2] !== null &&
      copy[1] === null &&
      copy[0] !== null &&
      copy[3] !== copy[2] &&
      copy[2] === copy[0]
    ) {
      copy[0] = copy[0] + copy[2];
      copy[1] = copy[3];
      copy[2] = null;
      copy[3] = null;
      return copy;
    }
  }

  // 4 elements
  if (notNull(row)) {
    return fourElements(copy);
  }

  throw new Error(copy);
}

export default moveLeft;
