const cart = new Promise((resolve, reject) => {
    setTimeout(() => {
        let condicao = true
        if(condicao){
            resolve('Carrinho Atualizado');
        }else{
            reject(Error('Erro na promisse!'));
        }
    }, 1000);
})

const creditClient = new Promise((resolve, reject) => {
    setTimeout(() => {
        let condicao = true
        if(condicao){
            resolve('Crédito Carregado');
        }else{
            reject(Error('Erro na promisse!'));
        }
    }, 3000);
})

const infosClient = Promise.all([cart, creditClient]);

infosClient.then((resolved) => { 
    console.log(resolved);
})

//O método Promise.all recebe um array de Promises
//O método Promise.all é chamado quando todas as Promises são finalizadas
//O método Promise.all retorna um array na mesma ordem das Promises
//O método Promise.all retorna um array com os valores de cada resolve