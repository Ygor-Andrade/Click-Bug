
/* ----------------------------------------------------------------------
VARIÁVEIS E FUNÇÕES
-------------------------------------------------------------------------
*/

//lista com os invasores
let invasores = document.getElementsByClassName('invasor')
//lista com os "bonzinhos"
let bonzinhos = document.getElementsByClassName('bonzinho')

let score = 0
let tempoRestante = 30

let larguraQuadro = document.getElementById('quadro').offsetWidth


//função para posicionar um elemento
//recebe parametro el que informa o elemento 
const posicElement = (el) => {
    let posX = Math.floor(Math.random() * 1000)
    let posY = Math.floor(Math.random() * 400)
    el.style.position = 'absolute'
    el.style.left = -posX + 'px'
    el.style.top = posY + 'px'
}

//desloca os elementos na tela
//recebe parametros elemento, velocidade e incremento
const moveElemento = (el, veloc, inc) => {

    //executa a cada x milissegundos
    const anima = setInterval(() => {
        //mostra tempo restante

        veloc = veloc + inc
        el.style.left = veloc + 'px'
        //verifica se elemento saiu do quadro ou se foi clicado(classe "morto")
        //retorna para uma posicao a esquerda do quadro (re-entra)
        if (veloc > larguraQuadro || el.classList.contains('morto')) {
            //sorteia um valor entre -50 e -500
            veloc = -Math.random() * 450 + 50
            inc = Math.random() * 40 + 10
            posicElement(el)
            el.classList.remove('morto')
        }
        //adiciona atributo velocidade para consulta no codigo JS
        el.setAttribute('velocidade', inc)
    }, 40);
}

//ao clicar nos insetos 

const clickBug = (el) => {

    //adiciona a classe morto ao inseto
    el.classList.add('morto')
    //adiciona 10 pontos ao score
    score += 10
    //se o inseto clicado for "bonzinho" perde 50 pontos
    if (el.classList.contains('bonzinho')) {
        score -= 60
    }
    document.getElementById('score').innerText = score
    //se a velocidade for maior que 20, faz 100 pontos
    //apenas os insetos que tenham a classe "invasor"
    if (el.getAttribute('velocidade') > 20 && el.classList.contains('invasor')) {
        score += 100
        //mostra +100 pontos por 1/2 segundo 
        let pts100 = document.getElementById('pts100')
        pts100.style.left = el.style.left
        pts100.style.top = el.style.top
        /*const mostra100pts = setInterval(() => {
            pts100.styçe.left = '-300px'
            //interrompe o setInterval 
            clearInterval(mostra100pts)
        }, 500);*/
        const mostra100pts = setTimeout(() => {
            pts100.style.left = '-300px'
        }, 500);
    }
}







/* 
-------------------------------------------------------------------------
       EVENTOS E EXECUÇÕES AUTOMATICAS 
-------------------------------------------------------------------------
*/

for (inv of invasores) {
    posicElement(inv)
    moveElemento(inv, Math.random() * 10, Math.random() * 19 + 1)
    //evt.target = elemento q executa o target - inseto clicado
    inv.addEventListener('mousedown', (evt) => { clickBug(evt.target) })
}

for (bom of bonzinhos) {
    posicElement(bom)
    moveElemento(bom, Math.random() * 10, Math.random() * 19 + 1)
    //evt.target = elemento q executa o target - inseto clicado
    bom.addEventListener('mousedown', (evt) => { clickBug(evt.target) })
}

//Contagem regressiva
setTimeout(() => {
    //|Avisa ao usuario o FIM DO TEMPO 
    alert('CABO CABOO')
    //Recarrega a pagina - semelhante a F5
    location.reload(true)
}, tempoRestante * 1000);

const mostraTempo = setInterval(() => {
    document.getElementById('infoTR').innerText = tempoRestante
    document.getElementById('temporest').innerText = tempoRestante--
}, 1000)

