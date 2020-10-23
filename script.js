
//maquina de escrever

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }

  const titulo = document.querySelector('.titulo2 h2');
  typeWriter(titulo);

//switcher
  const themeSwitcher = document.getElementById("switcher");
function troca() {
  const selectBody = document.body.classList.toggle("ativo");
}
themeSwitcher.addEventListener("click", troca);

//menu mobile 
const menu = document.querySelector(".menu");

function callback() {
  menu.classList.toggle("menuOpen");
  menu.classList.toggle("menuClosed");
}
function target(event) {
  if (event.target != menu) {
    menu.classList.add("menuClosed");
    menu.classList.remove("menuOpen");
  }
}
document.addEventListener("click", target);
