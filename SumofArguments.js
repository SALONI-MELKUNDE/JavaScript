function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
      items = [...items[0]];
    return items.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum([1, 2, 3, 4])); // Output: 10
console.log(sum()); // Output: 0
