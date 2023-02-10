const entries = new Map([
  ["name", "Léron"],
  ["Age", 25],
]);
console.log(entries);
console.log(Object.fromEntries(entries));

// Result
// Map(2) { 'name' => 'Léron', 'Age' => 25 }
// { name: 'Léron', Age: 25 }
