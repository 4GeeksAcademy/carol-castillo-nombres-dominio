import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['mi', 'nuestra', 'tu'];
  let adj = ['propia', 'nueva', 'vieja'];
  let what = ['pagina', 'web', 'ventana'];
  let domain = ['.com', '.es', '.io', '.dev'];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let w of what) {
        for (let d of domain) {
          console.log(`${p}${a}${w}${d}`);
        }
      }
    }
  }
};
