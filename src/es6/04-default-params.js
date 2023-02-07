function newUser(name, age, country) {
    var name = name || 'Léron';
    var age = age || 25;
    var country = country || 'MX';
    console.log(name, age, country);
}
newUser();
newUser('Francisco', 26, 'CO')

function newAdmin(name= 'Léron', age = 25, country = 'MX'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Francisco', 26, 'CO');