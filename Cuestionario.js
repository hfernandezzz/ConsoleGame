const sc = require("prompt-sync")({ sigint: true })
const clc = require("cli-color")

const preguntas = ["1.¿Cuantos tipos de variables hay? ",
    "2.Es <script> </script> la opción correcta para la insercción del codigo Js en páginas html ¿Verdadero o falso? ",
    "3.¿El código JavaScript se ejecuta en el cliente o en el servidor? ",
    "4.Instrucción usada para devolver un valor en una función de JavaScript. ",
    "5.JavaScript diferencia entre mayúsculas y minúsculas. ¿Verdadero o falso? ",
    "6.Elemento usado para almacenar un valor ",
    "7.¿Qué operadores operan a nivel de bit? ",
    "8.Java y JavaScript son lenguajes idénticos ¿Verdadero o falso? ",
    "9.Los programas escritos en JavaScript para ser usados en una página Web pueden colocarse en un archivo externo. ¿Verdadero o falso? ",
    "10.¿Para concatenar cadenas de carácteres se usa el carácter + o &? ",
    "11.Conjunto encapsulado de propiedades y funciones. ",
    "12.Para crear un objeto es imprescindible el uso de funciones. ¿Verdadero o falso? ",
    "13.¿Qué almacena una string? ",
    "14.Los comentarios en HTML se ponen con . ¿ Verdadero o falso ",
    "15.Math.random() siempre devuelve un número inferior a 1 ¿Verdadero o falso? ",
    "16.Una array no puede contener más de un valor. ¿Verdadero o falso? ",
    "17.¿Con qué propiedad puede JavaScript crear, leer y eliminar cookies? ",
    "18.¿Cuándo fue creado JavaScript? ",
    "19.La variable const no puede reasignarse. ¿Verdadero o falso? ",
    "20.Operador que asigna un valor a una variable. "]

const respuestas = ["3", "verdadero", "cliente", "return", "verdadero", "variable", "binarios", "falso", "verdadero", "+", "objeto",
    "falso", "texto", "falso", "verdadero", "falso", "document.cookie", "1995", "verdadero", "="]

let acierto = 0
const rojo = clc.xterm(9)
const naranja = clc.xterm(215)
const amarillo = clc.xterm(11)
const verde = clc.xterm(10)

for (let i = 0; i < preguntas.length; i++) {

    if (respuestas[i] == sc(preguntas[i]).toLowerCase()) {
        acierto = acierto + 5
        console.log(verde("OU YEAH ( ͡◉ ‿‿ ͡◉)👍"))
        console.log(" ")
        console.log(verde(5))
    } else {
        console.log(rojo("BRUH ( ͡◉ ‿‿ ͡◉)👎"))
        console.log(" ")
        console.log(rojo(0))
    }
}

console.log("■■■■■■■■■■■■■■■■■■■■")

if (acierto < 50) {
    console.log("Puntuación total " + rojo(acierto))
    console.log(" ")
    console.log(rojo(" ¯|_( ͡◉ ‿‿ ͡◉)_/¯"))
} else if (acierto < 70) {
    console.log("Puntuación total " + naranja(acierto))
    console.log(" ")
    console.log(naranja(" ( ͡◉ ‿‿ ͡◉)👌"))
} else if (acierto < 90) {
    console.log("Puntuación total " + amarillo(acierto))
    console.log(" ")
    console.log(amarillo(" ( ͡◉ ‿‿ ͡◉)✊ "))
} else if (acierto <= 100) {
    console.log("Puntuación total " + verde(acierto))
    console.log(" ")
    console.log(verde(" 💪( ͡◉ ‿‿ ͡◉҂)"))
}

console.log("■■■■■■■■■■■■■■■■■■■■")
