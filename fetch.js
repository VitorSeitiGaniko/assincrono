const doc = fetch( './text.txt')

doc.then((resolved) => {
    console.log('status  ==> ', resolved.status)
})

doc.then((resolved) => {
    return resolved.text()
})
.then((resolved) => {
    console.log('TEXTO  ==> ', resolved)
})


const cep = '06835120'
const request = fetch(`https://viacep.com.br/ws/${cep}/json/`)

request.then((response) => response.json())

.then((resolved) => {
    console.log('CEP  ==> ', resolved)
})

//fetch é uma função que retorna uma Promise
//fetch recebe como parâmetro o endereço da API
//fetch retorna um objeto Response
//Response é um objeto que representa a resposta da API
//Response tem métodos para retornar os dados em diferentes formatos

//Response.json() retorna um objeto JavaScript
//Response.text() retorna um texto
//Response.blob() retorna um arquivo
//Response.arrayBuffer() retorna um ArrayBuffer
//Response.formData() retorna um FormData
//Response.body retorna um ReadableStream
//Response.ok retorna um booleano
//Response.status retorna o status da resposta
//Response.statusText retorna a mensagem de status da resposta
//Response.url retorna a URL da resposta
//Response.type retorna o tipo da resposta
//Response.headers retorna os cabeçalhos da resposta
//Response.clone() clona a resposta
//Response.redirect() redireciona a resposta
//Response.error() retorna um erro
//Response.abort() aborta a resposta
