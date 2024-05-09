function Usuario() {
    this.name = 'Joaquín';

    let log = function(){
        console.log('Logging...');
    }
    this.guardar = function(){
        log();
        console.log('guardando...');
    }
}

const usuario = new Usuario();
usuario.guardar();
