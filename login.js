console.log('Sistema de Login v1.0');
function validarUsuario(user, pass) {
    if (user === 'admin' && pass === '12345') {
        return 'Bienvenido adusyt1';
    }
    return 'Error de credenciales';
}
