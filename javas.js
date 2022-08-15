var localnum = []
var btadd = document.querySelector('#btadd')
var tab = document.querySelector('#tab')
btadd.addEventListener('click', clicouadd(localnum))

var teste = document.querySelector('#teste')

function clicouadd(n){
    for(var posi = 0; posi < localnum.length; posi++){
        localnum[posi] = document.querySelector('#number')
        teste.innerHTML = localnum[posi]
        return localnum[posi]
        
    }

}