let a = 5;
let b = 10;

// Before Swap
console.log("Before Swap:");
console.log("a:", a);
console.log("b:", b);

// Swap without using temp
a = a + b; // a becomes 15
b = a - b; // b becomes 5 (original a)
a = a - b; // a becomes 10 (original b)

// After Swap
console.log("After Swap:");
console.log("a:", a);
console.log("b:", b);
