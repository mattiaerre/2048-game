function twoElements(copy) {
  // [X, null, null, X]
  if (
    copy[3] !== null &&
    copy[2] === null &&
    copy[1] === null &&
    copy[0] !== null &&
    copy[3] === copy[0]
  ) {
    copy[0] = copy[0] + copy[3];
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
    copy[3] !== copy[0]
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
    copy[2] !== copy[0]
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
    copy[2] === copy[1]
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
    copy[0] = copy[1] + copy[3];
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
    copy[0] = copy[2] + copy[3];
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

export default twoElements;
