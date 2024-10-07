function createUsuario(name){
    return{
        id: Math.random(),
        name,
    }
}

let user = new createUsuario('Felipe');
let user2 = new createUsuario('Chanchito');
console.log(user, user2);