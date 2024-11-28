//selecionando e adicionando as funões aos botoes
let btnStart = document.getElementById('start').addEventListener('click',start)
let btnPause = document.getElementById('pause').addEventListener('click',pause)
let btnStop = document.getElementById('stop').addEventListener('click',stop)

//setando hora ,minuto e segundo
let hora = 0;
let minuto = 0;
let segundo =0;

let interval;


//função start chama a função setInterval que a cada 1000segundo chama a função couting
function start(){
    interval = setInterval(couting,1000)
}

function pause(){
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);

    hora =0;
    minuto=0;
    segundo=0;

    document.getElementById('tempo').innerText=`${doisDigitos(hora)}:${doisDigitos(minuto)}:${doisDigitos(segundo)}`
}
//função couting adicionar mais 1 ao segundo quando chegar em 60 zera e adiciona um ao minuto,depois faz o mesmo com minuto e adicionar +1 a hora
function couting(){
    segundo ++;

    if(segundo === 60){
        segundo = 0;
        minuto ++
    

        if(minuto === 60){
            minuto =0 
            hora++
        
        }
    }

    document.getElementById('tempo').innerText=`${doisDigitos(hora)}:${doisDigitos(minuto)}:${doisDigitos(segundo)}`

}
//função doisDigitos recebe o digito como parametro se o numero for menor q 10 ele adicona um zero a esquerda 
function doisDigitos(digito){
    if(digito < 10){
        return('0' + digito)
    }else{
        return (digito)
    }
}