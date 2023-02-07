// Enahced object literals
function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  };
}

console.log(newUser("Léron", 25, "CO", 1));
