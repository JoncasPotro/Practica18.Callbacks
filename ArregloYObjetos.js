const numeros = [1,2,3,4,5];
const dobles = numeros.map(n=>n*2);

console.log(numeros);
console.log(dobles);

const elementosLista = numeros.map(n=>'<li>Numeros: ${n}</li>');

console.log(elementosLista.join(""))


const usuario = {
    nombre: "Jonatan Castelo",
    edad: 26,
    hobbies: ["futbol", "musica", "programar"],
    direccion:  {
        calle: "La de su casa",
        numero: 1234,
        lat: 0,
        lng: 0
    },

saludar: function(){
    return "Hola soy ${this.nombre} y tengo ${this.edad} años"
}
}

let x = 10

function puerta(x){
    if(x >= 18 && x < 40){
        console.log("Puede pasar")
        return;
    } 
    
    if(x >= 40){
        console.log("Vallase a dormir ya es tarde")
        return;
    }
    console.log("no puede pasar")
}

let dia = 1

switch(dia){
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes") 
        break;
    default:
        console.log ("No es ni lunes ni martes")  
}

//for in -- recorre las llaves de un objeto
for(const llave in usuario){
    console.log('${llave} = ${usuario[llave]}')
}

//for of -- recorre las elementos de un arreglo
for(const hobbie of usuario.hobbies){
    console.log(hobbie)
}

for(let i = 0; i < usuario.hobbies.length; i++){
    console.log(usuario.hobbies[i])
}