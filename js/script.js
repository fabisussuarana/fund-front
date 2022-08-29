window.onload = function(){
    let botoes = document.querySelectorAll("a.excluir") /* Selecionando todos os links com a classe excluir */

    console.log(botoes) /* Exibe no console a lista dos botões excluir */

    botoes.forEach(item => {
        item.addEventListener('click', () => {
            if(confirm("Deseja realmente excluir?")){
                item.parentNode.parentNode.remove() 
                /* item é o link, o primeiro parentNode se refere ao que está acima desse link, ou seja, 
                o pai do link, o td, a célula. O segundo parentNode está se referindo ao que está acima do
                td, o pai dele, no caso o tr. Assim excluirá a linha, e não apenas a célula*/
            }
        })
    })
}