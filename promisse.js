const promisse = new Promise((resolve, reject) => {
    let condicao = true
    if(condicao){
        setTimeout(() => {
            resolve('FINALIZOU A REQUEST 01');
        }, 2000);
    }else{
        reject(Error('Erro na promisse!'));
    }
})

promisse.then((resolved) => {
    console.log(resolved);
    return resolved + ' 02';
})

.then((resolved) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(resolved);
            resolve(resolved + ' 03');
        }, 2000);
    });
})

.then((resolve) => {
    console.log(resolve);
})

.catch((reject) => {
    console.log(reject);
})

.finally(() => {
    console.log('Finalizou a promisse');
})

//A Promise é um objeto, então para cria-lá é necessário utilizar a palavra reservada new
//A Promise recebe uma função CALLBACK com dois parâmetros, resolve e reject
//O resolve é chamado quando a Promise é finalizada com sucesso
//O reject é chamado quando a Promise é finalizada com erro

//O método then é chamado quando a Promise é finalizada com sucesso
//Para acessar o resolve é necessário utilizar o método then
//O método then recebe uma função CALLBACK com um parâmetro que é o resolve

//O método then pode ser encadeado, ou seja, pode ser chamado várias vezes
//O valor retornado, é passado para o próximo then
//O valor retornado, pode ser uma Promise

//O método catch é chamado quando a Promise é finalizada com erro
//Para acessar o reject é necessário utilizar o método catch
//O método catch recebe uma função CALLBACK com um parâmetro que é o reject

//O método finally é chamado sempre que a Promise é finalizada
//O método finally não recebe parâmetros
