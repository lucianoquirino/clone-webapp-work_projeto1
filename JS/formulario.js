var container = document.querySelector("#app ul")
var inputElement = document.querySelector("#inpt")
var textareaElement1 = document.querySelector("#text")
var buttonElement = document.querySelector("#app button")

var msgs = []

function render(){

    container.innerHTML = ''
    
    for(msg of msgs){
        var newElement = document.createElement('li')
        var mensagemText = document.createTextNode(msg)

        var linkElement = document.createElement('a')
        var linktext = document.createTextNode('Excluir')
        
        linkElement.setAttribute('href','#')
        var pos = msgs.indexOf(msg)

        linkElement.setAttribute('onclick','excluir_Mensagem(' + pos +')')
        linkElement.appendChild(linktext)

        newElement.appendChild(mensagemText)
        newElement.appendChild(linkElement)
        container.appendChild(newElement)
    }

}

function adicionar_Mensagem(){
    
    var mensagemText = inputElement.value
    var mensagemText2 = textareaElement1.value

    msgs.push(mensagemText  + ':' + mensagemText2)
    inputElement.value = ''
    textareaElement1.value =  ''
    render()

}

buttonElement.onclick = adicionar_Mensagem

function excluir_Mensagem(pos){
    
    msgs.splice(pos,1)
    render()

}