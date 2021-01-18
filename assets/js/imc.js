const form = document.querySelector('#form');

form.addEventListener('submit', function(){

})

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
        setResult('Peso inválido', false); 
        return;
    }

    if (!height) {
        setResult('Altura inválida', false); 
        return;
    }

    const imc = getImc(weight,height)
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} resultando em ${nivelImc}`
    setResult(msg,true)

});

function getNivelImc(imc) {
    const nivel = ['magreza','normal','sobrepeso','obesidade','obesidade grave'];

    if (imc <= 18.5) return nivel[0];
    if (imc => 18.5 && imc <= 24.9) return nivel[1];
    if (imc >= 25 && imc <= 29.9) return nivel[2];
    if (imc >= 30 && imc <= 39.9) return nivel[3];
    if(imc >= 40) return nivel[4];

}

function getImc(weight,height) {
    const imc = weight / height ** 2;
    return imc.toFixed(3);
}

function createP() {
    const p = document.createElement('p');
    // paragraph.classList.add('paragraph-result');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    const p = createP();
    result.innerHTML = '';
    if (isValid) {
        p.classList.add('paragraph-valid')
    } else {
        p.classList.add('paragraph-invalid')
    }
    p.innerHTML = msg;
    result.appendChild(p);
}

