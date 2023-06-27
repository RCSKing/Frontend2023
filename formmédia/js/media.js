let form = document.getElementById("calcform");
let divResultado = document.getElementById("resultado");


form.addEventListener("submit",function(event){
    event.preventDefault();
    calcmedia();
});

function calcmedia(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    let valor4 = parseFloat(document.getElementById("valor4").value);
    let media = (valor1+valor2+valor3+valor4)/4;
    if(media < 6){
        divResultado.textContent = "Média: " + media + " REPROVADO";
    }
    else{
        divResultado.textContent = "Média: " + media + " APROVADO";
    }
};


