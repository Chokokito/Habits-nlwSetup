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
//
function dayError(){
    document.querySelector('.dayError').classList.add('dayErrorShow')
    setTimeout(()=>{
        document.querySelector('.dayError').classList.remove('dayErrorShow')
    },2000)
}

function bgDarkMode(){
    document.querySelector('label:after').addEventListener('click',()=>{
        document.querySelector('body').classList.add('changeBgColor')
    })
}

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