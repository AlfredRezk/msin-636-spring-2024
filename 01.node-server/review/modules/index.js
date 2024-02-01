const {addUser, deleteUser, getUsers} = require('./my-module');

console.log(getUsers())
addUser('Sally')
console.log(getUsers())
deleteUser('Mike')
console.log(getUsers())

