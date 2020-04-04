const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }, 
];

const ages = users.map (item => item.idade);
//console.log(ages);

const rocketSeatEmployees = users.filter(item => item.idade>18 && item.empresa==='Rocketseat');

//console.log(rocketSeatEmployees);

const googleEmployee = users.find (item => item.empresa==='Google');
//console.log(googleEmployee);

const agesDoubles = users.map((item)=>{
    item.idade = item.idade*2;
    return item;
})

console.log(agesDoubles);
const filteredAges= a.filter (item =>item.idade<51);
console.log(filteredAges);