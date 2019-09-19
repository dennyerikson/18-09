
// calculo pitágoras
function calc(){
    var b = parseFloat(document.getElementById('b').value.replace(",","."));
    var c = parseFloat(document.getElementById('c').value.replace(",","."));
    var distancia =0;

    distancia = Math.sqrt((b**2) + (c**2));

    document.getElementById("distancia").innerHTML = parseFloat(distancia).toFixed(2)

    if(distancia>0){
        alert("Maior que 0");
    }
};

