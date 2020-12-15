
var min = 1;
var max = 20;
var aleatorio = Math.floor(Math.random() * max - min + 1) + min;
var intentos = 0;
var nombre = prompt('Juego Adivina el numero, escribe tu nombre');
var numero;

for(intentos; intentos < 5; intentos++){
    numero = parseInt(prompt(nombre+" , ingresa un numero entre el "+min+" y el "+max));

    if(numero >= min && numero <= max){
        if(numero < aleatorio){
            alert("el numero que ingreso es mas bajo");
        } else if(numero > aleatorio){
            alert("el numero que ingreso es mas alto");
        } else if(numero == aleatorio){
            break;
        }
    } else {
        alert('debe ingresar un numero entre '+min+' y '+max);
    }
}
if(numero == aleatorio){
    alert('felicidades adivinaste el numero en '+(intentos + 1)+' intentos.');
} else {
    alert('agotaste el numero de intentos, suerte para la proxima');
}
