function tocaSom(seletorAudio){
const elemento = document.querySelector(seletorAudio);

  if (elemento === null) {
  //alert('Elemento não encontrado');
  console.log('elemento não encontrado')
  }
if (elemento != null) {
  elemento.play();
  }
}

for(let contador = 0;contador < listaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
   
    tecla.onclick = function () {
      tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

      if (evento.code === 'Enter' || evento.code === 'Space' ) {
        tecla.classList.add('ativa');
        }
      
      }

      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
        }

}
