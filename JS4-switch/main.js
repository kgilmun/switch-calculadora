// switch (interruptor)

// decir un numero del 1 al 4 ymostrar la estación del año correspondiente

// else if... else if... etc --- si el numero es 1, entonces muestras "Primavera"

//En vez de tantos else if, puedes usar SWITCH




/*let numEstacio = parseInt(prompt("Digue'm un numero de l'1 al 4"));

switch(numEstacio){
    case 1:
        alert("PRIMAVERA");
        break;

    case 2: 
        alert("VERANO");
        break;

    case 3: 
        alert("OTOÑO");
        break;

    case 4 : 
        alert("INVIERNO");
        break;

    default:
        alert("Tienes que escribir un número del 1 al 4");
}
*/

//ejercicio de la calculadora con SWITCH

let num1 = parseInt(prompt("Escribe un numero num1"));
let signo = prompt("Escribe un signo de estos: \n +, -, *, /, % \n o escribe exit para salir");
let num2 = parseInt(prompt("Escribe un numero num2"));

if (!(isNaN(num1)) && !(isNaN(num2))) {
    switch(signo) {
        case "+" :
            document.write("La suma de " + num1 + " y " + num2 + " es: " + (num1+num2));
            break;
    
        case "-" :
            document.write("La resta de " + num1 + " y " + num2 + " es: " + (num1-num2));
            break;
    
        case "*" :
            document.write("La multiplicacion de " + num1 + " y " + num2 + " es: " + (num1*num2));
            break;
    
        case "/" :
            document.write("La division de " + num1 + " y " + num2 + " es: " + (num1/num2));
            break;
    
        case "%" :
            document.write("El resto de " + num1 + " y " + num2 + " es: " + (num1%num2));
            break;

        case "exit":
            alert("Has salido de la calculadorra");
            break;
    
        default:
            alert("Tienes que escoger uno de los siguientes signos: \n +, -, *, /, %. ");
    }
}

else {
    document.write("Num1 o Num2 no son un numero");
}

