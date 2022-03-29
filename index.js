let bloques = document.querySelectorAll(".contenidos")
let opciones = document.querySelectorAll(".options")


opciones.forEach((element , index)=> {
    element.addEventListener("click",()=>{
          console.log(element)
          console.log(bloques)
                  bloques.forEach((bloque) => {
                    bloque.classList.remove('novisible'); 
                    bloque.classList.remove('visible'); 
                  })
        bloques[index].classList.add('visible'); 
    })
});
