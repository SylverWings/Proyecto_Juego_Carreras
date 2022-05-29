
//----------------------- Declaracion de la Clase Piloto ----------------//

class Pilot{

    constructor(nombre, velocidadMax, velocidadMin){
        this.nombre = nombre,
        this.velocidadMax = velocidadMax,
        this.velocidadMin = velocidadMin,
        this.velocidadActual = 0,
        this.metrosRecorridos = 0,
        this.llegarMeta = false;
    }
    
    //---------------- Funcion velocidad random --------------------------//
    
    acelerar() {
        this.velocidadActual = parseInt(Math.random() * (this.velocidadMax - this.velocidadMin) + this.velocidadMin);
        this.metrosRecorridos();
        console.log("funciona")        
        
    }
}


//-------------------- Declaracion de la clase Circuito -------------------//

class Circuito{
    constructor(nombre, metrosTotales, participantes){
        this.nombre = nombre,
        this.metrosTotales = metrosTotales,
        this.participantes = participantes;
    }

    //--------------- Funsion de quien llega primero ----------------------//

    ganadorCarrera() {
        if(this.metrosRecorridos >= this.metrosTotales){
            console.log("Carrera finalizada");
            cambiar('final');
        }
    }

    correr() {
        for (let i = 0; i < this.participantes.length; i++) {
            this.participantes[i].acelerar();            
        }
    }

}

//---------------------- Instanciar Pilotos ------------------------------//

let vaina1 = new Pilot("Anakin", 70, 15);
let vaina2 = new Pilot("Sebulba", 70, 15);
let vaina3 = new Pilot("Aldar", 80, 10);
let vaina4 = new Pilot("Mars", 60, 20);

let allVainas = {
    "1": vaina1,
    "2": vaina2,
    "3": vaina3,
    "4": vaina4,
};

//-------------------- Instanciar Circuito -----------------------------//

let circuito = new Circuito("Tatooine", 1000, allVainas);

document.querySelector(".acelera").addEventListener('click', function(event){
    circuito.correr();
});

