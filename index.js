/* FUNCIONES */

function playSound() {
  const button_audio=new Audio('boton.mp3');
  button_audio.play();
}
function operation(a,b,c) {
  switch (b){
    case '+':
      return parseFloat(a)+parseFloat(c);
    case '*':
      return a*c;
    case '-':
      return a-c;
    case '/':
      return c===0 ? 'Division entre cero' : a/c;
    case '%':
      return c===0 ? 'Error: modulo entre cero' : (a)*(c)/100;
    default:
      return 'ud, ya se acabo, no data';
  };
};

function simbol(array) {
  array.forEach(val=>{
    if (['*','-','+','/','%'].includes(val)) {
      second_parameter = val;
    };
  });
  return second_parameter;
}

/* Elements & Selectors */
let all_butons = document.querySelectorAll("button");
let pantalla1  = document.getElementById("pantalla1");
let pantalla2  = document.getElementById("pantalla2");
let start_audio = null;
computing_audio = new Audio('sounds/computing.wav');
let second_parameter = "";
/* Functionality */

all_butons.forEach((buton,index) => {
  buton.addEventListener('click', e=>{
    /* Turn on */
    if (index === 0 && pantalla1.innerHTML == "") {
      e.target.style.background = '#A1D6CB';
      pantalla1.innerHTML = 'MS-DOS (1981)';
      start_audio = new Audio('sounds/Inicio.wav');
      start_audio.play();
    /* Turn off */
    }else if (index===0 && pantalla1.innerHTML == 'MS-DOS (1981)') {
      e.target.style.background =  '#FF8383';
      pantalla1.innerHTML = "";
      pantalla2.innerHTML = "";
      start_audio.pause();
      start_audio.currentTime = 0;
    };
    if (pantalla1.innerHTML == 'MS-DOS (1981)' && ![0,19].includes(index) && ![18].includes(index)) {
      pantalla2.innerHTML = pantalla2.innerHTML +""+ e.target.innerHTML
      console.log(pantalla2.innerHTML);
      let splitted_word = pantalla2.innerHTML.split("");

      second_parameter = simbol(splitted_word);
      first_parameter = parseFloat(pantalla2.innerHTML.split(second_parameter)[0]);
      third_parameter =parseFloat(pantalla2.innerHTML.split(second_parameter)[1]);
      console.log('first: ',first_parameter);
      console.log('second: ',third_parameter);
      pantalla2.style.textAlign = "right";
      pantalla2.style.alignContent = 'center';
      pantalla2.style.fontSize = "1.5em";
      pantalla2.style.fontWeight = 500;
      pantalla2.style.paddingRight = '10px'

      const buton_audio = new Audio('sounds/boton.mp3');
      buton_audio.play();
    };
    if (pantalla1.innerHTML == 'MS-DOS (1981)' && index === 18) {
      pantalla2.innerHTML = operation(first_parameter,second_parameter,third_parameter)
      pantalla2.style.textAlign = "right";
      pantalla2.style.alignContent = 'center';
      pantalla2.style.fontSize = "1.5em";
      pantalla2.style.fontWeight = 500;
      pantalla2.style.paddingRight = '10px'

      computing_audio.play();

    }
    /* AC Button */
    if (pantalla1.innerHTML == 'MS-DOS (1981)' && index === 19) {
      pantalla2.innerHTML = "";
      first_parameter = 0;
      third_parameter = 0;
      console.log(typeof(first_parameter));
    }
    /* square root */
    if (pantalla1.innerHTML == 'MS-DOS (1981)' && index === 1) {
      pantalla2.innerHTML = Math.sqrt(parseFloat(pantalla2.innerHTML));
      computing_audio.play();
    }
  })
});
