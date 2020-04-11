const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map(item=> item *2);
    

console.log(newArr);

const promise = ()=>  new Promise((resolve, reject)=> resolve()); 

// 3.3 // Dica: Utilize uma constante pra function 
const nome = "Diego"; 
const idade = 23; 


const showUser = (name='Diego', age=18) => ({name, age});

console.log(showUser (nome,idade));
console.log(showUser (nome));
