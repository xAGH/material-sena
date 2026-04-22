/*

var -> Mutables -> Hositing -> Alcance global
let -> Mutables -> Alcance local
const -> Inutables -> Alcance local

function ejemplo() {
  var a = 1; 

  for (let a of []) {
    var a = ""; // Estaría modificando a = 1

    if (true) {
      let a = true; // solo bloque
      a = false;
    }
  }
}

**/
