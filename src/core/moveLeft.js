import fourElements from './fourElements';
import oneElement from './oneElement';
import threeElements from './threeElements';
import twoElements from './twoElements';

function allNull(row) {
  return row.every((element) => element === null);
}

function notNull(row) {
  return row.every((element) => element !== null);
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
  const copy = JSON.parse(JSON.stringify(row)); // deep copy

  if (allNull(copy)) {
    return copy;
  }

  if (null3(copy)) {
    return oneElement(copy);
  }

  if (null2(copy)) {
    return twoElements(copy);
  }

  if (null1(copy)) {
    return threeElements(copy);
  }

  if (notNull(copy)) {
    return fourElements(copy);
  }

  throw new Error(copy);
}

export default moveLeft;
