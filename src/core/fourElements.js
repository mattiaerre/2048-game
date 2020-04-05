function allDifferent(row) {
  return row[3] !== row[2] && row[2] !== row[1] && row[1] !== row[0];
}

function fourElements(copy) {
  if (allDifferent(copy)) {
    return copy;
  }
  // [X, Y, Y, Y]
  if (copy[3] === copy[2] && copy[2] === copy[1] && copy[1] !== copy[0]) {
    copy[1] = copy[1] + copy[2];
    copy[2] = copy[3];
    copy[3] = null;
    return copy;
  }
  // [X, Y, X, X] || [X, Y, Z, Z]
  if (copy[3] === copy[2] && copy[2] !== copy[1] && copy[1] !== copy[0]) {
    copy[2] = copy[2] + copy[3];
    copy[3] = null;
    return copy;
  }
  // [X, Y, Y, X] || [X, Y, Y, Z]
  if (copy[3] !== copy[2] && copy[2] === copy[1] && copy[1] !== copy[0]) {
    copy[1] = copy[1] + copy[1];
    copy[2] = copy[3];
    copy[3] = null;
    return copy;
  }
  // [X, X, Y, Y]
  if (copy[3] === copy[2] && copy[2] !== copy[1] && copy[1] === copy[0]) {
    copy[0] = copy[0] + copy[1];
    copy[1] = copy[2] + copy[3];
    copy[2] = null;
    copy[3] = null;
    return copy;
  }
  // [X, X, Y, X] || [X, X, Y, Z]
  if (copy[3] !== copy[2] && copy[2] !== copy[1] && copy[1] === copy[0]) {
    copy[0] = copy[0] + copy[1];
    copy[1] = copy[2];
    copy[2] = copy[3];
    copy[3] = null;
    return copy;
  }
  // [X, X, X, Y]
  if (copy[3] !== copy[2] && copy[2] === copy[1] && copy[1] === copy[0]) {
    copy[0] = copy[0] + copy[1];
    copy[1] = copy[2];
    copy[2] = copy[3];
    copy[3] = null;
    return copy;
  }
  // [X, X, X, X]
  if (copy[3] === copy[2] && copy[2] === copy[1] && copy[1] === copy[0]) {
    copy[0] = copy[0] + copy[1];
    copy[1] = copy[2] + copy[3];
    copy[2] = null;
    copy[3] = null;
    return copy;
  }
}

export default fourElements;
