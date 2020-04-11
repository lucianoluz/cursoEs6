const empresa = {  
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',  
    } 
};

const {nome,endereco:{cidade},endereco:{estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

const user = {
    name: 'Luciano',
    age: 28
};

function mostraInfo({name,age}) {  
    return `${name} tem ${age} anos.`;
 } 
 console.log(mostraInfo(user));


