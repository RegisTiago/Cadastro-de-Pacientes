var titulo = document.querySelector(".titulo");
titulo.textContent = "Tiago Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i< pacientes.length; i++){
    console.log(pacientes);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura =  tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEValido = validaPeso(peso);
    var alturaEValida = validaAltura(altura);
    
    if(!pesoEValido){
        console.log("Peso Invalido");
        pesoEValido = false;
        tdImc.textContent = "Peso Invalido";
        //paciente.style.backgroundColor = "orange";
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEValida){
        console.log("Altura Invalida");
        alturaEValida = false;
        tdImc.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEValida && pesoEValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
        console.log(imc);
    }
    
}

function validaPeso(peso){
    if(peso >=0 && peso < 200){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 2.00){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}


//titulo.addEventListener("click", function(){
 //   console.log("Clicou");
//} );



   

