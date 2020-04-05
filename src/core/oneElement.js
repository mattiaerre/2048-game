function oneElement(copy) {
  const found = copy.find((element) => element != null);
  return [found, null, null, null];
}

export default oneElement;
