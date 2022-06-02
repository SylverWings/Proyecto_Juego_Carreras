


//----------------------- Declaracion de la Clase Piloto ----------------//

class Pilot {

    constructor(nombre, velocidadMax, velocidadMin) {
        this.nombre = nombre,
            this.velocidadMax = velocidadMax,
            this.velocidadMin = velocidadMin,
            this.velocidadActual = 0,
            this.metrosRecorridos = 0,
            this.llegarMeta = false;
    }

    //---------------- Funcion velocidad random --------------------------//

    acelerar() {
        let ramNumber = parseInt(Math.random() * (this.velocidadMax - this.velocidadMin) + this.velocidadMin);
        this.velocidadActual = ramNumber
        this.metrosRecorridos = this.metrosRecorridos + ramNumber;
    }
}


//-------------------- Declaracion de la clase Circuito -------------------//

class Circuito {
    constructor(nombre, metrosTotales, participantes) {
        this.nombre = nombre,
            this.metrosTotales = metrosTotales,
            this.participantes = participantes;
    } 
    
            
  //---------------------------- Funsion de quien llega primero ------------------------------//
    meta(ganador){
        let mensaje = document.getElementById("res");        
        if(player1[0] == ganador.nombre){
            mensaje.textContent = "Enhorabuena! Has ganado la carrera!!";
        }else{
            mensaje.textContent = `Has perdido la carrera... El ganador ha sido ${ganador.nombre}`;
        }
        cambiar("final") 
    }
    
    correr() {
        const divMeta = document.getElementById("meta")
        const posicion = divMeta.getBoundingClientRect()
        const divMetaX = posicion.left
        
        for (let i = 0; i < this.participantes.length; i++) {
            this.participantes[i].acelerar();
            moveDiv(this.participantes[i].nombre, this.participantes[i], this.metrosTotales);
            let corredor = document.getElementById(this.participantes[i].nombre)
            let posicionCorredor = corredor.getBoundingClientRect();
            let corredorX = posicionCorredor.left                           
            if(corredorX + corredor.offsetWidth >= divMetaX){                             
                this.meta(this.participantes[i]);                    
            }                
        }        
    }    
}

const moveDiv = (div, piloto, metrosCarrera) => {
    const porcentaje = (piloto.metrosRecorridos * 100) / metrosCarrera;
    let divCorredor = document.getElementById(div);
    divCorredor.style.left = porcentaje + '%';
}
//---------------------- Instanciar Pilotos ------------------------------//

let vaina1 = new Pilot("Anakin", 80, 5);
let vaina2 = new Pilot("Sebulba", 75, 10);
let vaina3 = new Pilot("Aldar", 70, 15);
let vaina4 = new Pilot("Mars", 75, 10);

let allVainas = [vaina1, vaina2, vaina3, vaina4];

//-------------------- Instanciar Circuito -----------------------------//

let circuito = new Circuito("Tatooine", 150, allVainas);

document.querySelector(".acelera").addEventListener('click', function (event) {
    circuito.correr();
})