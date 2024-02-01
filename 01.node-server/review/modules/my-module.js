const users = ['John', 'Mike', 'Tammy']
function getUsers(){
    return users;
}

function addUser(user){
    users.push(user);
}
function deleteUser(user){
    let index = users.indexOf(user)
    users.splice(index, 1)
}

module.exports = {getUsers, deleteUser, addUser}