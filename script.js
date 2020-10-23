
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
