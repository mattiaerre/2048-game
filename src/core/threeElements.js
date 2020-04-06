function threeElements(copy) {
  // [X, null, Y, Y]
  if (
    copy[3] !== null &&
    copy[2] !== null &&
    copy[1] === null &&
    copy[0] !== null &&
    copy[3] === copy[2] &&
    copy[2] !== copy[0]
  ) {
    copy[1] = copy[2] + copy[3];
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
    copy[3] !== copy[1] &&
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
  // [X, null, Y, X] || [X, null, Y, Z]
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
  // [null, X, X, Y] || [null, X, X, X]
  if (
    copy[3] !== null &&
    copy[2] !== null &&
    copy[1] !== null &&
    copy[0] === null &&
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
  // [X, null, X, Y] || [X, null, X, X]
  if (
    copy[3] !== null &&
    copy[2] !== null &&
    copy[1] === null &&
    copy[0] !== null &&
    copy[2] === copy[0]
  ) {
    copy[0] = copy[0] + copy[2];
    copy[1] = copy[3];
    copy[2] = null;
    copy[3] = null;
    return copy;
  }
  // [X, Y, null, Y]
  if (
    copy[3] !== null &&
    copy[2] === null &&
    copy[1] !== null &&
    copy[0] !== null &&
    copy[3] === copy[1]
  ) {
    copy[1] = copy[1] + copy[3];
    copy[2] = null;
    copy[3] = null;
    return copy;
  }

  throw new Error(copy);
}

export default threeElements;
