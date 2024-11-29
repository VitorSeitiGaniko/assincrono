async function getText(){
    try{
        const doc = await fetch( './text.txt')
        const text = await doc.text()
        console.log('ASYNC  ==> ', text)
    }

    catch(error){   
        console.error('ERROR  ==> ', error)
    }
}

getText()

//A palavra reservada async é utilizada para criar uma função assíncrona
//A função assíncrona retorna uma Promise
//A palavra reservada await é utilizada para esperar a Promise ser resolvida
//O await só pode ser utilizada dentro de uma função assíncrona
//O await espera a Promise ser resolvida para continuar o código

//O try é o bloco de código que você quer tentar executar
//O catch é o bloco de código que é executado quando ocorre um erro

//SETTIMEOUT NÃO É UMA PROMISE
