const but = document.querySelector(".but");
const input = document.querySelector(".input");
const lista = document.querySelector(".lista");

    but.addEventListener("click",()=>{
        lista.innerHTML = lista.innerHTML + `<li class="itens"> ${input.value} </li>`
    })