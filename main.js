var objetos = [];
var detectado = false;
function setup() {
    canvas = createCanvas(700, 400);
    background("green");
    foto.resize(700, 400);
    detector = ml5.objectDetector("cocossd", listo);
}
function listo() {
    console.log("modelo listo");
    detector.detect(foto, respuesta);
}
function respuesta(error, resultado) {
    if (!error) {
        console.log(resultado);
        objetos = resultado;
        detectado = true;
    }
}
function preload() {
    foto = loadImage("https://byjusmx3.github.io/ADV-C131-Output-actual/dog_cat.jpg")
}
function draw() {
    image(foto, 0, 0, 700, 400);
    if (detectado) {
        for (var i = 0; i < objetos.length; i++) {
            noFill();
            stroke("red");
            rect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);
            nombre = objetos[i].label;
            porcentaje = Math.round(objetos[i].confidence * 100);
            mensaje = nombre + " " + porcentaje + "%";
            textSize(30);
            text(mensaje, objetos[i].x, objetos[i].y)
        }
    }
}