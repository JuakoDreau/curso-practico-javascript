let objeto={name: 'Juako'};

function agregarId(obj){
    if (typeof obj === 'object') {
        obj.id=Math.random();
    }
    return obj;
}

agregarId(objeto);
console.log(objeto);