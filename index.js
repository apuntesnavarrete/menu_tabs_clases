let bloques = document.querySelectorAll(".contenidos")
let opciones = document.querySelectorAll(".options")


opciones.forEach((element , index)=> {
    element.addEventListener("click",()=>{
          console.log(element)
                  //el que tenga el index es visible

                    //el que no es no visible

        bloques[0].classList.remove('novisible'); 
        bloques[1].classList.remove('novisible'); 
        bloques[2].classList.remove('novisible'); 
        bloques[3].classList.remove('novisible');

        bloques[0].classList.remove('visible'); 
        bloques[1].classList.remove('visible'); 
        bloques[2].classList.remove('visible'); 
        bloques[3].classList.remove('visible');

        bloques[index].classList.add('visible'); 

        console.log(element)
        console.log(index)

    })
});
