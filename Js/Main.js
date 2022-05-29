
// ------Funcion de cambio de pantalla------

const cambiar = (pantalla) => {
    
    let arrPantallas = ['inicio', 'seleccion', 'carrera', 'final'];
    arrPantallas = arrPantallas.filter((val) => !pantalla.includes(val));
    document.getElementById(pantalla).style.display ='flex';
        for (let _pantalla of arrPantallas){
            document.getElementById(_pantalla).style.display = 'none';
        } 
}

//------Seleccion del piloto-----------

const elegirPiloto = (pilotoSeleccionado) => {
    if(player1.length == 1){
        player1.push()
    }
}