const user = { username: "léron", age: 25, country: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);

// Result
// léron
// { age: 25, country: 'CO' }
