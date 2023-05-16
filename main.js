array = [];

for (let i = 100; i >= 10; i -= 2) {
  array.push(i);
}
console.log(array);
// Random Library

// Return a random decimbal b/t low (inclusive) and high (exclusive)
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}

// Return a random integer b/t low (inclusive) and high (exclusive)
function randomInt(low, high) {
  return Math.floor(randomDec(low, high));
}

// Return a random rgb color- 'rgb(__, __, __)'
function randomRGB() {
  return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(
    0,
    256
  )})`;
}
