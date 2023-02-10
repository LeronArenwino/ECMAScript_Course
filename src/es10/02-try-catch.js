try {
  hello();
} catch (error) {
  console.log(error);
}

// Result
// ReferenceError: hello is not defined

try {
  anotherFn();
} catch {
  console.log("This is an error!");
}

// Result
// This is an error!
