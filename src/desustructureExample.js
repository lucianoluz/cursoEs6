const user = {
    name: 'Luciano',
    age: 29,
    address: {
        city: 'Pelotas',
        state: 'RS',
    }
};

//const name = user.name;
//const age = user.age;
//const city = user.address.user;

//or

//const {name,age, address: {city}} = user;

//console.log(name);
//console.log(age);
//console.log(city)


//or 

function showName({name, age, address:{city}}){
    console.log(name);
    console.log(age);
    console.log(city);
    
}

showName(user);

