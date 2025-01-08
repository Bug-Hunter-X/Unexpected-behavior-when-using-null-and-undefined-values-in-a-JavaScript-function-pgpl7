function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null and undefined values
  }
  return a + b; // Regular addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(2, null)); // Output: null
console.log(foo(2, 3));   // Output: 5
console.log(foo(undefined, 5)); // Output: null
console.log(foo(2, undefined)); // Output: null