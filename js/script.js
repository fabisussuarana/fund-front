/* var - pode ser atualizada e declarada novamente
   let - pode ser atualizada, mas não declarada novamente
   const - não pode ser atualizada nem declarada novamente
*/

window.onload = function(){ /* onload - para executar o script depois de todo o html ter sido carregado */
    let botoes = document.querySelectorAll("a.excluir") /* Selecionando todos os links com a classe excluir */

    console.log(botoes) /* Exibe no console a lista dos botões excluir */

    botoes.forEach(item => {
        item.addEventListener('click', () => { 
        /* addEventListener() permite configurar funções a serem chamadas quando um evento especificado acontece */

            if(confirm("Deseja realmente excluir?")){
                item.parentNode.parentNode.remove() 
                /* item é o link, o primeiro parentNode se refere ao que está acima desse link, ou seja, 
                o pai do link, o td, a célula. O segundo parentNode está se referindo ao que está acima do
                td, o pai dele, no caso o tr. Assim excluirá a linha, e não apenas a célula*/
            }
        })
    })

 //   let xhr = new XMLHttpRequest()

 /* XMLHttpRequest() permite transferir dados entre um cliente e servidor. 
    Ele recupera os dados de uma url sem ter que recarregar a página toda */

    let botaoCarregar = document.querySelector("a#load")

    if(botaoCarregar){
        botaoCarregar.addEventListener("click", () => {
            let tabela = document.querySelector("table")
            let url = "http://my-json-server.typicode.com/danielnsilva/json/profissionais"

           /* xhr.open("GET", url)
            xhr.addEventListener("readystatechange", () => {          
                
                * o evento readystatechange é ativado quando o atributo readyState do documento 
                é modificado

                if(xhr.readyState == 4 && xhr.status == 200){
                    let dados = JSON.parse(xhr.responseText) */

                    fetch(url)
                    .then(resposta => resposta.json())
                    .then(dados => {
                        for(let item in dados){
                            let linha = document.createElement("tr") /* Pra criar linha */
                            let id = document.createElement("td") /* Pra criar célula */
                            let nome = document.createElement("td")
                            let registro = document.createElement("td")
                            let especialidade = document.createElement("td")
                            let unidade = document.createElement("td")
                            let telefone = document.createElement("td")
                            let email = document.createElement("td")
                            let acoes = document.createElement("td")
                            id.classList.add("fit")
                            id.textContent = dados[item].id
                            nome.textContent = dados[item].nome
                            registro.textContent = dados[item].registro
                            especialidade.textContent = dados[item].especialidade
                            unidade.textContent = dados[item].unidade
                            telefone.textContent = dados[item].telefone
                            email.textContent = dados[item].email
                            acoes.innerHTML = `<a href="javascript:void(0)" class="botao">Editar</a>\n
                            <a href="javascript:void(0)" class="botao excluir">Excluir</a>`
    
                            linha.appendChild(id) /* Significa que vai ser adicionado após a última linha */
                            linha.appendChild(nome)
                            linha.appendChild(registro)
                            linha.appendChild(especialidade)
                            linha.appendChild(unidade)
                            linha.appendChild(telefone)
                            linha.appendChild(email)
                            linha.appendChild(acoes)
                            tabela.tBodies[0].appendChild(linha)
                        }
                    })
               /* }
            })
            xhr.send() */
        })
    }
}