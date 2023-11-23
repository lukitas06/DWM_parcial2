let personas  = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        name: 'admin',
        lastname: 'admin',
        email: ''

    }
];



 const findUserByUserName =  (username) => {
    return personas.find((persona) => persona.username === username);
};

 const findUserById = (id) => {
    return personas.find((persona) => persona.id === id);
}

 const findUserByUserNameAndPassword = (username, password) => {
    return personas.find((persona) => persona.username === username && persona.password === password);
}

 const createUser = (user) => {
    const id = personas.length + 1;
    user.id = id;
    personas.push(user);
}

 const getUsers = () => {
    return personas;
}

export default {
    findUserByUserName,
    findUserById,
    findUserByUserNameAndPassword,
    createUser,
    getUsers
}