module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i += 1) {
    const currentSymbol = str[i];
    const lastElement = stack[stack.length - 1];

    if (bracketsMap.has(currentSymbol)) {
      if (
        currentSymbol === bracketsMap.get(currentSymbol) &&
        lastElement === currentSymbol
      ) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else if (
      !stack.length ||
      bracketsMap.get(stack.pop()) !== currentSymbol
    ) {
      return false;
    }
  }

  return !stack.length;
};
