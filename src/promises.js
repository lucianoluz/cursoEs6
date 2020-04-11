const myPromise = () => new Promise ((resolve,reject)=>{
    setTimeout( ()=> {resolve ("ok")}, 2000)
})

async function testPromise() {
    const result = await myPromise();
    console.log(result);
    const otherResult = await myPromise();
    console.log(otherResult)
}

//testPromise();
testPromise();

const executePromise = async () =>{
    const result = await myPromise();
    console.log(result);
}

//executePromise();
