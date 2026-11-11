function consultarPublicaciones(callback){
    fetch("https://jsonplaceholder.typicode.com/posts").then((r)=>{
    console.log("ya consulte las publicaciones")
    callback(r)
})
}

function terminarPrograma(pubs){
    console.log(pubs)
    console.log("Finaliza la ejecucion");
}

console.log("inicia la ejecucion");
//consultarPublicaciones(terminarPrograma);
consultarPublicaciones((pubs)=>())