// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                 VARIÁVEIS E FUNÇÕES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//Lista com os inimigos
let invasores = document.getElementsByClassName('invasor')


//listo com os Bons
let bonzinhos = document.getElementsByClassName('bonzinho')

let score = 0
let tempoRestante = 30

let LarguraQuadro = document.getElementById('quadro').offsetWidth
console.log(LarguraQuadro)

//função para posicionar um elemento
//recebe parãmetro el que informa o elemente
const posicElement = (el) => {
    let posX = Math.floor(Math.random() * 1000)
    let posY = Math.floor(Math.random() * 400)
    el.style.position = 'absolute'
    el.style.left = posX + 'px'
    el.style.top = posY + 'px'

}

//Desloca os elementos na tela
//Recebe parametros elemento, velocidade, incrimento
const moveElemento = (el, veloc, inc) => {


    //executa a cada x milisegundos
    const anima = setInterval(() => {
        veloc = veloc + inc
        el.style.left = (veloc + inc) + 'px'

        //verifica se alemento saiu do quadro
        // volta para uma pocição inicial 
        if(veloc > LarguraQuadro){
            posicElement(el)
        }
    }, 40);
}




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//              EVENTOS E EXECUÇÕES AUTOMÁTICAS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

for (inv of invasores) {
    posicElement(inv)
    moveElemento(inv, Math.random()*10, Math.random()*19-1)
}

