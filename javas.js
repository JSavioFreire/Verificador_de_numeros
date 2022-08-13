var localnum = []
var btadd = document.querySelector('#btadd')
var tab = document.querySelector('#tab')
btadd.addEventListener('click', clicouadd(localnum))

function clicouadd(n){
    for(var posi = 0; posi < localnum.length; posi++){
        localnum[posi] = document.querySelector('#number')
        teste.innerHTML = localnum[posi]
    }

}
var teste = document.querySelector('#teste')
teste.innerHTML = localnum.length