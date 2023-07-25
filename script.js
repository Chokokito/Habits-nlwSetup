/* const celular = {
    cor: 'preto',
    ligar: function() {
        const mensagem = "Ligando"
        alert(mensagem)
    }
}

celular.ligar() */


//document.querySelector("input").click( )



const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

//Adiciona dia atual
function add(){

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    //const today = "30/07"
    const dayExists = nlwSetup.dayExists(today)
    
    

    if(dayExists){
        dayError()
    }

    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()
// Notificação - Erro ao Adicionar dia já existente.
function dayError(){
    document.querySelector('.dayError').classList.add('dayErrorShow')
    setTimeout(()=>{
        document.querySelector('.dayError').classList.remove('dayErrorShow')
    },2000)
}
//Troca a página para o fundo branco.
const label = document.querySelector('label')
const body = document.querySelector('body')
const header = document.querySelector('header')
const input = document.querySelectorAll('.day input')
const dayText = document.querySelectorAll('.day div')
const logo = document.querySelector('.logo')
const logoblack = document.querySelector('.logoblack')
const error = document.querySelector('.dayError')

label.addEventListener('click', changeBg)

function changeBg(){

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today)

    body.classList.toggle('changeBg');
    header.classList.toggle('changeBgH');
    button.classList.toggle('changeBgBt');
    //Tem que colocar o if, para ele só puxar os inputs após o dia existir.
    //Se não dá merda, ele puxa antes de existir os dias, daí ele não reconhece.
    if(dayExists){
        input.forEach(input =>{
            input.classList.toggle('changeBgInput');
        })
        dayText.forEach(dayText =>{
            dayText.classList.toggle('changeBgText');
        })
    }
    logoblack.classList.toggle('logoBlackShow')
    logo.classList.toggle('logoWhiteHide')
    //Pra lembrar se o usuário ativou o modo claro.
    localStorage.setItem("Clicked", "true")
        if(body.classList.contains('changeBg') == false){
            localStorage.setItem("Clicked", "false")
        }

}
if(localStorage.getItem("Clicked") === "true"){
    changeBg();
}

console.log('test')

/*





const data = {
    run: ['01-01', '01-02', '01-06', '01-07', '01-08'],
    takePills: ['o1-o3'],
    journal: ['01-02']
}


nlwSetup.setData(data)
nlwSetup.load() */


//Depois dá pra tentar fazer uma notificação personalizada, usando o próprio Figma.
//Aí faz uma classe para ela aparecer e sumir depois de um tempo.