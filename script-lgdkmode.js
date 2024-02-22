const swith = document.querySelector(".switch");

swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");

    //Guardamos seleccion de usuario en LocalStorage
    if(document.body.classList.contains('active')){
        localStorage.setItem('light-mode', 'true');
    } else{
        localStorage.setItem('light-mode', 'false');
    }
})

//Obtengo modo actual
if(localStorage.getItem('light-mode')==='true'){
    document.body.classList.add("active");
} else{
    document.body.classList.remove("active");
}