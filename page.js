let Key = 'f48c52d994f6ca49495addb462c34dc8'
let button = window.document.getElementById('button')


function Most(dados){

    document.getElementById('local').innerHTML = 'Tempo em ' + dados.name
   document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector('.clima').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML ="Umidade: "+ dados.main.humidity + '%';
    document.querySelector('img-prevision').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}


async function city(Cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cidade}&appid=${Key}&lang=pt_br&units=metric`).then( resposta => resposta.json() )
    Most(dados)

}

function Api(){
    let Cidade = window.document.querySelector('#inputxt').value
    city(Cidade)
}

button.addEventListener('click', Api)


