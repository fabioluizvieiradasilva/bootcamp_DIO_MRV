const usuarios = new Map();

usuarios.set('Fabio', 'Admin');
usuarios.set('Meire', 'User');
usuarios.set('Gio', 'Admin');
usuarios.set('Gabi', 'User');
usuarios.set('Giulia', 'Admin');

function getAdmin(map) {
    let admins = [];

    for ([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }        
    }

    return admins;    
}

console.log(getAdmin(usuarios));