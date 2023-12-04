function somar() {
    const numero1 = parseFloat(document.querySelector ("#numero1Soma").value)
    const numero2 = parseFloat(document.querySelector ("#numero2Soma").value)

    const total = numero1 + numero2

    document.getElementById("resultadoSoma").innerHTML = total;
    document.getElementsByClassName(".resultado").setAttribute("íd", "resultado");
  
    const paragrafo = document.getElementById("resultadoSoma");
    const resultado = document.createElement("strong");
    paragrafo.appendChild(resultado);
    resultado.innerText = total;

}

function subtrair() {
    const numero1 = parseFloat(document.querySelector ("#numero1Sub").value)
    const numero2 = parseFloat(document.querySelector ("#numero2Sub").value)

    const total = numero1 - numero2

    document.getElementById("resultadoSubtrair").innerText = total
    document.getElementsByClassName(".resultado").setAttribute("íd", "resultado");
  
    const paragrafo = document.getElementById("resultadoSubtrair");
    const resultado = document.createElement("strong");
    paragrafo.appendChild(resultado);
    resultado.innerText = total;

}
    
function multiplicar() {
    const numero1 = parseFloat(document.querySelector ("#numero1Mult").value)
    const numero2 = parseFloat(document.querySelector ("#numero2Mult").value)

    const total = numero1 * numero2

    document.getElementById("resultadoMultiplicar").innerHTML = total;
    document.getElementsByClassName(".resultado").setAttribute("íd", "resultado");
  
    const paragrafo = document.querySelector("#resultadoMultiplicar");
    const resultado = document.createElement ('strong');
    paragrafo.appendChild(resultado);
    resultado.innerText = total; 

}

function dividir() {
    const numero1 = parseFloat(document.querySelector ("#numero1Div").value)
    const numero2 = parseFloat(document.querySelector ("#numero2Div").value)

    const total = numero1 / numero2

    document.getElementById("resultadoDividr").innerHTML = total;
    document.getElementsByClassName(".resultado").setAttribute("íd", "resultado");
  
    const paragrafo = document.getElementById("resultadoDividr");
    const resultado = document.createElement("strong");
    paragrafo.appendChild(resultado);
    resultado.innerText = total;
  
}

