console.log('Sistema de Dashboard v2.0');
function validarUsuario(user, pass) {
    if (user === 'admin' && pass === '12345') {
        return 'Bienvenido al Dashboard';
    }
    return 'Acceso denegado';
}